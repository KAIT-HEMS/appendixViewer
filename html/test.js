// test program for parseJSON
// 2019.05.31
'use strict';

// const selectedEoj = "0x0000"; // Super Class
// const selectedEoj = "0x002D"; // F-latest
const selectedEoj = "0x0130"; // oneOfがない場合
// const selectedEoj = "0x0288"; // oneOfがある場合（A-E, F-latest)
// const selectedEoj = "0x0287"; // EPC=0xE0
// const selectedRelease = "A";
// const selectedRelease = "B";
const selectedRelease = "F";

const deviceDescription = getDeviceDescriptionObj(selectedEoj, selectedRelease);
console.log(deviceDescription);
