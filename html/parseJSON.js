// elappendix.js for elappendix(client side)
// 2019.04.26
'use strict';

// ********** TEST PROGRAM **********
// const selectedEoj = "0x0000"; // Super Class
// const selectedEoj = "0x002D"; // F-latest
// const selectedEoj = "0x0130"; // oneOfがない場合
// const selectedEoj = "0x0288"; // oneOfがある場合（A-E, F-latest)
// const selectedEoj = "0x0287"; // EPC=0xE0
// const selectedRelease = "A";
// const selectedRelease = "B";
// const selectedRelease = "F";

// const deviceDescription = getDeviceDescriptionObj(selectedEoj, selectedRelease);
// console.log(deviceDescription);
// ********** TEST PROGRAM **********


// function: EOJとReleaseから、該当するdevice description objectをreturnする
// input: string:selectedEoj, string:selectedRelease, example: ('0x0130', 'A')
// output: object:device description object
// note: oneOfと$refを処理したものがreturnされる
function getDeviceDescriptionObj(selectedEoj, selectedRelease) {
//   console.log("EOJ:", selectedEoj, " Release:", selectedRelease);
//   console.log("JSON data Date:", jsonData.metaData.date, "Relase:", jsonData.metaData.release, "Version:", jsonData.metaData.version);

  // replace $ref in definitions
  let definitions = Object.assign({}, jsonData.definitions);  // copy object
  for (const [key, value] of Object.entries(definitions)) {
    definitions[key] = replaceRef(value);
  }
//   console.log("definitions=",definitions);
  
  let deviceObject = Object.assign({}, jsonData.devices[selectedEoj]);  // copy object
  const latestRelease = jsonData.metaData.release;

  // device object：oneOfの選択とselectedReleaseの確認
  if (Object.keys(deviceObject).length !== 0) {
    if (!deviceObject.oneOf) {    // deviceObjectにoneOfが無い場合
        const validFrom = deviceObject.validRelease.from;
        const validTo = (deviceObject.validRelease.to == 'latest') ? latestRelease : deviceObject.validRelease.to;
        // selectedReleaseがvalidRelease内にあることの確認
        if (!((validFrom <= selectedRelease) && ( selectedRelease <= validTo))) {
          console.log("ERROR: no object for the selected Release");
          return;
        }
    } else {        // deviceObjectにoneOfがある場合
    console.log("device object oneOf");
        for (const object of deviceObject.oneOf) {
            const validFrom = object.validRelease.from;
            const validTo = (object.validRelease.to == 'latest') ? latestRelease : object.validRelease.to;
          // selectedReleaseがvalidRelease内にあることの確認
            if ((validFrom <= selectedRelease) && ( selectedRelease <= validTo )) {
                deviceObject = object;
                break;
            }
        }
        if (deviceObject.oneOf) { // oneOfが残っていたら、selectedReleaseに置き換わっていないということ
          console.log("ERROR: no object for the selected Release");
          return;        
        }
    }
  } else {
    console.log("ERROR: no object for the selected EOJ");
    return;
  }

  // property object：oneOfの選択とselectedReleaseの確認
  for (const [key, value] of Object.entries(deviceObject.elProperties)) {
    if (!value.oneOf) {    // property objectにoneOfが無い場合
      const validFrom = value.validRelease.from;
      const validTo = (value.validRelease.to == 'latest') ? latestRelease : value.validRelease.to;
      // selectedReleaseがvalidRelease内になければpropertyを削除
      if (!((validFrom <= selectedRelease) && ( selectedRelease <= validTo ))) {
        delete deviceObject.elProperties[key];
      }
    } else {        // property objectにoneOfがある場合
      for (const object of value.oneOf) {
        const validFrom = object.validRelease.from;
        const validTo = (object.validRelease.to == 'latest') ? latestRelease : object.validRelease.to;
        // selectedReleaseがvalidRelease内にあることの確認
        if ((validFrom <= selectedRelease) && ( selectedRelease <= validTo )) {
          deviceObject.elProperties[key] = object;
          delete deviceObject.elProperties[key].oneOf;
          break;  // ひとつみつかれば、Loopから抜ける
        }
      }
      if (deviceObject.elProperties[key].oneOf) {    // oneOfが残っている場合propertyを削除
        delete deviceObject.elProperties[key];
      }   
    }
  }

// propertyの$refの処理
  for (const property in deviceObject.elProperties) {
    const propertyData = deviceObject.elProperties[property].data;
    deviceObject.elProperties[property].data = replaceRef(propertyData);
  }
  return deviceObject;  
}

// function: inputのkeyが'$ref'ならdefinitions[value]をreturnする。それ以外はinputをreturnする
// input: object
// output: object
function replaceRef(inputObject) {
  let outputObject = Object.assign({}, inputObject);
  for (const key in inputObject) {
    switch (key) {
      case "$ref":
        const reference = inputObject["$ref"].split('/')[2]; // uriの３番目の要素を取り出す
        const definedData = jsonData.definitions[reference];  // definitionsで定義されたobject
        delete outputObject["$ref"];
        Object.assign(outputObject, definedData);
        break;
      case "oneOf":
        for (let i=0; i < inputObject.oneOf.length; i++) {
          outputObject.oneOf[i] = replaceRef(inputObject.oneOf[i]);
        }
        break;
      case "element":
        outputObject.element = replaceRef(inputObject.element);
        break;
      case "items":
        outputObject.items = replaceRef(inputObject.items);
        break;
      case "type":
        switch (inputObject[key]) {
          case "object":
            for (let i=0; i < inputObject.properties.length; i++) {
              outputObject.properties[i] = replaceRef(inputObject.properties[i]);
            }
            break;
          default:
            break;            
          }
      default:
        break;
    }
  }
  return outputObject;
}