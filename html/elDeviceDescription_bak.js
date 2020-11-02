const jsonData = {
    "metaData":{
        "date":"2020-06-09",
        "release":"M",
        "version":"3.1.6r3",
        "note":{"ja":"Relase M 英語版対応", "en":"Update for Release M English version"},
        "Copyright":"(C) 2020 Kanagawa Institute of Technology"
    },
    "definitions":{
        "number_0-8":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":8
        },
        "number_0-23":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":23
        },
        "number_0-24":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":24
        },
        "number_0-59":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":59
        },
        "number_0-84":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":84
        },
        "number_0-99":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":99
        },
        "number_0-127":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":127
        },
        "number_0-252":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":252
        },
        "number_0-244":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":244
        },
        "number_0-253":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":253
        },
        "number_0-254":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":254
        },
        "number_0-255":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":255
        },
        "number_1-2":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":2
        },
        "number_1-8":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":8
        },
        "number_1-12":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":12
        },
        "number_1-31":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":31
        },
        "number_1-60":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":60
        },
        "number_1-128":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":128
        },
        "number_1-128_u16":{
            "type":"number",
            "format":"uint16",
            "minimum":1,
            "maximum":128
        },
        "number_1-252":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":252
        },
        "number_1-253":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":253
        },
        "number_1-255":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":255
        },
        "number_9-17":{
            "type":"number",
            "format":"uint8",
            "minimum":9,
            "maximum":17
        },
        "number_10-17":{
            "type":"number",
            "format":"uint8",
            "minimum":10,
            "maximum":17
        },
        "number_49-63":{
            "type":"number",
            "format":"uint8",
            "minimum":49,
            "maximum":63
        },
        "number_50-250":{
            "type":"number",
            "format":"uint8",
            "minimum":50,
            "maximum":250
        },
        "number_0-100%":{
            "type":"number",
            "format":"uint8",
            "unit":"%",
            "minimum":0,
            "maximum":100
        },
        "number_0-50Celsius":{
            "type":"number",
            "format":"uint8",
            "unit":"Celsius",
            "minimum":0,
            "maximum":50
        },
        "number_0-100Celsius":{
            "type":"number",
            "format":"uint8",
            "unit":"Celsius",
            "minimum":0,
            "maximum":100
        },
        "number_0-150Celsius":{
            "type":"number",
            "format":"uint8",
            "unit":"Celsius",
            "minimum":0,
            "maximum":150
        },
        "number_0-180degree":{
            "type":"number",
            "format":"uint8",
            "unit":"degree",
            "minimum":0,
            "maximum":180
        },
        "number_0-360degree":{
            "type":"number",
            "format":"uint8",
            "unit":"degree",
            "minimum":0,
            "maximum":360
        },
        "number_0-360degree_u16":{
            "type":"number",
            "format":"uint16",
            "unit":"degree",
            "minimum":0,
            "maximum":360
        },
        "number_-127-125Celsius":{
            "type":"number",
            "format":"int8",
            "unit":"Celsius",
            "minimum":-127,
            "maximum":125
        },
        "number_-127-126Celsius":{
            "type":"number",
            "format":"int8",
            "unit":"Celsius",
            "minimum":-127,
            "maximum":126
        },
        "number_0-99_u16":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":99
        },
        "number_1-253_u16":{
            "type":"number",
            "format":"uint16",
            "minimum":1,
            "maximum":253
        },
        "number_0-1000":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":1000
        },
        "number_0-3600":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":3600
        },
        "number_0-4095":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":4095
        },
        "number_0-10000":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":10000
        },
        "number_0-32766":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":32766
        },
        "number_0-65533":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":65533
        },
        "number_0-65534":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":65534
        },
        "number_0-65535":{
            "type":"number",
            "format":"uint16",
            "minimum":0,
            "maximum":65535
        },
        "number_1-65533":{
            "type":"number",
            "format":"uint16",
            "minimum":1,
            "maximum":65533
        },
        "number_-200-1000":{
            "type":"number",
            "format":"int16",
            "minimum":-200,
            "maximum":1000
        },
        "number_-2732-32766":{
            "type":"number",
            "format":"int16",
            "minimum":-2732,
            "maximum":32766
        },
        "number_-32767-32765":{
            "type":"number",
            "format":"int16",
            "minimum":-32767,
            "maximum":32765
        },
        "number_-32767-32766":{
            "type":"number",
            "format":"int16",
            "minimum":-32767,
            "maximum":32766
        },
        "number_0-999999":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":999999
        },
        "number_0-99999999":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":99999999
        },
        "number_0-999999999":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":999999999
        },
        "number_0-4294967293":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":4294967293
        },
        "number_0-4294967295":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":4294967295
        },
        "number_1-999999999":{
            "type":"number",
            "format":"uint32",
            "minimum":1,
            "maximum":999999999
        },
        "number_-999999999-999999999":{
                "type":"number",
                "format":"int32",
                "minimum":-999999999,
                "maximum":999999999
        },
        "number_-2147483647-2147483645":{
            "type":"number",
            "format":"int32",
            "minimum":-2147483647,
            "maximum":2147483645
        },
        "number_-2147483647-2147483646":{
            "type":"number",
            "format":"int32",
            "minimum":-2147483647,
            "maximum":2147483646
        },
        "state_RESET":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
            ]
        },
        "state_ON-OFF-3031":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x30", "state":{"ja":"入", "en":"ON"}},
                {"edt":"0x31", "state":{"ja":"切", "en":"OFF"}}
            ]
        },
        "state_YES-NO-3031":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x30", "state":{"ja":"有", "en":"YES"}},
                {"edt":"0x31", "state":{"ja":"無", "en":"NO"}}
            ]
        },
        "state_AUTO-41":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}}
            ]
        },
        "state_AUTO-71":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x71", "state":{"ja":"自動", "en":"Automatic"}}
            ]
        },
        "state_ON-OFF-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"入", "en":"ON"}},
                {"edt":"0x42", "state":{"ja":"切", "en":"OFF"}}
            ]
        },
        "state_YES-NO-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                {"edt":"0x42", "state":{"ja":"無", "en":"NO"}}
            ]
        },
        "state_YES-NO-4140":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                {"edt":"0x40", "state":{"ja":"無", "en":"NO"}}
            ]
        },
        "state_OPEN-CLOSE-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"開", "en":"Open"}},
                {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
            ]
        },
        "state_OPEN-CLOSE-STOP-414243":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"開", "en":"Open"}},
                {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}},
                {"edt":"0x43", "state":{"ja":"停止", "en":"Stop"}}
            ]
        },
        "state_LOCK-UNLOCK-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
            ]
        },
        "state_AUTO-STANDARD-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
            ]
        },
        "state_AUTO-NONAUTO-4142":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"AUTO", "en":"Automatic"}},
                {"edt":"0x42", "state":{"ja":"非AUTO", "en":"Non-automatic"}}
            ]
        },
        "state_LOW-MID-HIGH-414243":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                {"edt":"0x42", "state":{"ja":"中", "en":"Middle"}},
                {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
            ]
        },
        "state_LOW-MID-HIGH-NONE-41424344":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                {"edt":"0x42", "state":{"ja":"中", "en":"Middle"}},
                {"edt":"0x43", "state":{"ja":"高", "en":"High"}},
                {"edt":"0x44", "state":{"ja":"無し", "en":"None"}}
            ]
        },
        "state_LightColor-40-44":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}},
                {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
            ]
        },
        "state_LightColor-41-44":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}}
            ]
        },
        "state_Undefined-7E":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
            ]
        },
        "state_Undefined-FD":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0xFD", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
            ]
        },
        "state_NoHotWater-FE":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0xFE", "state":{"ja":"熱水不使用", "en":"Not to use warm water"} }
            ]
        },
        "state_Undefined-FF":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0xFF", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
            ]
        },
        "state_AUTO-FF":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0xFF", "state":{"ja":"自動", "en":"AUTO"}}
            ]
        },
        "state_Undefined-FFFF":{
            "type":"state",
            "size":2,
            "enum":[
                {"edt":"0xFFFF", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
            ]
        },
        "state_AUTO-FFFF":{
            "type":"state",
            "size":2,
            "enum":[
                {"edt":"0xFFFF", "state":{"ja":"自動", "en":"AUTO"}}
            ]
        },
        "level_21-15":{
            "type":"level",
            "base":"0x21",
            "maximum":15
        },
        "level_31-3":{
            "type":"level",
            "base":"0x31",
            "maximum":3
        },
        "level_31-5":{
            "type":"level",
            "base":"0x31",
            "maximum":5
        },
        "level_31-8":{
            "type":"level",
            "base":"0x31",
            "maximum":8
        },
        "level_31-10":{
            "type":"level",
            "base":"0x31",
            "maximum":10
        },
        "level_31-15":{
            "type":"level",
            "base":"0x31",
            "maximum":15
        },
        "level_31-16":{
            "type":"level",
            "base":"0x31",
            "maximum":16
        },
        "level_40-6":{
            "type":"level",
            "base":"0x40",
            "maximum":6
        },
        "level_A0-8":{
            "type":"level",
            "base":"0xA0",
            "maximum":8
        },
        "level_A0-32":{
            "type":"level",
            "base":"0xA0",
            "maximum":32
        },
        "level_A1-8":{
            "type":"level",
            "base":"0xA1",
            "maximum":8
        },
        "level_C0-8":{
            "type":"level",
            "base":"0xC0",
            "maximum":8
        },
        "level_C0-32":{
            "type":"level",
            "base":"0xC0",
            "maximum":32
        },
        "level_C1-8":{
            "type":"level",
            "base":"0xC1",
            "maximum":8
        },
        "level_3000-17":{
            "type":"level",
            "base":"0x3000",
            "maximum":17
        },
        "level_A000-60":{
            "type":"level",
            "base":"0xA000",
            "maximum":60
        },
        "level_A000-2048":{
            "type":"level",
            "base":"0xA000",
            "maximum":2048
        },
        "level_A001-8":{
            "type":"level",
            "base":"0xA001",
            "maximum":8
        },
        "level_C000-60":{
            "type":"level",
            "base":"0xC000",
            "maximum":60
        },
        "level_C000-2048":{
            "type":"level",
            "base":"0xC000",
            "maximum":2048
        },
        "level_C001-8":{
            "type":"level",
            "base":"0xC001",
            "maximum":8
        },
        "raw_1":{
            "type":"raw",
            "minSize":1,
            "maxSize":1
        },
        "raw_2":{
            "type":"raw",
            "minSize":2,
            "maxSize":2
        },
        "raw_3":{
            "type":"raw",
            "minSize":3,
            "maxSize":3
        },
        "raw_4":{
            "type":"raw",
            "minSize":4,
            "maxSize":4
        },
        "raw_6":{
            "type":"raw",
            "minSize":6,
            "maxSize":6
        },
        "raw_8":{
            "type":"raw",
            "minSize":8,
            "maxSize":8
        },
        "raw_10":{
            "type":"raw",
            "minSize":10,
            "maxSize":10
        },
        "raw_11":{
            "type":"raw",
            "minSize":11,
            "maxSize":11
        },
        "raw_12":{
            "type":"raw",
            "minSize":12,
            "maxSize":12
        },
        "raw_14":{
            "type":"raw",
            "minSize":14,
            "maxSize":14
        },
        "raw_16":{
            "type":"raw",
            "minSize":16,
            "maxSize":16
        },
        "raw_17":{
            "type":"raw",
            "minSize":17,
            "maxSize":17
        },
        "raw_24":{
            "type":"raw",
            "minSize":24,
            "maxSize":24
        },
        "raw_27":{
            "type":"raw",
            "minSize":27,
            "maxSize":27
        },
        "raw_40":{
            "type":"raw",
            "minSize":40,
            "maxSize":40
        },
        "raw_109":{
            "type":"raw",
            "minSize":109,
            "maxSize":109
        },
        "raw_194":{
            "type":"raw",
            "minSize":194,
            "maxSize":194
        },
        "raw_1-12":{
            "type":"raw",
            "minSize":1,
            "maxSize":12
        },
        "raw_1-17":{
            "type":"raw",
            "minSize":1,
            "maxSize":17
        },
        "raw_1-31":{
            "type":"raw",
            "minSize":1,
            "maxSize":31
        },
        "raw_1-40":{
            "type":"raw",
            "minSize":1,
            "maxSize":40
        },
        "raw_1-101":{
            "type":"raw",
            "minSize":1,
            "maxSize":101
        },
        "raw_1-165":{
            "type":"raw",
            "minSize":1,
            "maxSize":165
        },
        "raw_1-231":{
            "type":"raw",
            "minSize":1,
            "maxSize":231
        },
        "raw_1-247":{
            "type":"raw",
            "minSize":1,
            "maxSize":247
        },
        "raw_1-253":{
            "type":"raw",
            "minSize":1,
            "maxSize":253
        },
        "object_PDB_01":{
            "type":"object",
            "properties":[
                {
                    "name":"energy",
                    "element":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xC2"] },
                            {
                                "type":"state",
                                "size":2,
                                "enum":[
                                    {"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}}
                                ]
                            }
                        ]
                    }
                },
                {
                    "name":"currentRphase",
                    "element":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                            {
                                "type":"state",
                                "size":2,
                                "enum":[
                                    {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                ]
                            }
                        ]
                    }
                },
                {
                    "name":"currentTphase",
                    "element":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                            {
                                "type":"state",
                                "size":2,
                                "enum":[
                                    {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "devices":{
"0x0EF0":{
    "validRelease":{"from":"A","to":"latest"},
    "className":{"ja":"ノードプロファイル", "en":"Node profile"},
    "elProperties":{
        "0x80":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"動作状態", "en":"Operating status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0x82":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Version情報", "en":"Version information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" },
            "note":{
                "ja":"1バイト目：メジャーバージョン。2バイト目：マイナーバージョン。3バイト目：電文形式をbitmapで示す。４バイト目：0x00",
                "en":"1st byte: major version, 2nd byte: minor version, 3rd data: bitmap of data format, 4th byte: 0x00"
            }
        },
        "0x83":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
        },
        "0x88":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"異常発生状態", "en":"Fault status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"異常あり", "en":"Fault"}},
                    {"edt":"0x42", "state":{"ja":"異常なし", "en":"No Fault"}}
                ]
            }
        },
        "0x89":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x8A":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"メーカコード", "en":"Manufacture code"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" },
            "note":{
                "ja":"0xFFFFFF:実験用, 0x000077:神奈川工科大学",
                "en":"0xFFFFFF:For experimental, 0x000077:KAIT"
            }
        },
        "0x8B":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"事業場コード", "en":"Business facility code"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0x8C":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"商品コード", "en":"Product code"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        },
        "0x8D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造番号", "en":"Production number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        },
        "0x8E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造年月日", "en":"Production date"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            }
        },
        "0x9D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"状変アナウンスプロパティマップ", "en":"Status change announcement property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        },
        "0x9E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        },
        "0x9F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"個体識別情報", "en":"Unique identifier data"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自ノードインスタンス数", "en":"Number of self-node instances"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" },
            "note":{
                "ja":"3 byteで数値を表す。ノードプロファイルオブジェクトのインスタンスは含まない",
                "en":"3 byte data for integer. excluding node profile object instance"
            }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自ノードクラス数", "en":"Number of self-node classes"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-253_u16" },
            "note":{
                "ja":"ノードプロファイルクラスを含む",
                "en":"including node profile class"
            }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"インスタンスリスト通知", "en":"Instance list notification"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"numberOfinstances",
                        "element":{ "$ref":"#/definitions/number_0-84" }
                    },
                    {
                        "name":"instanceList",
                        "element":{
                            "type":"array",
                            "itemSize":3,
                            "maxItems":84,
                            "items":{ "$ref":"#/definitions/raw_3" }
                        }
                    }
                ]
            },
            "note":{
                "ja":"インスタンスリストは機器オブジェクトの３バイトのEOJを列挙する",
                "en":"Instance list is an array of EOJ(3 bytes)"
            }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自ノードインスタンスリストS", "en":"Self-node instance list S"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"numberOfInstances",
                        "element":{ "$ref":"#/definitions/number_0-84" }
                    },
                    {
                        "name":"instanceList",
                        "element":{
                            "type":"array",
                            "itemSize":3,
                            "maxItems":84,
                            "items":{ "$ref":"#/definitions/raw_3" }
                        }
                    }
                ]
            },
            "note":{
                "ja":"インスタンスリストは３バイトのEOJを列挙する",
                "en":"Instance list is an array of EOJ(3 bytes)"
            }
        },
        "0xD7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自ノードクラスリストS", "en":"Self-node class list S"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"numberOfClasses",
                        "element":{ "$ref":"#/definitions/number_1-8" }
                    },
                    {
                        "name":"classList",
                        "element":{
                            "type":"array",
                            "itemSize":2,
                            "maxItems":8,
                            "items":{ "$ref":"#/definitions/raw_2" }
                        }
                    }
                ]
            },
            "note":{
                "ja":"ノードプロファイルクラスは除く",
                "en":"Excluding node profile class"
            }
        }
    }
},
"0x0000":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"スーパークラス", "en":"Super class"},
    "elProperties":{
        "0x80":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"動作状態", "en":"Operation status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0x81":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"設置場所", "en":"Installation location"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" },
                    "note":{
                        "ja":"bitmap(例 0x00:未設定(初期値), 0x08:リビング)",
                        "en":"bitmap(eg. 0x00:undefined(initial data), 0x08:living)"
                    }
                },
                {
                    "validRelease":{"from":"C", "to":"latest"},
                    "propertyName":{"ja":"設置場所", "en":"Installation location"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/raw_1" },
                            { "$ref":"#/definitions/raw_17" }
                        ]
                    },
                    "note":{
                        "ja":"1byte bitmap(例 0x00:未設定(初期値), 0x08:リビング)または0x01で始まる17 byte data",
                        "en":"1byte bitmap(eg. 0x00:undefined(initial data), 0x08:living) or 17 bytes data starting from 0x01"
                    }
                }
            ]
        },
        "0x82":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"規格Version情報", "en":"Standard version information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" },
            "note":{
                "ja":"1,2,4バイト目は0x00。3バイト目は機器オブジェクトのリリースバージョンをASCIIで表す。リリース Aのみ小文字で0x61, B以降は大文字で0x42, 0x43...", 
                "en":"1st, 2nd and 4th data is 0x00. 3rd data is the release version of Device Object in ASCII. Only release A utilize lower case letter 0x61, Release B and later utilize upper case letter such as 0x42, 0x43..."
            }
        },
        "0x83":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"識別番号", "en":"Identification number"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_17" },
                    "note":{
                        "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                        "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
                    }
                },
                {
                    "validRelease":{"from":"B", "to":"latest"},
                    "propertyName":{"ja":"識別番号", "en":"Identification number"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_17" },
                    "note":{
                        "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                        "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
                    }
                }
            ]
        },
        "0x84":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時消費電力計測値", "en":"Measured instantaneous power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0x85":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算消費電力計測値", "en":"Measured cumulative power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0x86":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"メーカ異常コード", "en":"Manufacturer’s fault code"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"raw",
                "minSize":1,
                "maxSize":225
            }
        },
        "0x87":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電流制限設定", "en":"Current limit setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0x88":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"異常発生状態", "en":"Fault status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"異常あり", "en":"Fault"}},
                    {"edt":"0x42", "state":{"ja":"異常なし", "en":"No Fault"}}
                ]
            }
        },
        "0x89":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x8A":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"メーカコード", "en":"Manufacture code"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0x8B":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"事業場コード", "en":"Business facility code"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0x8C":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"商品コード", "en":"Product code"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        },
        "0x8D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造番号", "en":"Production number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        },
        "0x8E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造年月日", "en":"Production date"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            }
        },
        "0x8F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"節電動作設定", "en":"Power-saving operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"節電動作中", "en":"Power Saving"}},
                    {"edt":"0x42", "state":{"ja":"通常動作中", "en":"No Power Saving"}}
                ]
            }
        },
        "0x93":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"位置情報", "en":"Location information"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_16" }
                },
                {
                    "validRelease":{"from":"B", "to":"B"},
                    "propertyName":{"ja":"位置情報", "en":"Location information"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_16" }
                },
                {
                    "validRelease":{"from":"C", "to":"G"},
                    "propertyName":{"ja":"遠隔操作設定", "en":"Remote controll setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"公衆回線未経由操作", "en":"Not through a public network"}},
                            {"edt":"0x42", "state":{"ja":"公衆回線経由操作", "en":"Through a public network"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"遠隔操作設定", "en":"Remote controll setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"公衆回線未経由操作", "en":"Not through a public network"}},
                            {"edt":"0x42", "state":{"ja":"公衆回線経由操作", "en":"Through a public network"}},
                            {"edt":"0x61", "state":{"ja":"通信回線正常（公衆回線経由の操作不可）",
                             "en":"Communication line is normal (operation through a public network is not possible)"}},
                            {"edt":"0x62", "state":{"ja":"通信回線正常（公衆回線経由の操作可能）",
                             "en":"Communication line is normal (operation through a public network is possible)"}}
                        ]
                    }
                }
            ]
        },
        "0x97":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"現在時刻設定", "en":"Current time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x98":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"現在年月日設定", "en":"Current date setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            }
        },
        "0x99":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電力制限設定", "en":"Power limit setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65535", "unit":"W" }
        },
        "0x9A":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算運転時間", "en":"Cumulative operating time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"unit",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x41", "state":{"ja":"秒", "en":"second"}},
                                {"edt":"0x42", "state":{"ja":"分", "en":"minute"}},
                                {"edt":"0x43", "state":{"ja":"時", "en":"hour"}},
                                {"edt":"0x44", "state":{"ja":"日", "en":"day"}}
                            ]
                        }
                    },
                    {
                        "name":"time",
                        "element":{ "$ref":"#/definitions/number_0-4294967295" }
                    }
                ]
            }
        },
        "0x9D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"状変アナウンスプロパティマップ", "en":"Status change announcement property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        },
        "0x9E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        },
        "0x9F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumerate. Else, bitmap."
            }
        }
    }
},
"0x0001":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ガス漏れセンサ", "en":"Gas leak sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ガス漏れ発生状態", "en":"Gas leak occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ガス漏れ発生状態リセット設定", "en":"Gas leak occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0002":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"防犯センサ", "en":"Crime prevention sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"侵入発生状態", "en":"Invasion occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"侵入発生状態リセット設定", "en":"Invasion occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0003":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"非常ボタン", "en":"Emergency button"},
    "elProperties":{
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"非常発生状態", "en":"Emergency occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"非常発生状態リセット設定", "en":"Emergency occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0004":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"救急用センサ", "en":"First-aid sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"救急発生状態", "en":"First-aid occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"救急発生状態リセット設定", "en":"First-aid occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0005":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"地震センサ", "en":"Earthquake sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"地震発生状態", "en":"Earthquake occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"地震発生状態リセット設定", "en":"Earthquake occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xC0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"SI 値", "en":"SI value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kine", "multipleOf":0.1 }
        },
        "0xC1":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"SI 値リセット設定", "en":"SI value resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xC2":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"倒壊発生状態", "en":"Collapse occurrence status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC3":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"倒壊発生状態リセット設定", "en":"Collapse occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0006":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"漏電センサ", "en":"Electric leak sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"漏電発生状態", "en":"Electric leak occurrence status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"漏電発生状態リセット設定", "en":"Electric leak occurrence status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0007":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"人体検知センサ", "en":"Human detection sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体検知状態", "en":"Human detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0008":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"来客センサ", "en":"Visitor sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"来客検知状態", "en":"Visitor detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"来客検知ホールド時間設定値", "en":"Visitor detection holding time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"second", "multipleOf":10 }
        }
    }
},
"0x0009":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"呼び出しセンサ", "en":"Call sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"呼び出し状態", "en":"Call status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"呼び出しホールド時間設定値", "en":"Call holding time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"second", "multipleOf":10 }
        }
    }
},
"0x000A":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"結露センサ", "en":"Condensation sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"結露検出状態", "en":"Condensation detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x000B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"空気汚染センサ", "en":"Air pollution"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気汚染検出状態", "en":"Air pollution detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x000C":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"酸素センサ", "en":"Oxygen sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"酸素濃度計測値", "en":"Measured value of oxygen concentration"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-10000", "unit":"%", "multipleOf":0.01 }
        }
    }
},
"0x000D":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"照度センサ", "en":"Illuminance sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"照度計測値1", "en":"Illuminance value1"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"Lux" },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"照度計測値2", "en":"Illuminance value2"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kLux" },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        }
    }
},
"0x000E":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"音センサ", "en":"Sound sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"音検出状態", "en":" Sound detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"音検知ホールド時間設定値", "en":"Sound detection holding time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"second", "multipleOf":10 }
        }
    }
},
"0x000F":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"投函センサ", "en":"Mailing sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"投函検出状態", "en":"Mailing detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0010":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"重荷センサ", "en":"Weight sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"重荷検出状態", "en":"Weight detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0011":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"温度センサ", "en":"Temperature sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度計測値", "en":"Temperature value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 }
        }
    }
},
"0x0012":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"湿度センサ", "en":"Humidity sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"湿度計測値", "en":"Humidity value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        }
    }
},
"0x0013":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"雨センサ", "en":"Rain sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"雨検出状態", "en":"Rain detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0014":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"水位センサ", "en":"Water level sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水位超過検知閾値設定", "en":"Water level over detection threshold level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"cm" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水位超過検知状態", "en":"Water level over detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水位計測値", "en":"Measured value of Water level"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"cm" }
        }
    }
},
"0x0015":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"風呂水位センサ", "en":"Bath water level sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂水位超過検知閾値設定", "en":"Bath water level over detection threshold level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"cm" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂水位超過検知状態", "en":"Bath water level over detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂水位計測値", "en":"Measured value of bath water level"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"cm" }
        }
    }
},
"0x0016":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"風呂沸き上がりセンサ", "en":"Bath heating status sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂沸き上がり検知状態", "en":"Bath heating detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0017":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"水漏れセンサ", "en":"Water leak sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水漏れ検知状態", "en":"Water leak detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0018":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"水あふれセンサ", "en":"Water overflow sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水あふれ検知状態", "en":"Water overflow detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0019":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"火災センサ", "en":"Fire sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"火災発生検知状態", "en":"Fire occurrence detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"火災発生検知状態リセット設定", "en":"Fire occurrence detection status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x001A":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"タバコ煙センサ", "en":"Cigarette smoke sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"煙（タバコ）検知状態", "en":"Smoke(cigarette) detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x001B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"CO2センサ", "en":"CO2 sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"CO2濃度計測値", "en":"Measured value of CO2 concentration"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ppm" }
        }
    }
},
"0x001C":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ガスセンサ", "en":"Gas sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ガス検知状態", "en":"Gas detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ガス濃度計測値", "en":"Measured value of gas concentration"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ppm" }
        }
    }
},
"0x001D":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"VOCセンサ", "en":"VOC sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"VOC検知状態", "en":"VOC detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"VOC濃度計測値", "en":"Measured value of VOC concentration"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ppm" }
        }
    }
},
"0x001E":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"差圧センサ", "en":"Differential pressure sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"差圧計測値", "en":"Measured value of Differential pressure"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"Pa" }
        }
    }
},
"0x001F":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"風速センサ", "en":"Air speed sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風速計測値", "en":"Measured value of air speed"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"m/sec", "multipleOf":0.01 }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風向", "en":"Measured value of Air flow direction"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-360degree_u16" }
        }
    }
},
"0x0020":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"臭いセンサ", "en":"Odor sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"臭い検知状態", "en":"Odor detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"臭い計測値", "en":"Measured Odor value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253" }
        }
    }
},
"0x0021":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"炎センサ", "en":"Flame sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炎検知状態", "en":"Flame detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炎検知状態リセット設定", "en":"Flame detection status resetting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        }
    }
},
"0x0022":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電力量センサ", "en":"Electric energy sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値", "en":"Cumulative amounts of electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 },
            "note":{"ja":"オーバーフロー時は0にリセット", "en":"The value is reset to 0 after overflow"}
        },
        "0xE1":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"中容量センサ瞬時電力値計測値", "en":"Medium-capacity sensor instantaneous electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-999999999-999999999", "unit":"W" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"小容量センサ瞬時電力値計測値", "en":"Small-capacity sensor instantaneous electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"W", "multipleOf":0.1 }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"大容量センサ瞬時電力値計測値", "en":"Large-capacity sensor instantaneous electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"kW", "multipleOf":0.1 }
        },
        "0xE4":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"K"},
                    "propertyName":{"ja":"積算電力量計測履歴情報", "en":"Cumulative amounts of electric energy measurement log"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"array",
                        "itemSize":4,
                        "minItems":48,
                        "maxItems":48,
                        "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
                    }
                },
                {
                    "validRelease":{"from":"L", "to":"latest"},
                    "propertyName":{"ja":"積算電力量計測履歴情報", "en":"Cumulative amounts of electric energy measurement log"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"array",
                        "itemSize":4,
                        "minItems":48,
                        "maxItems":48,
                        "items":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}}]
                                }                                
                            ]
                        }
                    }
                }
            ]
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"実効電圧値計測値", "en":"Effective voltage value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"V" }
        }
    }
},
"0x0023":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電流量センサ", "en":"Current value sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電流値計測値１", "en":"Measured current value 1"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-4294967293", "unit":"mA" },
            "note":{"ja":"0xE0または0xE2のいずれかが必須", "en":"either 0xE0 or 0xE2 is required"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測対象定格電圧値", "en":"Rated voltage to be measured"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"V" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電流値計測値２", "en":"Measured current value 2"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2147483647-2147483646", "unit":"mA" },
            "note":{"ja":"0xE0または0xE2のいずれかが必須", "en":"either 0xE0 or 0xE2 is required"}
        }
    }
},
"0x0025":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"水流量センサ", "en":"Water flow rate"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算流量計測値", "en":"Cumulative flow rate"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"cm3" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"流量計測値", "en":"Flow rate"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"cm3/min" }
        }
    }
},
"0x0026":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"微動センサ: ", "en":"Micromotion sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"微動検知状態", "en":" Micromotion detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"微動検知カウント数設定", "en":"Detection counter"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65534" }
        },
        "0xBC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"サンプリング回数設定", "en":"Sampling count"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65534" }
        },
        "0xBD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"サンプリング時間設定値", "en":"Sampling cycle"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65534", "unit":"msec" }
        }
    }
},
"0x0027":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"通過センサ", "en":"Passage sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xBE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"通過検知ホールド時間設定値", "en":" Passage detection hold time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ms" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"通過検知方向状態", "en":"Passage detection direction"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"通過無し", "en":"No passage"}},
                    {"edt":"0x31", "state":{"ja":"N", "en":"N"}},
                    {"edt":"0x32", "state":{"ja":"NE", "en":"NE"}},
                    {"edt":"0x33", "state":{"ja":"E", "en":"E"}},
                    {"edt":"0x34", "state":{"ja":"SE", "en":"SE"}},
                    {"edt":"0x35", "state":{"ja":"S", "en":"S"}},
                    {"edt":"0x36", "state":{"ja":"SW", "en":"SW"}},
                    {"edt":"0x37", "state":{"ja":"W", "en":"W"}},
                    {"edt":"0x38", "state":{"ja":"NW", "en":"NW"}},
                    {"edt":"0x39", "state":{"ja":"通過方向特定不可", "en":"Direction unknown"}}
                ]
            }
        }
    }
},
"0x0028":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"在床センサ", "en":"Bed presence sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"在床検知状態", "en":" Bed presence detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0029":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"開閉センサ", "en":"Open/close sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"開度検知状態２", "en":"Degree-of opening detection status 2"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" },
            "note":{"ja":"0xB1または0xE0のいずれかが必須", "en":"either 0xB1 or 0xE0 is required"}
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"開度検知状態１", "en":"Degree-of opening detection status 1"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x30", "state":{"ja":"閉検知有り", "en":"Close detected"}},
                            {"edt":"0x39", "state":{"ja":"開度不明", "en":"Opening level unknown"}}
                        ]
                    }
                ]
            },
            "note":{"ja":"0xB1または0xE0のいずれかが必須", "en":"either 0xB1 or 0xE0 is required"}
        }
    }
},
"0x002A":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"活動量センサ", "en":"Activity amount sensor"},
    "elProperties":{
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体ＩＤ数最大値", "en":"Maximum number of human body ID’s"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-128_u16" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"活動量レベル２", "en":"Activity amount level 2"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"存在人体情報", "en":" Human body existence information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_16" }
        }
    }
},
"0x002B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"人体位置センサ", "en":"Human body detection location 1"},
    "elProperties":{
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体ＩＤ数最大値", "en":"Maximum number of human body ID’s"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-128_u16" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体検知位置２", "en":"Human body detection location 2"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"X",
                        "element": {
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-254" },
                                { "$ref":"#/definitions/state_Undefined-FF" }
                            ]
                        }
                    },
                    {
                        "name":"Y",
                        "element": {
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-254" },
                                { "$ref":"#/definitions/state_Undefined-FF" }
                            ]
                        }
                    },
                    {
                        "name":"Z",
                        "element": {
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-254" },
                                { "$ref":"#/definitions/state_Undefined-FF" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"存在人体情報", "en":" Human body existence information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_16" }
        }
    }
},
"0x002C":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"雪センサ", "en":"Snow sensor"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検知閾値レベル設定", "en":"Detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"雪検知状態", "en":"Snow detection status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x002D":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"気圧センサ", "en":"Air Pressure sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"気圧計測値", "en":"Air pressure measurement"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"hPa", "multipleOf":0.1 }
        }
    }
},
"0x0130":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"家庭用エアコン", "en":"Home air conditioner"},
    "elProperties":{
        "0x8F":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"節電動作設定", "en":"Power-saving operation setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time-based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time-based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time-based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time-based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xA0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/level_31-8" },
                            { "$ref":"#/definitions/state_AUTO-41" }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/level_31-8" },
                            { "$ref":"#/definitions/state_AUTO-41" }                        ]
                    }
                }
            ]
        },
        "0xA1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風向自動設定", "en":"Autimatic control of air flow direction setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"Auto", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"非Auto", "en":"Non Auto"}},
                    {"edt":"0x43", "state":{"ja":"上下Auto", "en":"Auto(vertical)"}},
                    {"edt":"0x44", "state":{"ja":"左右Auto", "en":"Auto(horizontal)"}}
                ]
            }
        },
        "0xA3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風向スイング設定", "en":"Automatic swing of air flow setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x31", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x41", "state":{"ja":"上下", "en":"Vertical"}},
                    {"edt":"0x42", "state":{"ja":"左右", "en":"Holizontal"}},
                    {"edt":"0x43", "state":{"ja":"上下左右", "en":"Vertical and Holizontal"}}
                ]
            }
        },
        "0xA4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風向上下設定", "en":"Air flow direction(vertical) setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"上", "en":"Uppermost"}},
                    {"edt":"0x42", "state":{"ja":"下", "en":"Lowermost"}},
                    {"edt":"0x43", "state":{"ja":"中央", "en":"Central"}},
                    {"edt":"0x44", "state":{"ja":"上中", "en":"Midpoint between uppermost and central"}},
                    {"edt":"0x45", "state":{"ja":"下中", "en":"Midpoint between lowermost and central"}}
                ]
            }
        },
        "0xA5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風向左右設定", "en":"Air flow direction(horizontal) setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"右", "en":"Rightward"}},
                    {"edt":"0x42", "state":{"ja":"左", "en":"Leftward"}},
                    {"edt":"0x43", "state":{"ja":"中央", "en":"Central"}},
                    {"edt":"0x44", "state":{"ja":"左右", "en":"Rightward and leftward"}}
                ]
            }
        },
        "0xAA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特殊状態", "en":"Special state"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"通常状態", "en":"Normal operation"}},
                    {"edt":"0x41", "state":{"ja":"除霜状態", "en":"Defrosting"}},
                    {"edt":"0x42", "state":{"ja":"予熱状態", "en":"Preheating"}},
                    {"edt":"0x43", "state":{"ja":"排熱状態", "en":"Heat removal"}}
                ]
            }
        },
        "0xAB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"非優先状態", "en":"Non-priority state"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"通常状態", "en":"Normal"}},
                    {"edt":"0x41", "state":{"ja":"非優先状態", "en":"Non-priority"}}
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Air circulation"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度自動設定", "en":"Automatic temperature control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"急速動作モード設定", "en":"Normal/highspeed/silent operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"通常運転", "en":"Normal"}},
                    {"edt":"0x42", "state":{"ja":"急速", "en":"High speed"}},
                    {"edt":"0x43", "state":{"ja":"静音", "en":"Silent"}}
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Set temperature value"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"除湿モード時相対湿度設定値", "en":"Set value of relative humidity in dehumidifying mode"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xB5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷房モード時温度設定値", "en":"Set temperature value in cooling mode"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"暖房モード時温度設定値", "en":"Set temperature value in heating mode"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"除湿モード時温度設定値", "en":"Set temperature value in dehumidifying mode"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"定格消費電力値", "en":"Rated power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"cooling",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-65533", "unit":"W" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[{"edt":"0xFFFE", "state":{"ja":"未サポート", "en":"Not implemented"}}]
                                }
                            ]
                        }
                    },
                    {
                        "name":"heating",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-65533", "unit":"W" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[{"edt":"0xFFFE", "state":{"ja":"未サポート", "en":"Not implemented"}}]
                                }
                            ]
                        }
                    },
                    {
                        "name":"dehumidifying",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-65533", "unit":"W" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[{"edt":"0xFFFE", "state":{"ja":"未サポート", "en":"Not implemented"}}]
                                }
                            ]
                        }
                    },
                    {
                        "name":"blast",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-65533", "unit":"W" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[{"edt":"0xFFFE", "state":{"ja":"未サポート", "en":"Not implemented"}}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"消費電流計測値", "en":"Measured value of current consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        },
        "0xBA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度計測値", "en":"Measured value of room relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100%" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFD", "state":{"ja":"計測不能","en":"Not Applicable"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xBB":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"室内温度計測値", "en":"Measured value of room temperature"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-127-125Celsius" },
                            { "$ref":"#/definitions/state_Undefined-7E" }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"室内温度計測値", "en":"Measured value of room temperature"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-127-125Celsius" },
                            { "$ref":"#/definitions/state_Undefined-7E" }
                        ]
                    }
                }
            ]
        },
        "0xBC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ユーザリモコン温度設定値", "en":"Set temperature value of user remote control"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        },
        "0xBD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"吹き出し温度計測値", "en":"Measured cooled air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"外気温度計測値", "en":"Measured outdoor air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"相対温度設定値", "en":"Relative temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius", "multipleOf":0.1 },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気モード設定", "en":"Ventilation function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"換気ON（排気方向）", "en":"Ventilation function ON(outlet direction)"}},
                    {"edt":"0x42", "state":{"ja":"換気OFF", "en":"Ventilation function OFF"}},
                    {"edt":"0x43", "state":{"ja":"換気ON（吸気方向）", "en":"Ventilation function ON(intake direction)"}},
                    {"edt":"0x44", "state":{"ja":"換気ON（吸排気方向）", "en":"Ventilation function ON(outlet and intake direction)"}}
                ]
            }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加湿モード設定", "en":"Humidifier function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Ventilation air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xC4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加湿量設定", "en":"Degree of humidification setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xC6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"搭載空気清浄方法", "en":"Mounted air cleaning method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"electronic",
                        "descriptions":{"ja":"電気集塵方式搭載情報", "en":"Electronic dust collection"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon",
                        "descriptions":{"ja":"クラスタイオン方式搭載情報", "en":"Electronic dust collection"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気清浄機能モード設定", "en":"Air purifier function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":8,
                "bitmaps":[
                    {
                        "name":"electronic_level",
                        "descriptions":{"ja":"電気集塵方式：制御レベル", "en":"Electronic dust collection:Level"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                        }
                    },
                    {
                        "name":"electronic_mode",
                        "descriptions":{"ja":"電気集塵方式：動作モード", "en":"Electronic dust collection:Mode"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"electronic_Auto",
                        "descriptions":{"ja":"電気集塵方式：制御状態", "en":"Electronic dust collection:Auto function"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_level",
                        "descriptions":{"ja":"クラスタイオン方式：制御レベル", "en":"Cluster ion:Level"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_mode",
                        "descriptions":{"ja":"クラスタイオン方式：動作モード", "en":"Cluster ion:Mode"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_Auto",
                        "descriptions":{"ja":"クラスタイオン方式：制御状態", "en":"Cluster ion:Auto function"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"搭載リフレッシュ方法", "en":"Mounted air refresh method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"minusIon",
                        "descriptions":{"ja":"マイナスイオン方式搭載情報", "en":"Minus ion collection"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon",
                        "descriptions":{"ja":"クラスタイオン方式搭載情報", "en":"Cluster ion"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"リフレッシュ機能モード設定", "en":"Air refresher function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":8,
                "bitmaps":[
                    {
                        "name":"minusIon_level",
                        "descriptions":{"ja":"マイナスイオン方式：制御レベル", "en":"Electronic dust collection:Level"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                        }
                    },
                    {
                        "name":"minusIon_mode",
                        "descriptions":{"ja":"マイナスイオン方式：動作モード", "en":"Electronic dust collection:Mode"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"minusIon_Auto",
                        "descriptions":{"ja":"マイナスイオン方式：制御状態", "en":"Electronic dust collection:Auto function"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_level",
                        "descriptions":{"ja":"クラスタイオン方式：制御レベル", "en":"Cluster ion:Level"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_mode",
                        "descriptions":{"ja":"クラスタイオン方式：動作モード", "en":"Cluster ion:Mode"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIon_Auto",
                        "descriptions":{"ja":"クラスタイオン方式：制御状態", "en":"Cluster ion:Auto function"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xCA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"搭載自己洗浄方法", "en":"Mounted self-cleaning method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"ozone",
                        "descriptions":{"ja":"オゾン洗浄方式搭載情報", "en":"Information about ozone cleaning method mounting"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    },
                    {
                        "name":"drying",
                        "descriptions":{"ja":"乾燥方式搭載情報", "en":"Information about drying method mounting"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xCB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自己洗浄機能モード設定", "en":"Self-cleaning function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":8,
                "bitmaps":[
                    {
                        "name":"ozone_level",
                        "descriptions":{"ja":"オゾン洗浄方式：制御レベル", "en":"Ozone cleaning:Level"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                        }
                    },
                    {
                        "name":"ozone_mode",
                        "descriptions":{"ja":"オゾン洗浄方式：動作モード", "en":"Ozone cleaning:Mode"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"ozone_Auto",
                        "descriptions":{"ja":"オゾン洗浄方式：制御状態", "en":"Ozone cleaning:Auto function"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    },
                    {
                        "name":"drying_level",
                        "descriptions":{"ja":"乾燥方式：制御レベル", "en":"Drying:Level"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0000111"
                        },
                        "value":{
                            "type":"numericValue",
                            "size":0,
                            "enum":[
                                {"edt":"0x00", "numericValue":0 },
                                {"edt":"0x01", "numericValue":1 },
                                {"edt":"0x02", "numericValue":2 },
                                {"edt":"0x03", "numericValue":3 },
                                {"edt":"0x04", "numericValue":4 },
                                {"edt":"0x05", "numericValue":5 },
                                {"edt":"0x06", "numericValue":6 },
                                {"edt":"0x07", "numericValue":7 }
                            ]
                         }
                    },
                    {
                        "name":"drying_mode",
                        "descriptions":{"ja":"乾燥方式：動作モード", "en":"Drying:Mode"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0001000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    },
                    {
                        "name":"drying_Auto",
                        "descriptions":{"ja":"乾燥方式：制御状態", "en":"Drying:Auto function"},
                        "position":{
                            "index":1,
                            "bitMask":"0b0010000"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"Manual", "en":"Manual"}},
                                {"edt":1, "state":{"ja":"Auto", "en":"Automatic"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特別運転モード設定", "en":"Special function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"設定なし", "en":"No setting"}},
                    {"edt":"0x41", "state":{"ja":"衣類乾燥", "en":"Clothes dryer function"}},
                    {"edt":"0x42", "state":{"ja":"結露抑制", "en":"Condensation suppressorfunction"}},
                    {"edt":"0x43", "state":{"ja":"ダニカビ抑制", "en":"Mite and mold control function"}},
                    {"edt":"0x44", "state":{"ja":"強制除霜", "en":"Active defrosting function"}}
                ]
            }
        },
        "0xCD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"内部動作状態", "en":"Operation status of components"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"compressor",
                        "descriptions":{"ja":"コンプレッサ動作状態", "en":"Operation status of the compressor"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"停止中", "en":"Not operating"}},
                                {"edt":1, "state":{"ja":"動作中", "en":"In operation"}}
                            ]
                        }
                    },
                    {
                        "name":"thermostat",
                        "descriptions":{"ja":"サーモON/OFF状態", "en":"Operation status of the thermostat"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"OFF", "en":"OFF"}},
                                {"edt":1, "state":{"ja":"ON", "en":"ON"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xCE":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"強制サーモモード設定", "en":"Thermostat setting override function"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x40", "state":{"ja":"通常設定", "en":"Normal setting"}},
                            {"edt":"0x41", "state":{"ja":"強制サーモON", "en":"Thermostat setting override function ON"}},
                            {"edt":"0x42", "state":{"ja":"強制サーモOFF", "en":"Thermostat setting override function OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"強制サーモモード設定", "en":"Thermostat setting override function"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x40", "state":{"ja":"通常設定", "en":"Normal setting"}},
                            {"edt":"0x41", "state":{"ja":"強制サーモON", "en":"Thermostat setting override function ON"}},
                            {"edt":"0x42", "state":{"ja":"強制サーモOFF", "en":"Thermostat setting override function OFF"}}
                        ]
                    }
                }
            ]
        },
        "0xCF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気清浄モード設定", "en":"Air purification mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xD0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"ブザー", "en":"Buzzer"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ブザー音発生", "en":"Buzzer sound generation"}}
                ]
            }
        }
    }
},
"0x0133":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"換気扇", "en":"Ventilation fan"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気自動設定", "en":"Ventilation Auto setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        }
    }
},
"0x0134":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"空調換気扇", "en":"Air conditioner ventilation fan"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Set value of ventilation air flow rate"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"換気モード自動設定", "en":"Ventilation mode automatic mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_AUTO-NONAUTO-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"換気方式設定", "en":"Ventilation method setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"送風換気", "en":"Blowing ventilation "}},
                    {"edt":"0x42", "state":{"ja":"空調換気", "en":"Air conditioning ventilation"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"換気モード設定", "en":"Ventilation mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"普通換気", "en":"normal"}},
                    {"edt":"0x42", "state":{"ja":"熱交換換気", "en":"heat-exchange"}},
                    {"edt":"0x43", "state":{"ja":"冷房換気", "en":"cooling"}},
                    {"edt":"0x44", "state":{"ja":"暖房換気", "en":"heating"}},
                    {"edt":"0x45", "state":{"ja":"除湿換気", "en":"dehumidifying"}},
                    {"edt":"0x46", "state":{"ja":"加湿換気", "en":"humidifying"}},
                    {"edt":"0x40", "state":{"ja":"その他換気", "en":"other"}}
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"冷暖強弱設定", "en":"Cooling / heating high-low setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度設定値", "en":"Set value of room relative humidity"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xB9":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"消費電流計測値", "en":"Measured value of electric current consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        },
        "0xBA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度計測値", "en":"Measured value of room relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xBE":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"外気温度計測値", "en":"Measured value of outdoor air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気自動設定", "en":"Ventilation auto setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_AUTO-NONAUTO-4142" }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"CO2濃度計測値", "en":"Measured value of CO2 concentration"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ppm" }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"煙（タバコ）検知状態", "en":"Smoke (cigarette) detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"汚れ検知状態", "en":"Pollution detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xCA":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"外気相対湿度計測値", "en":"Measured value of outdoor relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xD0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"還気温度計測値", "en":"Measured value of return air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":1,
                "minItems":10,
                "maxItems":10,
                "items":{
                    "oneOf":[
                        { "$ref":"#/definitions/number_-127-125Celsius" },
                        { "$ref":"#/definitions/state_Undefined-7E" }
                    ]                    
                }
            }
        },
        "0xD1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"還気相対湿度計測値", "en":"Measured value of return relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":1,
                "minItems":10,
                "maxItems":10,
                "items":{
                    "oneOf":[
                        { "$ref":"#/definitions/number_0-100%" },
                        { "$ref":"#/definitions/state_Undefined-FD" }
                    ]                    
                }
            }
        },
        "0xD2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"給気温度計測値", "en":"Measured value of charging air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xD3":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"給気相対湿度計測値", "en":"Measured value of charging relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xD4":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"排気温度計測値", "en":"Measured value of discharging air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xD5":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"排気相対湿度計測値", "en":"Measured value of discharging air relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"熱交換器動作設定", "en":"Heat exchanger operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        }
    }
},
"0x0135":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"空気清浄器", "en":"Air cleaner"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気汚れ検知状態", "en":"Air pollution detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"煙（たばこ）検知状態", "en":"Smoke detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"光触媒動作設定", "en":"Optical catalyst operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"フィルター交換通知状態", "en":"Filter change notice"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x0139":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"加湿器", "en":"Humidifier"},
    "elProperties":{
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"Reservation set of OFF timer"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"Relative time value set of OFF timer"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度計測値", "en":"Measured value of room relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加湿設定１", "en":"Humidifying setting 1"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100%" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x70", "state":{"ja":"自動設定", "en":"Automatic setting"}},
                            {"edt":"0x71", "state":{"ja":"連続運転", "en":"Continuous operation"}},
                            {"edt":"0x72", "state":{"ja":"間欠運転", "en":"Intermittent operation"}}
                        ]
                    }            
                ]
            },
            "note":{"ja":"0xC0または0xC1のいずれかが必須", "en":"Either 0xC0 or 0xC1 is required." }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加湿設定２", "en":"Humidifying setting 2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-3" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x70", "state":{"ja":"自動設定", "en":"Automatic setting"}},
                            {"edt":"0x71", "state":{"ja":"連続運転", "en":"Continuous operation"}},
                            {"edt":"0x72", "state":{"ja":"間欠運転", "en":"Intermittent operation"}}
                        ]
                    }            
                ]
            },
            "note":{"ja":"0xC0または0xC1のいずれかが必須", "en":"Either 0xC0 or 0xC1 is required." }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"イオン放出設定", "en":"Ion emission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xC3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"搭載イオン放出設定", "en":"Implemented ion emission method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"negativeIonMethod",
                        "descriptions":{"ja":"マイナスイオン方式", "en":"negative ion method"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    },
                    {
                        "name":"clusterIonMethod",
                        "descriptions":{"ja":"クラスタイオン方式", "en":"cluster ion method"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特別運転モード設定", "en":"Special operation mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"ozone",
                        "descriptions":{"ja":"のど乾燥抑制", "en":"Throat dry prevention"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    },
                    {
                        "name":"drying",
                        "descriptions":{"ja":"静音運転", "en":"Quiet operation"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"非搭載", "en":"No"}},
                                {"edt":1, "state":{"ja":"搭載", "en":"Yes"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水量レベル", "en":"Water amount level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_40-6" }
        }
    }
},
"0x0142":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気暖房器", "en":"Electric heater"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度自動設定", "en":"Automatic temperature control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Set temperature value"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xBB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured value of room temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xBC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ユーザリモコン温度設定値", "en":"Set temperature value of user remote control"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        }
    }
},
"0x0143":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ファンヒータ", "en":"Fan heater"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time-based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time-based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time-based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time-based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度自動設定", "en":"Automatic temperature control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Temperature set value"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        },
        "0xBB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度計測値", "en":"Measured temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"延長運転設定", "en":"Extensional operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"延長タイマ時間設定値", "en":"Extensional operation timer time setting value"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"イオン放出設定", "en":"Ion emission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xC3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"搭載イオン放出方法", "en":"Implemented ion emission method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"bitmap",
                "size":1,
                "bitmaps":[
                    {
                        "name":"negativeIonMethod",
                        "descriptions":{"ja":"搭載イオン放出方法", "en":"Implemented ion emission method"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"マイナスイオン方式", "en":"Negative ion methos"}},
                                {"edt":1, "state":{"ja":"クラスタイオン方式", "en":"Cluster ion method"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"油量レベル", "en":"Oil amount level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_40-6" }
        }
    }
},
"0x0155":{
    "validRelease":{"from":"E", "to":"latest"},
    "className":{"ja":"電気蓄熱暖房器", "en":"Electric storage heater"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ 
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x31", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x32", "state":{"ja":"弱", "en":"Low"}},
                    {"edt":"0x33", "state":{"ja":"強", "en":"High"}},
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                ]
             }
        },
        "0xA1":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファン動作状態", "en":"Fan operation status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ 
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x31", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x32", "state":{"ja":"弱", "en":"Low"}},
                    {"edt":"0x33", "state":{"ja":"強", "en":"High"}}
                ]
             }
        },
        "0xB3":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        },
        "0xB8":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"定格消費電力値", "en":"Rated power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"heatStorage",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    },
                    {
                        "name":"control",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    },
                    {
                        "name":"weakAirFlowing",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    },
                    {
                        "name":"strongAirFlowing",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    }
                ]
            }
        },
        "0xBB":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured indoor temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xBE":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"外気温度計測値", "en":"Measured outdoor temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xC0":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"蓄熱動作状態", "en":"Heat storage operation status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xC1":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"蓄熱温度設定値", "en":"Heat storage temperature setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-1000", "unit":"Celsius" }
        },
        "0xC2":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"蓄熱温度計測値", "en":"Measured stored heat temperature"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-200-1000",  "unit":"Celsius" }
        },
        "0xC3":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"昼間蓄熱設定", "en":"Daytime heat storage setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xC4":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"昼間蓄熱可否状態", "en":"Daytime heat storage ability"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-3031" }
        },
        "0xC5":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"深夜電力通電時間設定値", "en":"Midnight power duration setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-23" }
        },
        "0xC6":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"深夜電力開始時刻設定値", "en":"Midnight power start time setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-23" }
        },
        "0xC7":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"放熱方法", "en":"Radiation method"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"ファン有", "en":"YES"}},
                    {"edt":"0x31", "state":{"ja":"ファン無", "en":"NO"}}
                ]
            }
        },
        "0xC8":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"チャイルドロック設定", "en":"Child lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-3031" }
        },
        "0xD0":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ1 予約設定", "en":"Fan timer 1 setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xD1":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ1 開始時刻設定値", "en":"Fan timer 1 ON time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD2":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ1 終了時刻設定値", "en":"Fan timer 1 OFF time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD3":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ2 予約設定", "en":"Fan timer 2 setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xD4":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ2 開始時刻設定値", "en":"Fan timer 2 ON time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD5":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ファンタイマ2 終了時刻設定値", "en":"Fan timer 2 OFF time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        }
    }
},
"0x0156":{
    "validRelease":{"from":"I", "to":"latest"},
    "className":{"ja":"業務用パッケージエアコン室内機（設備用を除く）", "en":"Package-type commercial air conditioner (indoor unit) (except those for facilities)"},
    "elProperties":{
        "0xAC":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"サーモ状態", "en":"Thermostat state"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xAE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"自動運転時運転モード状態", "en":"Current function (automatic operation mode)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Air circulation"}}
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Air circulation"}}
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Temperature setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        },
        "0xBB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室内機温度計測値", "en":"Measured indoor unit temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xCA":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"グループ情報", "en":"Group information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xDB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室内機温度計測値", "en":"Power consumption range for indoor units"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"未定", "en":"Unknown"}},
                    {"edt":"0x01", "state":{"ja":"50W未満", "en":"Less than 50W"}},
                    {"edt":"0x02", "state":{"ja":"50W以上〜100W未満", "en":"50W-100W"}},
                    {"edt":"0x03", "state":{"ja":"100W以上〜150W未満", "en":"100W-150W"}},
                    {"edt":"0x04", "state":{"ja":"150W以上〜200W未満", "en":"150W-200W"}},
                    {"edt":"0x05", "state":{"ja":"200W以上", "en":"Equal to or more than 200W"}}
                ]
            }
        }
    }
},
"0x0157":{
    "validRelease":{"from":"I", "to":"latest"},
    "className":{"ja":"業務用パッケージエアコン室外機（設備用を除く）", "en":"Package-type commercial air conditioner (outdoor unit)"},
    "elProperties":{
        "0xAB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"特殊状態", "en":"Special state"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4140" }
        },
        "0xB8":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機定格消費電力値", "en":"Rated power consumption of outdoor unit"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"Cooling",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
                    },
                    {
                        "name":"Heating",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
                    }
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機温度計測値", "en":"Measured outdoor unit temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xCA":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"グループ情報", "en":"Group information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xDB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機消費電力計測値", "en":"Measured power consumption of outdoor unit"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
        },
        "0xDD":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機節電可能消費電力", "en":"Possible power savings for outdoor units"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
        },
        "0xDE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機消費電力制限設定", "en":"Settings restricting power consumption of outdoor units"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
        },
        "0xDF":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"室外機抑制最低消費電力", "en":"Minimum power consumption for restricted outdoor unit"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-4294967293", "unit":"W" }
        }
    }
},
"0x0158":{
    "validRelease":{"from":"K", "to":"latest"},
    "className":{"ja":"業務用ガスヒートポンプエアコン室内機", "en":"Gas heat pump-type commercial air conditioner (indoor unit)"},
    "elProperties":{
        "0xAC":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"サーモ状態", "en":"Thermo status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xAE":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"自動運転時運転モード状態", "en":"Operation mode status during auto operation"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Air circulation"}}
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Air circulation"}}
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"温度設定値", "en":"Temperature setting value"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/number_0-50Celsius" }
        },
        "0xBB":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"室内機温度計測値", "en":"Measured temperature value of indoor unit"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xCA":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"グループ情報", "en":"Group information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xDB":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"室内機消費電力範囲", "en":"Power consumption range for indoor units"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"未定", "en":"Unknown"}},
                    {"edt":"0x01", "state":{"ja":"50W未満", "en":"Less than 50W"}},
                    {"edt":"0x02", "state":{"ja":"50W以上〜100W未満", "en":"50W-100W"}},
                    {"edt":"0x03", "state":{"ja":"100W以上〜150W未満", "en":"100W-150W"}},
                    {"edt":"0x04", "state":{"ja":"150W以上〜200W未満", "en":"150W-200W"}},
                    {"edt":"0x05", "state":{"ja":"200W以上", "en":"Equal to or more than 200W"}}
                ]
            }
        }
    }
},
"0x0159":{
    "validRelease":{"from":"K", "to":"latest"},
    "className":{"ja":"業務用ガスヒートポンプエアコン室外機", "en":"Gas heat pump-type commercial air conditioner (outdoor unit)"},
    "elProperties":{
        "0xBE":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"室外機温度計測値", "en":"Measured temperature value of outdoor unit"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xC0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Measured cumulative gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "multipleOf":"0.001", "unit":"m3" }
        },
        "0xCA":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"グループ情報", "en":"Group information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"時間帯運転率設定", "en":"Time slot operation factor setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" }
        },
        "0xE1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"設定可能運転率  ", "en":"Allowable operation factor"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        }
    }
},
"0x015A":{
    "validRelease":{"from":"M", "to":"latest"},
    "className":{"ja":"レンジフード", "en":"Range hood"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Ventilation air flow rate setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xBF":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"レンジフード自動設定", "en":"Range hood automatic setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured value of indoor temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 }
        },
        "0xC1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"室外温度計測値", "en":"Measured value of outdoor temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 }
        },
        "0xC2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"給気温度計測値", "en":"Measured value of charging air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 }
        },
        "0xC3":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"調理温度計測値", "en":"Measured value of cooking temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 }
        },
        "0xC4":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度計測値", "en":"Measured value of indoor relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC5":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"室外相対湿度計測値", "en":"Measured value of outdoor relative humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC6":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"人体検知閾値レベル設定", "en":"Human detection threshold level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xC7":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"人体検知状態", "en":"Human detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC8":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"CO2 濃度計測値", "en":"Measured value of CO2 concentration"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"ppm" }
        },
        "0xC9":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ガス検知閾値レベル状態", "en":"Gas detection threshold level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xCA":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ガス検知状態", "en":"Gas detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xCB":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"エラー検知モード", "en":"Error detection mode"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"モーターエラー状態", "en":"Motor Error"}},
                    {"edt":"0x42", "state":{"ja":"整流板検知状態", "en":"Current Plate Detection"}},
                    {"edt":"0x43", "state":{"ja":"正常状態", "en":"Normal"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"照明動作設定", "en":"Lighting operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"点灯", "en":"Lighting"}},
                    {"edt":"0x42", "state":{"ja":"消灯", "en":"Lights-out"}},
                    {"edt":"0x43", "state":{"ja":"点滅", "en":"Flicker "}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"光源色設定", "en":"Light source color setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LightColor-40-44" }
        },
        "0xD2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"輝度レベル設定", "en":"Brightness level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xD6":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"点灯モード設定", "en":"Lighting mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"通常灯", "en":"Normal Lighting"}},
                    {"edt":"0x43", "state":{"ja":"カラー灯", "en":"Color Lighting"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"カラー灯モード時RGB 設定", "en":"When in colored lighting mode RGB setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"red",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"green",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"blue",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    }
                ]
            }
        }
    }
},
"0x0260":{
    "oneOf":[
        {
            "validRelease":{"from":"A", "to":"C"},
            "className":{"ja":"電動ブラインド", "en":"Electrically operated shade"},
            "elProperties":{
                "0xE0":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{ "ja":"開閉設定", "en":"Open/close setting" },
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
                },
                "0xE1":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                "0xE2":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"ブラインド角度設定値", "en":"Shade angle setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-180degree" }
                },
                "0xE3":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{ "ja":"ブラインド開閉速度設定", "en":"Blind open/close speed setting" },
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                }
            }
        },
        {
            "validRelease":{"from":"D", "to":"latest"},
            "className":{"ja":"電動ブラインド・日よけ", "en":"Electrically operated blind/shade"},
            "elProperties":{
                "0x89":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"異常内容", "en":"Fault description"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0x90":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"タイマ動作設定", "en":"Timer operation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                "0xC2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"風検知状態", "en":"Wind detection status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                "0xC3":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"日差し検知状態", "en":"Sunlight detection status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                "0xD0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開（張出し）速度設定", "en":"Opening(extention) speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xD1":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"閉（収納）速度設定", "en":"Closing(retraction) speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xD2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
                },
                "0xD4":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"自動動作設定", "en":"Automatic operation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                "0xE0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"開閉（張出し／収納）動作設定",
                        "en":"Open/close(extension/retraction) setting"
                    },
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
                },
                "0xE1":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                },
                "0xE2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ブラインド角度設定値", "en":"Shade angle setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-180degree" }
                },
                "0xE3":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"開閉（張出し／収納）速度設定",
                        "en":"Open/close(extension/retraction) speed setting"
                    },
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xE5":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
                },
                "0xE8":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                            {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                        ]
                    }
                },
                "0xE9":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"選択開（張出し）度動作設定", "en":"Selective opening(extention) operation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                            {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                            {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                            {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}}
                        ]
                    }
                },
                "0xEA":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉（張出し／収納）状態", "en":"Open/closed(extension/retraction) status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                            {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                            {"edt":"0x43", "state":{"ja":"開動作中", "en":"Open"}},
                            {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closed"}},
                            {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                        ]
                    }
                },
                "0xEE":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ワンタイム開（張出し）速度設定", "en":"One-time opening(extension) speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
                },
                "0xEF":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ワンタイム閉（収納）速度設定", "en":"One-time closing(retraction) speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
                }
            }
        }
    ]
},
"0x0261":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電動シャッター", "en":"Electrically operated shutter"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x90":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"タイマ動作設定", "en":"Timer operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
        },
        "0xE0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開閉設定１", "en":"Open/close setting 1"},
                    "accessRule":{"get":"required_c", "set":"required_c", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" },
                    "note":{"ja":"0xE0または0xE7のいずれかが必須", "en":"either 0xE0 or 0xE7 is required"}
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
                }
            ]
        },
        "0xE1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定１", "en":"Degree-of-opening level1"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                }
            ]
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ブラインド角度設定値", "en":"Blind angle setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-180degree" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"C"},
            "propertyName":{"ja":"開度レベル設定2", "en":"Degree-of-opening level2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-255" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"C"},
            "propertyName":{"ja":"開閉設定2", "en":"Open/Close setting2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" },
            "note":{"ja":"0xE0または0xE7のいずれかが必須", "en":"either 0xE0 or 0xE7 is required"}
        },
        "0xE8":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                    {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                ]
            }
        },
        "0xE9":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"選択開度動作設定", "en":"Selective degree-of-opening setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                    {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                    {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                    {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}},
                    {"edt":"0x45", "state":{"ja":"スリット開度設定", "en":"Slit degree-of-opning setting"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉状態", "en":"Open/closed status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                    {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                    {"edt":"0x43", "state":{"ja":"開動作中", "en":"Opening"}},
                    {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closing"}},
                    {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                ]
            }
        },
        "0xED":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"スリット開度設定", "en":"Slit degree-of-opening"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xEE":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム開速度設定", "en":"One-time opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        }
    }
},
"0x0263":{
    "oneOf":[
        {
            "validRelease":{"from":"A", "to":"C"},
            "className":{"ja":"電動雨戸・シャッター", "en":"Electrically operated rain sliding door/shutter"},
            "elProperties":{
                "0xE0":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開閉設定１", "en":"Open/close setting 1"},
                    "accessRule":{"get":"required_c", "set":"required_c", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" },
                    "note":{"ja":"0xE0または0xE7のいずれかが必須", "en":"either 0xE0 or 0xE7 is required"}
                },
                "0xE1":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                "0xE2":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"ブラインド角度設定値", "en":"Blind angle setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-180degree" }
                },
                "0xE3":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xE4":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定2", "en":"Degree-of-opening level2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-255" }
                },
                "0xE5":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
                },
                "0xE7":{
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開閉設定2", "en":"Open/Close setting2"},
                    "accessRule":{"get":"required_c", "set":"required_c", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" },
                    "note":{"ja":"0xE0または0xE7のいずれかが必須", "en":"either 0xE0 or 0xE7 is required"}
                }
            }
        },
        {
            "validRelease":{"from":"D", "to":"latest"},
            "className":{"ja":"電動雨戸・シャッター", "en":"Electrically operated rain sliding door/shutter"},
            "elProperties":{
                "0x89":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"異常内容", "en":"Fault description"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0x90":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"タイマ動作設定", "en":"Timer operation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                "0xD0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xD1":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xD2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
                },
                "0xE0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
                },
                "0xE1":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                },
                "0xE2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ブラインド角度設定値", "en":"Blind angle setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-180degree" }
                },
                "0xE3":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
                },
                "0xE4":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定2", "en":"Degree-of-opening level2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-255" }
                },
                "0xE5":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
                },
                "0xE8":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                            {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                        ]
                    }
                },
                "0xE9":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"選択開度動作設定", "en":"Selective degree-of-opening setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                            {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                            {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                            {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}},
                            {"edt":"0x45", "state":{"ja":"スリット開度設定", "en":"Slit degree-of-opning setting"}}
                        ]
                    }
                },
                "0xEA":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉状態", "en":"Open/closed status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                            {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                            {"edt":"0x43", "state":{"ja":"開動作中", "en":"Opening"}},
                            {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closing"}},
                            {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                        ]
                    }
                },
                "0xED":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"スリット開度設定", "en":"Slit degree-of-opening"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                "0xEE":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ワンタイム開速度設定", "en":"One-time opening speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
                },
                "0xEF":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
                }
            }
        }
    ]
},
"0x0264":{
    "validRelease":{"from":"D", "to":"latest"},
    "className":{"ja":"電動ゲート", "en":"Electrically operated gate"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
        },
        "0xE0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
        },
        "0xE1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xE5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE8":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                    {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                ]
            }
        },
        "0xE9":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"選択開度動作設定", "en":"Selective degree-of-opening setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                    {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                    {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                    {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉状態", "en":"Open/closed status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                    {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                    {"edt":"0x43", "state":{"ja":"開動作中", "en":"Opening"}},
                    {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closing"}},
                    {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム開速度設定", "en":"One-time opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        }
    }
},
"0x0265":{
    "validRelease":{"from":"D", "to":"latest"},
    "className":{"ja":"電動窓", "en":"Electrically operated window"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x90":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"タイマ動作設定", "en":"Timer operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xC0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"登録温度検知状態", "en":"Registered temperature detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"雨検知状態", "en":"Rain detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
        },
        "0xD4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"自動動作設定", "en":"Automatic operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
        },
        "0xE1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xE5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE8":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                    {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                ]
            }
        },
        "0xE9":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"選択開度動作設定", "en":"Selective degree-of-opening setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                    {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                    {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                    {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉状態", "en":"Open/closed status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                    {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                    {"edt":"0x43", "state":{"ja":"開動作中", "en":"Opening"}},
                    {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closing"}},
                    {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム開速度設定", "en":"One-time opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        }
    }
},
"0x0266":{
    "validRelease":{"from":"D", "to":"latest"},
    "className":{"ja":"電動玄関ドア・引戸", "en":"Automatically operated entrance door/sliding door"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"second" }
        },
        "0xD5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開放時間設定値", "en":"Opening time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "oneOf":[
                    {
                        "type":"object",
                        "properties":[
                            {
                                "name":"minutes",
                                "element":{ "$ref":"#/definitions/number_0-59" }
                            },
                            {
                                "name":"seconds",
                                "element":{ "$ref":"#/definitions/number_0-59" }
                            }
                        ]
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0xFFFF", "state":{"ja":"開放", "en":"Released"}}
                        ]
                    }
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-STOP-414243" }
        },
        "0xE1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉速度設定", "en":"Opening/closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-414243" }
        },
        "0xE8":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"遠隔操作設定状態", "en":"Remote operation setting status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON（許可）", "en":"ON(permitted)"}},
                    {"edt":"0x42", "state":{"ja":"OFF（禁止）", "en":"OFF(prohibited)"}}
                ]
            }
        },
        "0xE9":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"選択開度動作設定", "en":"Selective degree-of-opening setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                    {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                    {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                    {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開閉状態", "en":"Open/closed status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"全開", "en":"Fully open"}},
                    {"edt":"0x42", "state":{"ja":"全閉", "en":"Fully closed"}},
                    {"edt":"0x43", "state":{"ja":"開動作中", "en":"Opening"}},
                    {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closing"}},
                    {"edt":"0x45", "state":{"ja":"途中停止", "en":"Stopped halfway"}}
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム開速度設定", "en":"One-time opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOW-MID-HIGH-NONE-41424344" }
        }
    }
},
"0x0267":{
    "validRelease":{"from":"D", "to":"latest"},
    "className":{"ja":"散水器（庭用）", "en":"Garden sprinkler"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"散水弁開閉設定", "en":"Sprinkle valve open/close setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"自動 ON", "en":"automatic ON"}},
                    {"edt":"0x41", "state":{"ja":"手動 ON", "en":"manual ON"}},
                    {"edt":"0x42", "state":{"ja":"手動 OFF", "en":"manual OFF"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"水やり間隔設定", "en":"Sprinkle interval setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"切", "en":"OFF"}},
                    {"edt":"0x41", "state":{"ja":"毎日", "en":"daily"}},
                    {"edt":"0x42", "state":{"ja":"1日おき", "en":"every other day"}},
                    {"edt":"0x43", "state":{"ja":"2日おき", "en":"every 3 days"}},
                    {"edt":"0x44", "state":{"ja":"週１回", "en":"once a week"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"水やり回数設定", "en":"Number of sprinkles setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"１番目 ON", "en":"first ON"}},
                    {"edt":"0x42", "state":{"ja":"２番目 ON", "en":"second ON"}},
                    {"edt":"0x43", "state":{"ja":"両方 ON", "en":"both ON"}}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"水やり時刻設定１", "en":"Sprinkle time setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"水やり時刻設定２", "en":"Sprinkle time setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"水やり時間設定", "en":"Sprinkle duration setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-59", "unit":"minutes" }
        }
    }
},
"0x026B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気温水器", "en":"Electric water heater"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"H"},
                    "propertyName":{"ja":"沸き上げ自動設定", "en":"Automatic water heating setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動沸き上げ", "en":"Auto Heating"}},
                            {"edt":"0x43", "state":{"ja":"手動沸き上げ停止", "en":"Manual No Heating"}},
                            {"edt":"0x42", "state":{"ja":"手動沸き上げ", "en":"Manual Heating"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"I", "to":"latest"},
                    "propertyName":{"ja":"沸き上げ自動設定", "en":"Automatic water heating setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動沸き上げ", "en":"Auto Heating"}},
                            {"edt":"0x43", "state":{"ja":"手動沸き上げ停止", "en":"Manual No Heating"}},
                            {"edt":"0x42", "state":{"ja":"手動沸き上げ", "en":"Manual Heating"}}
                        ]
                    }
                }
            ]
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"沸き上げ湯温自動設定", "en":"Automatic water temperature control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB2":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"H"},
                    "propertyName":{"ja":"沸き上げ中状態", "en":"Water heater status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                {
                    "validRelease":{"from":"I", "to":"latest"},
                    "propertyName":{"ja":"沸き上げ中状態", "en":"Water heater status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                }
            ]
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"沸き上げ湯温設定値", "en":"Water heating temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"手動沸き上げ停止日数設定値", "en":"Manual water heating stop days setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-252", "unit":"day" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFD", "state":{"ja":"無限", "en":"No time limit"}}
                        ]
                    }
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"手動沸き上げOFFタイマ相対時間設定値", "en":"Relative time setting value for manual water heating OFF"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB6":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"タンク運転モード設定", "en":"Tank operation mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x42", "state":{"ja":"節約", "en":"Saving"}},
                    {"edt":"0x43", "state":{"ja":"多め", "en":"Extra"}}
                ]
            }
        },
        "0xC0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"昼間沸き増し許可設定", "en":"Daytime reheating permission setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"昼間沸き増し許可設定", "en":"Daytime reheating permission setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                }
            ]
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温水器湯温計測値", "en":"Measured temperature of water in water heater"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xC2":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"警報発生状態", "en":"Alarm status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"bitmap",
                "size":4,
                "bitmaps":[
                    {
                        "name":"noHotWater",
                        "descriptions":{"ja":"湯切れ警報", "en":"No Hot Water"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000001"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"正常", "en":"No Alarm"}},
                                {"edt":1, "state":{"ja":"発生", "en":"Alarm"}}
                            ]
                        }
                    },
                    {
                        "name":"leaking",
                        "descriptions":{"ja":"漏水警報", "en":"Leaking"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000010"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"正常", "en":"No Alarm"}},
                                {"edt":1, "state":{"ja":"発生", "en":"Alarm"}}
                            ]
                        }
                    },
                    {
                        "name":"freezing",
                        "descriptions":{"ja":"凍結警報", "en":"Freezing"},
                        "position":{
                            "index":0,
                            "bitMask":"0b0000100"
                        },
                        "value":{
                            "type":"state",
                            "size":0,
                            "enum":[
                                {"edt":0, "state":{"ja":"正常", "en":"No Alarm"}},
                                {"edt":1, "state":{"ja":"発生", "en":"Alarm"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xC3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"給湯中状態", "en":"Hot water supply status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xC4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"風呂保温運転相対時間設定値", "en":"Relative time setting for keeping bath temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xC7":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"エネルギーシフト参加状態", "en":"Participation in Energy Shift"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x01", "state":{"ja":"参加", "en":"Participation"}},
                    {"edt":"0x00", "state":{"ja":"不参加", "en":"Non Participation"}}
                ]
            }
        },
        "0xC8":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"沸き上げ開始基準時刻", "en":"Standard time to start heating"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "enum":[1,20,21,22,23,24]
            }
        },
        "0xC9":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"エネルギーシフト回数", "en":"Number of energy shifts"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-2" }
        },
        "0xCA":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"昼間沸き上げシフト時刻１", "en":"Daytime heating shift time 1"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_9-17" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0x00", "state":{"ja":"クリア状態", "en":"Undefined"}}]
                    }
                ]
            }
        },
        "0xCB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{
                "ja":"昼間沸き上げシフト時刻１での沸き上げ予測電力量",
                "en":"Expected electric energy at daytime heating shift time 1"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"at1000",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    },
                    {
                        "name":"at1300",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    },
                    {
                        "name":"at1500",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    },
                    {
                        "name":"at1700",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    }
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"時間あたり消費電力量１", "en":"Consumption of electric energy per hour 1"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"at1000",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    },
                    {
                        "name":"at1300",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    },
                    {
                        "name":"at1500",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    },
                    {
                        "name":"at1700",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    }
                ]
            }
        },
        "0xCD":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"昼間沸き上げシフト時刻２", "en":"Daytime heating shift time 2"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_10-17" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0x00", "state":{"ja":"クリア状態", "en":"Undefined"}}]
                    }
                ]
            }
        },
        "0xCE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{
                "ja":"昼間沸き上げシフト時刻２での沸き上げ予測電力量",
                "en":"Expected electric energy at daytime heating shift time 2"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"at1300",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    },
                    {
                        "name":"at1500",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    },
                    {
                        "name":"at1700",
                        "element":{ "$ref":"#/definitions/number_0-4294967293", "unit":"Wh" }
                    }
                ]
            }
        },
        "0xCF":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{
                "ja":"時間あたり消費電力量２",
                "en":"Consumption of electric energy per hour 2"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"at1300",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    },
                    {
                        "name":"at1500",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    },
                    {
                        "name":"at1700",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"Wh" }
                    }
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯温度設定値", "en":"Temperature of supplied water setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂温度設定値", "en":"Bath water temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xD4":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定４", "en":"Bath water volume setting4"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xD5":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定４設定可能最大レベル", "en":"Bath water volume setting4 maximum settable level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xD6":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"音量設定値", "en":"Volume setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xD7":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"ミュート設定", "en":"Mute setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xD8":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"給湯可能湯量値", "en":"Remaining hot water volume"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xD9":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"余剰電力量予測値", "en":"Surplus electric energy power prediction value"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"month",
                        "element":{ "$ref":"#/definitions/number_1-12" }
                    },
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_1-31" }
                    },
                    {
                        "name":"hour",
                        "element":{ "$ref":"#/definitions/number_0-23" }
                    },
                    {
                        "name":"electricEnergy",
                        "element":{
                            "type":"array",
                            "itemSize":2,
                            "minItems":24,
                            "maxItems":24,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_-32767-32765", "unit":"Wh", "multipleOf":10 },
                                    {
                                        "type":"state",
                                        "size":2,
                                        "enum":[{"edt":"0x8000", "state":{"ja":"無効値","en":"Invalid data"}}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        },
        "0xDB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冬季H/Pユニット定格消費電力", "en":"Rated power consumption of H/P unit in wintertime"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xDC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"中間期H/Pユニット定格消費電力", "en":"Rated power consumption of H/P unit in in-between season"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xDD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"夏季H/Pユニット定格消費電力", "en":"Rated power consumption of H/P unit in summertime"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"沸き上げ湯量設定値", "en":"Bath water volume setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"残湯量計測値", "en":"Measured amount of water remaining in tank"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"タンク容量値", "en":"Tank capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂自動モード設定", "en":"Automatic Bath Water Heating Mode Setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"手動風呂追い焚き動作設定", "en":"Manual bath reheating operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE5":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"風呂足し湯動作設定", "en":"Manual bath hot water addition function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"手動風呂足し湯動作設定", "en":"Manual bath hot water addition function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                }
            ]
        },
        "0xE6":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"風呂ぬるめ動作設定", "en":"Manual lukewarm water temperature lowering function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"手動風呂ぬるめ動作設定", "en":"Manual lukewarm water temperature lowering function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                }
            ]
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定１", "en":"Bath water volume setting1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"L" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定２", "en":"Bath water volume setting2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xE9":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"浴室優先設定", "en":"Bathroom pripority setting"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xEA":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"風呂動作状態監視", "en":"Bath Operation Status Monitor"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"湯張り中", "en":"Running Hot Water"}},
                    {"edt":"0x42", "state":{"ja":"停止中", "en":"No Operation"}},
                    {"edt":"0x43", "state":{"ja":"保温中", "en":"Keeping Temperature"}}
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定３", "en":"Bath water volume setting3"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        }
    }
},
"0x026E":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気便座", "en":"Bidet-quipped toilet(with electrically warmed seat)"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"便座温度レベル設定", "en":"Temperature level of toilet seat"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-10" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"便座ヒータ設定", "en":"Heater setting of toilet seat"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"便座ヒータ一時停止設定", "en":"Temporal halt setting of toilet seat"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"連続", "en":"Continuous"}},
                    {"edt":"0x42", "state":{"ja":"一回", "en":"Once"}},
                    {"edt":"0x43", "state":{"ja":"設定無し", "en":"No setting"}}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"便座ヒータ一時停止開始時刻設定値", "en":"Temporal halt start time of toilet seat"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"便座ヒータ一時停止時間設定値", "en":"Temporal halt time duration of toilet seat"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"部屋暖房温度レベル設定", "en":"Temperature level setting of room heating"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x31", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x32", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x33", "state":{"ja":"高", "en":"High"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"部屋暖房設定", "en":"Room heating setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x43", "state":{"ja":"Timer mode", "en":"Timer mode"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"部屋暖房状態", "en":"Room heating status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"部屋暖房開始時刻設定値", "en":"Start time of room heating"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"部屋暖房運転時間設定値", "en":"Duration time of room heating"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特別運転モード設定", "en":"Special operation mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"設定無し", "en":"No setting"}},
                    {"edt":"0x41", "state":{"ja":"冷え込み防止", "en":"Over-cool prevention"}}
                ]
            }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体検知状態", "en":"Human detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"着座検知状態", "en":"Seating detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x026F":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気錠", "en":"Electric key"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"施錠設定1", "en":"Lock setting1"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"施錠設定2", "en":"Lock setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドアガード施錠状態", "en":"Lock status of door guard"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"扉開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"在室・不在状態", "en":"Occupant/ non-occupant status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"在室", "en":"occupant"}},
                    {"edt":"0x42", "state":{"ja":"不在", "en":"non-occupant"}}
                ]
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"警報状態", "en":"Alarm status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"通常状態（警報なし）", "en":"Normal(no alarm)"}},
                    {"edt":"0x41", "state":{"ja":"こじ開け", "en":"break open"}},
                    {"edt":"0x42", "state":{"ja":"扉解放", "en":"door open"}},
                    {"edt":"0x43", "state":{"ja":"手動解錠", "en":"manual unlocked"}},
                    {"edt":"0x44", "state":{"ja":"タンパ", "en":"tampered"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動施錠モード設定", "en":"Auto lock mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE7":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"電池残量状態", "en":"Battery level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"通常", "en":"Ordinary level"}},
                    {"edt":"0x41", "state":{"ja":"交換通知有", "en":"Notification of battery replacement"}}
                ]
            }
        }
    }
},
"0x0272":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"瞬間式給湯器", "en":"Instantaneous water heater"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯器燃焼状態", "en":"Hot water heating status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯温度設定値", "en":"Set value of hot water temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯保温設定", "en":"Hot water warmer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xD4":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定4", "en":"Bath water volume setting 4"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xD5":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定4 設定可能最大レベル", "en":"Bath water volume setting 4- Maximum settable level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xD6":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"音量設定値", "en":"Volume setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xD7":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"ミュート設定", "en":"Mute setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xDA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動運転時間設定値", "en":"Duration of Automatic operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time" },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0xFFFF", "state":{"ja":"無限","en":"limitless"}}
                        ]
                    }            
                ]
            }
        },
        "0xDB":{
            "propertyName":{"ja":"自動運転残時間", "en":"Remaining Automatic operation time"},
            "validRelease":{"from":"A", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0xFFFF", "state":{"ja":"無限","en":"limitless"}}
                        ]
                    }            
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂温度設定値", "en":"Set value of bath temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂給湯器燃焼状態", "en":"Bath water heater status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂自動モード設定", "en":"Bath Auto mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂追い炊き動作設定", "en":"Bath additional boil-up operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂足し湯動作設定", "en":"Bath hot water adding operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂ぬるめ動作設定", "en":"Bath water temperature lowering operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定1", "en":"Bath hot water volume setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"L" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定2", "en":"Bath hot water volume setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        },
        "0xE9":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"D"},
                    "propertyName":{"ja":"浴室優先設定", "en":"Bathroom priority setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"E", "to":"latest"},
                    "propertyName":{"ja":"浴室優先設定", "en":"Bathroom priority setting"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                }
            ]
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"シャワー給湯状態", "en":"Shower hot water supply status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"台所給湯状態", "en":"Kitchen hot water supply status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯保温ONタイマ予約設定", "en":"Hot water warmer ON timer reservation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯保温ONタイマ時刻設定値", "en":"Set value of hot water warmer ON timer time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定3", "en":"Bath hot water volume setting 3"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xEF":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"風呂動作状態監視", "en":"Bath operation status monitor"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"湯張り中", "en":"Running Hot Water"}},
                    {"edt":"0x42", "state":{"ja":"停止中", "en":"No Operation"}},
                    {"edt":"0x43", "state":{"ja":"保温中", "en":"Keeping Temperature"}}
                ]
            }
        }
    }
},
"0x0273":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"浴室暖房乾燥機", "en":"Bathroom heater and dryer"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定１", "en":"ON timer setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"K"},
                    "propertyName":{"ja":"運転設定", "en":"Operation setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x10", "state":{"ja":"換気運転", "en":"Ventilation"}},
                            {"edt":"0x20", "state":{"ja":"入浴前予備暖房運転", "en":"Preheating"}},
                            {"edt":"0x30", "state":{"ja":"入浴中暖房運転", "en":"Heating"}},
                            {"edt":"0x40", "state":{"ja":"乾燥運転", "en":"Drying"}},
                            {"edt":"0x50", "state":{"ja":"涼風運転", "en":"Cooling"}},
                            {"edt":"0x00", "state":{"ja":"停止", "en":"stop"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"L", "to":"latest"},
                    "propertyName":{"ja":"運転設定", "en":"Operation setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x10", "state":{"ja":"換気運転", "en":"Ventilation"}},
                            {"edt":"0x20", "state":{"ja":"入浴前予備暖房運転", "en":"Preheating"}},
                            {"edt":"0x30", "state":{"ja":"入浴中暖房運転", "en":"Heating"}},
                            {"edt":"0x40", "state":{"ja":"乾燥運転", "en":"Drying"}},
                            {"edt":"0x50", "state":{"ja":"涼風運転", "en":"Cooling"}},
                            {"edt":"0x60", "state":{"ja":"ミストサウナ運転", "en":"Mist sauna"}},
                            {"edt":"0x61", "state":{"ja":"水ミスト運転", "en":"Water mist"}},
                            {"edt":"0x00", "state":{"ja":"停止", "en":"stop"}}
                        ]
                    }
                }
            ]
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気運転設定", "en":"Ventilation operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xB2":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"G"},
                    "propertyName":{"ja":"入浴前予備暖房運転設定", "en":"Bathroom pre-warmer_operation setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/level_31-8" },
                            { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"入浴前予備暖房運転設定", "en":"Bathroom pre-warmer_operation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/level_31-8" },
                            { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                        ]
                    }
                }
            ]
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"入浴中暖房運転設定", "en":"Bathroom heater operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥運転設定", "en":"Bathroom dryer operation setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"涼風運転設定", "en":"Cool air circulator operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xB6":{
            "validRelease":{"from":"L", "to":"latest"},
            "propertyName":{"ja":"ミストサウナ運転設定", "en":"Mist sauna operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xB7":{
            "validRelease":{"from":"L", "to":"latest"},
            "propertyName":{"ja":"水ミスト運転設定", "en":"Water mist operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-STANDARD-4142" }
                ]
            }
        },
        "0xBA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内相対湿度計測値", "en":"Measured relative bathroom humidity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xBB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured bathroom temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Ventilation air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            }
        },
        "0xCF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"フィルタサイン設定", "en":"Filter cleaning reminder sign setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"点灯", "en":"Lit"}},
                    {"edt":"0x42", "state":{"ja":"消灯", "en":"Not Lit"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"人体検知状態", "en":"Human body detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"K"},
                    "propertyName":{"ja":"ONタイマ予約設定２", "en":"ON timer-based reservation setting 2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x10", "state":{"ja":"換気運転", "en":"Ventilation"}},
                            {"edt":"0x20", "state":{"ja":"入浴前予備暖房運転", "en":"Preheating"}},
                            {"edt":"0x30", "state":{"ja":"入浴中暖房運転", "en":"Heating"}},
                            {"edt":"0x40", "state":{"ja":"乾燥運転", "en":"Drying"}},
                            {"edt":"0x50", "state":{"ja":"涼風運転", "en":"Cooling"}},
                            {"edt":"0x00", "state":{"ja":"予約切", "en":"OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"L", "to":"latest"},
                    "propertyName":{"ja":"ONタイマ予約設定2", "en":"ON timer-based reservation setting 2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x10", "state":{"ja":"換気運転", "en":"Ventilation"}},
                            {"edt":"0x20", "state":{"ja":"入浴前予備暖房運転", "en":"Preheating"}},
                            {"edt":"0x30", "state":{"ja":"入浴中暖房運転", "en":"Heating"}},
                            {"edt":"0x40", "state":{"ja":"乾燥運転", "en":"Drying"}},
                            {"edt":"0x50", "state":{"ja":"涼風運転", "en":"Cooling"}},
                            {"edt":"0x60", "state":{"ja":"ミストサウナ運転", "en":"Mist sauna"}},
                            {"edt":"0x61", "state":{"ja":"水ミスト運転", "en":"Water mist"}},
                            {"edt":"0x00", "state":{"ja":"予約切", "en":"OFF"}}
                        ]
                    }
                }
            ]
        }
    }
},
"0x0279":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"住宅用太陽光発電", "en":"Household solar power generation"},
    "elProperties":{
        "0x83":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
        },
        "0x97":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"現在時刻設定", "en":"Current time setting"},
            "accessRule":{"get":"required_c", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },
        "0x98":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"現在年月日設定", "en":"Current date setting"},
            "accessRule":{"get":"required_c", "set":"optional", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },

        "0xA0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"出力制御設定１", "en":"Output power control setting 1"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" },
            "note":{"ja":"出力制御が可能な場合は、0xA0または0xA1のいずれかが必須", "en":"either 0xA0 or 0xA1 is required if output control is capable"}
        },
        "0xA1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"出力制御設定２", "en":"utput power control setting 2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" },
            "note":{"ja":"出力制御が可能な場合は、0xA0または0xA1のいずれかが必須", "en":"either 0xA0 or 0xA1 is required if output control is capable"}
        },
        "0xA2":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"余剰買取制御機能設定", "en":"Function to control purchase surplus electricity setting"},
            "accessRule":{"get":"required_c", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" },
            "note":{"ja":"出力制御が可能な場合は必須", "en":"required if output control is capable"}
        },
        "0xB0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"出力制御スケジュール", "en":"Output power control schedule"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"date",
                        "element":{
                            "oneOf":[
                                { "type":"date-time", "size":"4" },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFF", "state":{"ja":"不明","en":"Unknown"}, "readOnly":true}]
                                }
                            ]
                        }
                    },
                    {
                        "name":"rate",
                        "element":{
                            "type":"array",
                            "itemSize":1,
                            "minItems":96,
                            "maxItems":96,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-100%" },
                                    {
                                        "type":"state",
                                        "size":1,
                                        "enum":[{"edt":"0xFF", "state":{"ja":"不明","en":"Unknown"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },
        "0xB1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"次回アクセス日時", "en":"Next access date and time"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"required"},
            "data":{
                "oneOf":[
                    { "type":"date-time", "size":"7" },
                    {
                        "type":"state",
                        "size":7,
                        "enum":[{"edt":"0xFFFFFFFFFFFFFF", "state":{"ja":"不明","en":"Unknown"}, "readOnly":true}]
                    }
                ]
            },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },
        "0xB2":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"余剰買取制御機能タイプ", "en":"Function to control the type of surplus electricity purchase"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"有効", "en":"Valid"}},
                    {"edt":"0x42", "state":{"ja":"無効", "en":"Invalid"}}
                ]
            },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },
        "0xB3":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"出力変化時間設定値", "en":"Output power change time setting value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"second" }
        },
        "0xB4":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"上限クリップ設定値", "en":"Upper limit clip setting value"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" },
            "note":{"ja":"出力制御スケジュールにより出力制御を行う場合は必須", "en":"required if output control by schedule is capable"}
        },
        "0xC0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"運転力率設定値", "en":"Operation power factor setting value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"FIT契約タイプ", "en":"FIT contract type"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"FIT", "en":"FIT"}},
                    {"edt":"0x42", "state":{"ja":"非FIT", "en":"Non-FIT"}},
                    {"edt":"0x43", "state":{"ja":"未設定", "en":"No setting"}}
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"自家消費タイプ", "en":"Self-consumption type"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自家消費有", "en":"With self-consumption"}},
                    {"edt":"0x42", "state":{"ja":"自家消費無", "en":"Without self-consumption"}},
                    {"edt":"0x43", "state":{"ja":"不明", "en":"Unknown"}}
                ]
            }
        },
        "0xC3":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"設備認定容量", "en":"Capacity approved by equipment"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" },
            "note":{"ja":"0xC3または0xC4のいずれかが必須", "en":"either 0xC3 or 0xC4 is required"}
        },
        "0xC4":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"換算係数", "en":"Conversion coefficient"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" },
            "note":{"ja":"0xC3または0xC4のいずれかが必須", "en":"either 0xC3 or 0xC4 is required"}
        },
        "0xD0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"J"},
                    "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"System-interconnected type(reverse power flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"K", "to":"latest"},
                    "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"System-interconnected type(reverse power flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}},
                            {"edt":"0x03", "state":{"ja":"不明", "en":"Unknown"}}
                        ]
                    }
                }
            ]
        },
        "0xD1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"出力抑制状態", "en":"Output power restraint status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"抑制中（出力制御）", "en":"Ongoing restraint (output power control)"}},
                    {"edt":"0x42", "state":{"ja":"抑制中（出力制御以外）", "en":"Ongoing restraint (except output power control)"}},
                    {"edt":"0x43", "state":{"ja":"抑制中（抑制要因不明）", "en":"Ongoing restraint (reason for restraint is unknown)"}},
                    {"edt":"0x44", "state":{"ja":"抑制未実施", "en":"Not restraining"}},
                    {"edt":"0x45", "state":{"ja":"不明", "en":"Unknown"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時発電電力計測値", "en":"Measured instantaneous amount of electricity generated"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量計測値", "en":"Measured cumulative amount of electric energy generated"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 },
            "note":{"ja":"オーバーフロー時は0にリセット", "en":"The value is reset to 0 after overflow"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量リセット設定", "en":"Resetting cumulative amount of electric energy generated"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算売電電力量計測値", "en":"Measured cumulative amount of electric energy sold"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 },
            "note":{"ja":"オーバーフロー時は0にリセット", "en":"The value is reset to 0 after overflow"}
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算売電電力量リセット設定", "en":"Resetting cumulative amount of electric energy sold"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"発電電力制限設定1", "en":"Power generation output limit setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"発電電力制限設定2", "en":"Power generation output limit setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"売電電力制限設定", "en":"Limit setting for the amount of electricity sold"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE8":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"J"},
                    "propertyName":{"ja":"定格発電電力値（系統連系時）", "en":"Rated power generation output (System-interconnected)"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                },
                {
                    "validRelease":{"from":"K", "to":"latest"},
                    "propertyName":{"ja":"定格発電電力値（系統連系時）", "en":"Rated power generation output (System-interconnected)"},
                    "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                }
            ]
        },
        "0xE9":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"定格発電電力値（独立時）", "en":"Rated power generation output (Independent)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        }
    }
},
"0x027A":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"冷温水熱源機", "en":"Hot water heat source equipment"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"冷水温設定２設定可能最大レベル", "en":"Cold water temperature setting 2 Maximum allowable setting level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":33,
                "maximum":47
            }
        },
        "0xD2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"温水温設定２設定可能最大レベル", "en":"Warm water temperature setting 2 Maximum allowable setting level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":49,
                "maximum":63
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水温設定1", "en":"Water temperature1"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_AUTO-71" }
                ]
            },
            "note":{"ja":"EPC=0xE1または0xE2のどちらかの実装が必須", "en":"Either EPC=0xE1 or 0xE2 is required"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水温設定2", "en":"Water temperature2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_21-15" },
                    { "$ref":"#/definitions/level_31-15" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            },
            "note":{
                "ja":"EPC=0xE1または0xE2のどちらかの実装が必須。冷水:0x21~0x2F, 温水:0x31~0x3F。",
                "en":"Either EPC=0xE1 or 0xE2 is required. Cold Water:0x21, Hot Water:0x31."
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"往き水温計測値（出口水温）", "en":"Measured temperature of outward water (Exit water Temperature)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"戻り水温計測値（入口水温）", "en":"Measured temperature of inward water (Entrance water Temperature)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特殊運転設定", "en":"Special operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"通常", "en":"Normal"}},
                    {"edt":"0x42", "state":{"ja":"控えめ", "en":"Modest"}},
                    {"edt":"0x43", "state":{"ja":"ハイパワー", "en":"High power"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー設定", "en":"Daily timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"タイマー切", "en":"Timer OFF"}},
                    {"edt":"0x41", "state":{"ja":"タイマー１", "en":"timer 1"}},
                    {"edt":"0x42", "state":{"ja":"タイマー２", "en":"timer 2"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー1設定", "en":"Daily timer setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{
                "ja":"24時間を30分単位で分割、全６バイトを割り当てて、各bit 1:運転、0:停止",
                "en":"Every bit of 6byte is assigned to 30 minute duration of 24H, 0:operation, 1:no operation"
            }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー2設定", "en":"Daily timer setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{
                "ja":"24時間を30分単位で分割、全６バイトを割り当てて、各bit 1:運転、0:停止",
                "en":"Every bit of 6byte is assigned to 30 minute duration of 24H, 0:operation, 1:no operation"
            }
        },
        "0xE9":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"定格消費電力値", "en":"Rated power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"heating",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    },
                    {
                        "name":"cooling",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    }
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"消費電力計測方法", "en":"Power consumption measurement method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ノード単位", "en":"Node unit"}},
                    {"edt":"0x42", "state":{"ja":"クラス単位", "en":"Class unit"}},
                    {"edt":"0x43", "state":{"ja":"インスタンス単位", "en":"Instance unit"}}
                ]
            }
        }
    }
},
"0x027B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"床暖房", "en":"Floor heater"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定値", "en":"OFF timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xD1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"温度設定2 設定可能最大レベル", "en":"Maximum allowable setting level for temperature setting 2"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/number_49-63" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定1", "en":"Temperature1"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定2", "en":"Temperature2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-15" },
                    { "$ref":"#/definitions/state_AUTO-41" }
                ]
            },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured room temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    { "$ref":"#/definitions/state_Undefined-7E" }
                ]
            }
        },
        "0xE3":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"床温度計測値", "en":"Measured floor temperature"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_0-50Celsius" },
                            { "$ref":"#/definitions/state_Undefined-7E" }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"C", "to":"latest"},
                    "propertyName":{"ja":"床温度計測値", "en":"Measured floor temperature"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-127-125Celsius" },
                            { "$ref":"#/definitions/state_Undefined-7E" }
                        ]
                    }
                }
            ]
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ゾーン切替え設定", "en":"Zone change setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" },
            "note":{
                "ja":"b0〜b7を各々ゾーン0〜7に割当各ビット 1:制御有り、0:制御無し",
                "en":"Assign b0 - b7 to zone0 - zone7, 1: yes, 0: no"
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"特殊運転設定", "en":"Special operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"通常運転", "en":"Normal operation"}},
                    {"edt":"0x42", "state":{"ja":"ひかえめ運転", "en":"Moderate Operation"}},
                    {"edt":"0x43", "state":{"ja":"ハイパワー運転", "en":"High power operation"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー設定", "en":"Daily timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"タイマー切", "en":"Timer off"}},
                    {"edt":"0x41", "state":{"ja":"タイマー１", "en":"Timer1"}},
                    {"edt":"0x42", "state":{"ja":"タイマー２", "en":"Timer2"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー1設定", "en":"Daily timer setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{
                "ja":"24時間を30分単位で分割、全６バイトを割り当てて、各bit 1:運転、0:停止",
                "en":"Every bit of 6byte is assigned to 30 minute duration of 24H, 0:operation, 1:no operation"
            }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"デイリータイマー2設定", "en":"Daily timer setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{
                "ja":"24時間を30分単位で分割、全６バイトを割り当てて、各bit 1:運転、0:停止",
                "en":"Every bit of 6byte is assigned to 30 minute duration of 24H, 0:operation, 1:no operation"
            }
        },
        "0xE9":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"定格消費電力値", "en":"Rated power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xEA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"消費電力計測方法", "en":"Power consumption measurement method"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ノード単位", "en":"Node unit"}},
                    {"edt":"0x42", "state":{"ja":"クラス単位", "en":"Class unit"}},
                    {"edt":"0x43", "state":{"ja":"インスタンス単位", "en":"Instance unit"}}
                ]
            }
        }
    }
},
"0x027C":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"燃料電池", "en":"Fuel cell"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"沸き上げ湯温自動設定", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"沸き上げ中状態", "en":""},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"沸き上げ湯温設定値", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温水器湯温計測値", "en":"Measured temperature of water in water heater"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xC2":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"I"},
                    "propertyName":{"ja":"定格発電量", "en":"Rated power generation output"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"定格発電出力", "en":"Rated power generation output"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                }
            ]
        },
        "0xC3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"貯湯槽熱量", "en":"Heating value of hot water storage tank"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"MJ" }
        },
        "0xC4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時発電電力計測値", "en":"Measured instantaneous power generation output"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量計測値", "en":"Measured cumulative power generation output"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 },
            "note":{"ja":"オーバーフロー時は0にリセット", "en":"The value is reset to 0 after overflow"}
        },
        "0xC6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量リセット設定", "en":"Cumulative power generation output reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xC7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時ガス消費量計測値", "en":"Measured instantaneous gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"m3/h", "multipleOf":0.001 }
        },
        "0xC8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Measured cumulative gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "multipleOf":0.001 }
        },
        "0xC9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量リセット設定", "en":"Cumulative gas consumption reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xCA":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"C", "to":"C"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
                }
            ]
        },
        "0xCB":{
            "oneOf":[
                {
                    "validRelease":{"from":"C", "to":"I"},
                    "propertyName":{"ja":"発電動作状態", "en":"Power generation status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"発電中", "en":"Generating"}},
                            {"edt":"0x42", "state":{"ja":"停止中", "en":"Stopped"}},
                            {"edt":"0x43", "state":{"ja":"起動中", "en":"Starting"}},
                            {"edt":"0x43", "state":{"ja":"停止動作中", "en":"Stopping"}},
                            {"edt":"0x43", "state":{"ja":"アイドル中", "en":"idling"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"発電動作状態", "en":"Power generation status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"発電中", "en":"Generating"}},
                            {"edt":"0x42", "state":{"ja":"停止中", "en":"Stopped"}},
                            {"edt":"0x43", "state":{"ja":"起動中", "en":"Starting"}},
                            {"edt":"0x43", "state":{"ja":"停止動作中", "en":"Stopping"}},
                            {"edt":"0x43", "state":{"ja":"アイドル中", "en":"idling"}}
                        ]
                    }
                }
            ]
        },
        "0xCC":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内瞬時消費電力計測値", "en":"Measured in-house instantaneous power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xCD":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内積算消費電力量計測値", "en":"Measured in-house cumulative power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xCE":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内積算消費電力量リセット設定", "en":"In-house cumulative power consumption reset"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xD0":{
            "oneOf":[
                {
                    "validRelease":{"from":"B", "to":"I"},
                    "propertyName":{"ja":"系統連系状態", "en":"System interconnected type"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"System-interconnected type(reverse power flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"系統連系状態", "en":"System interconnected type"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"System-interconnected type(reverse power flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}}
                        ]
                    }
                }
            ]
        },
        "0xD1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"給湯温度設定値", "en":"Temperature of supplied water setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"発電要請時刻設定", "en":"Power generation request time setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            {
                              "type":"object",
                              "properties":[
                                  {
                                    "name":"start",
                                    "element":{ "type":"time", "size":2 }
                                  },
                                  {
                                    "name":"end",
                                    "element":{ "type":"time", "size":2 }
                                  }
                              ]
                            },
                            {
                              "type":"state",
                              "size":4,
                              "enum":[
                                  {"edt":"0xFFFFFFFF", "state":{"ja":"未設定", "en":"undefined"}}
                              ]
                            }
                        ]
                    }
                }
            ]
        },
        "0xD2":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"指定発電状態", "en":"Designated power generation status"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"定格最大での発電", "en":"Power generation at the max. rating"}},
                    {"edt":"0x42", "state":{"ja":"負荷追従での発電", "en":"Load following power generation"}}
                ]
            }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂温度設定値", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"沸き上げ湯量設定値", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE1":{
            "propertyName":{"ja":"残湯量計測値", "en":"Measured remaining hot water amount"},
            "validRelease":{"from":"A", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"タンク容量値", "en":"Tank capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂自動モード設定", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"追い焚き", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂足し湯動作設定", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂ぬるめ動作設定", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂湯量設定２", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"B"},
            "propertyName":{"ja":"風呂湯量設定３", "en":""},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        }
    }
},
"0x027D":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"蓄電池", "en":"Storage battery"},
    "elProperties":{
        "0x83":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
        },
        "0x97":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"現在時刻設定", "en":"Current time setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x98":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"現在年月日設定", "en":"Current date setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{ "type":"date-time", "size":4 }
        },
        "0xA0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC実効容量（充電）", "en":"AC effective capacity(charging)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA1":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC実効容量（放電）", "en":"AC effective capacity(discharging)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA2":{
            "propertyName":{"ja":"AC充電可能容量", "en":"AC chargeable capacity"},
            "validRelease":{"from":"H", "to":"latest"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA3":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC放電可能容量", "en":"AC dischargeable capacity"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA4":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC充電可能量", "en":"AC chargeable electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA5":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC放電可能量", "en":"AC dischargeable electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA6":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC充電上限設定", "en":"AC charge upper limit setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xA7":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC放電下限設定", "en":"AC discharge lower limit setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xA8":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC積算充電電力量計測値", "en":"AC measured cumulative charging electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xA9":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC積算放電電力量計測値", "en":"AC measured cumulative discharging electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xAA":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC充電量設定値", "en":"AC charge amount setting value"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-999999999", "unit":"Wh" },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[
                            {"edt":"0x00000000", "state":{"ja":"未設定","en":"Undefined"}}
                        ]
                    }
                ]
            }
        },
        "0xAB":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC放電量設定値", "en":"AC discharge amount setting value"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-999999999", "unit":"Wh" },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[
                            {"edt":"0x00000000", "state":{"ja":"未設定","en":"Undefined"}}
                        ]
                    }
                ]
            }
        },
        "0xC1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"充電方式", "en":"Charging method"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x01", "state":{"ja":"最大充電電力充電", "en":"Maximum charging electric energy charting"}},
                    {"edt":"0x02", "state":{"ja":"余剰電力充電", "en":"Surplus electric energy charging"}},
                    {"edt":"0x03", "state":{"ja":"指定電力充電", "en":"Designated electric energy charging"}},
                    {"edt":"0x04", "state":{"ja":"指定電流充電", "en":"Designated current power charging"}},
                    {"edt":"0x00", "state":{"ja":"その他", "en":"Others"}}
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"放電方式", "en":"Discharging method"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x01", "state":{"ja":"最大放電電力放電", "en":"Maximum discharge electric energy discharging"}},
                    {"edt":"0x02", "state":{"ja":"余剰電力放電", "en":"Load following discharge"}},
                    {"edt":"0x03", "state":{"ja":"指定電力放電", "en":"Designated electric energy discharging"}},
                    {"edt":"0x04", "state":{"ja":"指定電流放電", "en":"Designated current power discharging"}},
                    {"edt":"0x00", "state":{"ja":"その他", "en":"Others"}}
                ]
            }
        },
        "0xC7":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC定格電力量", "en":"AC rated electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xC8":{
            "oneOf":[
                {
                    "validRelease":{"from":"B", "to":"G"},
                    "propertyName":{"ja":"最小最大充電電力値", "en":"Min/Max charging electric power"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"最小最大充電電力値", "en":"Min/Max charging electric power"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                }
            ]
        },
        "0xC9":{
            "oneOf":[
                {
                    "validRelease":{"from":"B", "to":"G"},
                    "propertyName":{"ja":"最小最大放電電力値", "en":"Min/Max discharging electric power"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"最小最大放電電力値", "en":"Min/Max discharging electric power"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                }
            ]
        },
        "0xCA":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"最小最大充電電流値", "en":"Minimum/maximum charging current"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xCB":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"最小最大放電電流値", "en":"Minimum/maximum discharging current"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"再連系許可設定", "en":"Re-interconnection permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xCD":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"運転許可設定", "en":"Operation permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xCE":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"自立運転許可設定", "en":"Independent operation permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xCF":{
            "oneOf":[
                {
                    "validRelease":{"from":"D", "to":"G"},
                    "propertyName":{"ja":"運転動作状態", "en":"Working operation status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"運転動作状態", "en":"Working operation status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}},
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Automatic"}},
                            {"edt":"0x48", "state":{"ja":"再起動", "en":"restart"}},
                            {"edt":"0x49", "state":{"ja":"実効容量再計算処理", "en":"capacityRecalculation"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                        ]
                    }
                }
            ]
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"定格電力量", "en":"Rated electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"定格容量", "en":"Rated capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"定格電圧", "en":"Rated voltage"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"V" }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時充放電電力計測値", "en":"Measured instantaneous charging/discharging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-999999999-999999999", "unit":"W" }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時充放電電流計測値", "en":"Measured instantaneous charging/discharging current"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"A", "multipleOf":0.1 }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時充放電電圧計測値", "en":"Measured instantaneous charging/discharging voltage"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"V" }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算放電電力量計測値", "en":"Measured cumulative discharging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xD7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算放電電力量リセット設定", "en":"Measured cumulative discharging electric energy reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xD8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算充電電力量計測値", "en":"Measured cumulative charging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xD9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算充電電力量リセット設定", "en":"Measured cumulative charging electric energy reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xDA":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"G"},
                    "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}},
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Automatic"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"急速充電", "en":"rapidCharging"}},
                            {"edt":"0x42", "state":{"ja":"充電", "en":"charging"}},
                            {"edt":"0x43", "state":{"ja":"放電", "en":"discharging"}},
                            {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                            {"edt":"0x45", "state":{"ja":"テスト", "en":"test"}},
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Automatic"}},
                            {"edt":"0x48", "state":{"ja":"再起動", "en":"restart"}},
                            {"edt":"0x49", "state":{"ja":"実効容量再計算処理", "en":"capacityRecalculation"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                        ]
                    }
                }
            ]
        },
        "0xDB":{
            "oneOf":[
                {
                    "validRelease":{"from":"B", "to":"G"},
                    "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"Grid connection(reverse flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent operation"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"Grid connection(reverse flow not acceptable)"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"Grid connection(reverse flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent operation"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"Grid connection(reverse flow not acceptable)"}}
                        ]
                    }
                }
            ]
        },
        "0xDC":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"最小最大充電電力値（独立時）", "en":"Minimum/maximum charging power (Independent)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    }
                ]
            }
        },
        "0xDD":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"最小最大放電電力値（独立時）", "en":"Minimum/maximum discharging power (Independent)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    }
                ]
            }
        },
        "0xDE":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"最小最大充電電流値（独立時）", "en":"Minimum/maximum charging current (Independent)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xDF":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"最小最大放電電流値（独立時）", "en":"Minimum/maximum discharging current (Independent)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"充放電量設定値1", "en":"Charging/discharging amount setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-999999999-999999999", "unit":"Wh" },
            "note":{"ja":"EPC=0xE0を実装する場合は、EPC=0xE1,E7,E8,E9,EAを実装しない", "en":"In case EPC=0xE0 is implemented, EPC=0xE1,E7,E8,E9,EA should not be implemented."}
        },
        "0xE1":{
            "propertyName":{"ja":"充放電量設定値2", "en":"Charging/discharging amount setting 2"},
            "validRelease":{"from":"A", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"Ah", "multipleOf":0.1 },
            "note":{"ja":"EPC=0xE1を実装する場合は、EPC=0xE0,E7,E8,E9,EAを実装しない", "en":"In case EPC=0xE1 is implemented, EPC=0xE0,E7,E8,E9,EA should not be implemented."}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓄電残量1", "en":"Remaining stored electricity 1"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" },
            "note":{"ja":"0xE2, 0xE3または0xE4のいずれかを必須", "en":"Either 0xE2, 0xE3 or 0xE4 is required."}
        },
        "0xE3":{
            "propertyName":{"ja":"蓄電残量2", "en":"Remaining stored electricity 2"},
            "validRelease":{"from":"A", "to":"latest"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 },
            "note":{"ja":"0xE2, 0xE3または0xE4のいずれかを必須", "en":"Either 0xE2, 0xE3 or 0xE4 is required."}
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓄電残量3", "en":"Remaining stored electricity 3"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" },
            "note":{"ja":"0xE2, 0xE3または0xE4のいずれかを必須", "en":"Either 0xE2, 0xE3 or 0xE4 is required."}
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"劣化状態", "en":"Battery state of health"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓄電池タイプ", "en":"Battery type"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"不明", "en":"unknown"}},
                    {"edt":"0x01", "state":{"ja":"鉛", "en":"lead"}},
                    {"edt":"0x02", "state":{"ja":"NiH", "en":"ni-mh"}},
                    {"edt":"0x03", "state":{"ja":"NiCd", "en":"ni-cd"}},
                    {"edt":"0x04", "state":{"ja":"Li-ion", "en":"lib"}},
                    {"edt":"0x05", "state":{"ja":"Zn", "en":"zinc"}},
                    {"edt":"0x06", "state":{"ja":"充電式アルカリ", "en":"alkaline"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"充電量設定値1", "en":"Charging amount setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" },
            "note":{"ja":"EPC=0xE7を実装する場合は、EPC=0xE0,E1,E9を実装しない", "en":"In case EPC=0xE7 is implemented, EPC=0xE0,E1,E9 should not be implemented."}
        },
        "0xE8":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電量設定値1", "en":"Discharging amount setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" },
            "note":{"ja":"EPC=0xE8を実装する場合は、EPC=0xE0,E1,EAを実装しない", "en":"In case EPC=0xE8 is implemented, EPC=0xE0,E1,EA should not be implemented."}
        },
        "0xE9":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"充電量設定値2", "en":"Charging amount setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 },
            "note":{"ja":"EPC=0xE9を実装する場合は、EPC=0xE0,E1,E7を実装しない", "en":"In case EPC=0xE9 is implemented, EPC=0xE0,E1,E7 should not be implemented."}
        },
        "0xEA":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電量設定値2", "en":"Discharging amount setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 },
            "note":{"ja":"EPC=0xEAを実装する場合は、EPC=0xE0,E1,E8を実装しない", "en":"In case EPC=0xEA is implemented, EPC=0xE0,E1,E8 should not be implemented."}
        },
        "0xEB":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"充電電力設定値", "en":"Charging electric energy setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
        },
        "0xEC":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電電力設定値", "en":"Discharging electric energy setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
        },
        "0xED":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"充電電流設定値", "en":"Charging current setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        },
        "0xEE":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電電流設定値", "en":"Discharging current setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        },
        "0xEF":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"定格電圧（独立時）", "en":"Rated voltage (Independent)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"V" }
        }
    }
},
"0x027E":{
    "oneOf":[
        {
            "validRelease":{"from":"B", "to":"C"},
            "className":{"ja":"電気自動車充放電システム", "en":"EV charge and discharge system"},
            "elProperties":{
                "0xC0":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能容量値１", "en":"V2H stored electricity 1"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC1":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能容量値２", "en":"V2H stored electricity 2"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xC2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量１", "en":"V2H remaining available capacity 1"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量２", "en":"V2H remaining available capacity 2"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xC4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量３", "en":"V2H remaining available capacity 3"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xC5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格充電能力", "en":"Rated charge capacity"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC6":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格放電能力", "en":"Rated discharge capacity"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充放電可否状態", "en":"Chargeable/dischargeable status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xC8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大充電電力値", "en":"Min/max charge electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_8" }
                },
                "0xC9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大放電電力値", "en":"Min/max discharge electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_8" }
                },
                "0xCA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大充電電流値", "en":"Min/max charge current"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xCB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大放電電流値", "en":"Min/max discharge current"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD0":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"使用容量値１", "en":"Used capacity 1"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD1":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"使用容量値２", "en":"Used capacity 2"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格電圧", "en":"Rated voltage"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電力計測値", "en":"Measured instantaneous charge/discharge electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電流計測値", "en":"Measured instantaneous charge/discharge current"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電圧計測値", "en":"Measured instantaneous charge/discharge voltage"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD6":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算放電電力量計測値", "en":"Measured cumulative discharge electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算放電電力量リセット設定", "en":"Cumulative discharge electric energy reset setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算充電電力量計測値", "en":"Measured cumulative charge electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算充電電力量リセット設定", "en":"Cumulative charge electric energy reset setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xDA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xDB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"系統連携状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量１", "en":"Remaining battery capacity 1"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量２", "en":"Remaining battery capacity 2"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xE4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量３", "en":"Remaining battery capacity 3"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"劣化状態", "en":"Deterioration status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電量設定値１", "en":"Charging amount setting 1"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電量設定値１", "en":"Discharging amount setting 1"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電量設定値２", "en":"Charging amount setting 2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電量設定値２", "en":"Discharging amount setting 2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電電力設定値", "en":"Charge electric energy setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xEC":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電電力設定値", "en":"Discharge electric energy setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xED":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電電流設定値", "en":"Charge current setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEE":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電電流設定値", "en":"Disharge current setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                }
            }
        },
        {
            "validRelease":{"from":"D", "to":"latest"},
            "className":{"ja":"電気自動車充放電器", "en":"EV charger and discharger"},
            "elProperties":{
                "0xC0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"車載電池の放電可能容量値1", "en":"Dischargeable capacity of vehicle mounted battery 1"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xC1":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"車載電池の放電可能容量値2", "en":"Dischargeable capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        },
                        {
                            "validRelease":{"from":"G", "to":"latest"},
                            "propertyName":{"ja":"車載電池の放電可能容量値2", "en":"Dischargeable capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        }
                    ]
                },
                "0xC2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"車載電池の放電可能残容量1",
                        "en":"Remaining dischargeable capacity of vehicle mounted battery 1"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xC3":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"車載電池の放電可能残容量2", "en":"Remaining dischargeable capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        },
                        {
                            "validRelease":{"from":"G", "to":"latest"},
                            "propertyName":{"ja":"車載電池の放電可能残容量2", "en":"Remaining dischargeable capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        }
                    ]
                },
                "0xC4":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"車載電池の放電可能残容量3",
                        "en":"Remaining dischargeable capacity of vehicle mounted battery 3"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                },
                "0xC5":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"定格充電能力", "en":"Rated charge capacity"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                },
                "0xC6":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"定格放電能力", "en":"Rated discharge capacity"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                },
                "0xC7":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"車両接続・充放電可否状態", "en":"Vehicle connection and chargeable/dischargeable status"},
                            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                            "atomic":"0xCD",
                            "data":{
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x30", "state":{"ja":"車両未接続", "en":"Not Connected"}},
                                    {"edt":"0x40", "state":{"ja":"車両接続・充電不可・放電不可", "en":"Connected"}},
                                    {"edt":"0x41", "state":{"ja":"車両接続・充電可・放電不可", "en":"Chargeable"}},
                                    {"edt":"0x42", "state":{"ja":"車両接続・充電不可・放電可", "en":"Dischargeable"}},
                                    {"edt":"0x43", "state":{"ja":"車両接続・充電可・放電可", "en":"Chargeable and Dischargeable"}}
                                ]
                            },
                            "note":{"ja":"Atomic operation with EPC=0xCD", "en":"Atomic operation with EPC=0xCD"}
                        },
                        {
                            "validRelease":{"from":"G", "to":"I"},
                            "propertyName":{"ja":"車両接続・充放電可否状態", "en":"Vehicle connection and chargeable/dischargeable status"},
                            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                            "atomic":"0xCD",
                            "data":{
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x30", "state":{"ja":"車両未接続", "en":"Not Connected"}},
                                    {"edt":"0x40", "state":{"ja":"車両接続・充電不可・放電不可", "en":"Connected"}},
                                    {"edt":"0x41", "state":{"ja":"車両接続・充電可・放電不可", "en":"Chargeable"}},
                                    {"edt":"0x42", "state":{"ja":"車両接続・充電不可・放電可", "en":"Dischargeable"}},
                                    {"edt":"0x43", "state":{"ja":"車両接続・充電可・放電可", "en":"Chargeable and Dischargeable"}},
                                    {"edt":"0xFF", "state":{"ja":"不定", "en":"Undefined"}}
                                ]
                            },
                            "note":{"ja":"Atomic operation with EPC=0xCD", "en":"Atomic operation with EPC=0xCD"}
                        },
                        {
                            "validRelease":{"from":"J", "to":"latest"},
                            "propertyName":{"ja":"車両接続・充放電可否状態", "en":"Vehicle connection and chargeable/dischargeable status"},
                            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                            "atomic":"0xCD",
                            "data":{
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x30", "state":{"ja":"車両未接続", "en":"Not Connected"}},
                                    {"edt":"0x40", "state":{"ja":"車両接続・充電不可・放電不可", "en":"Connected"}},
                                    {"edt":"0x41", "state":{"ja":"車両接続・充電可・放電不可", "en":"Chargeable"}},
                                    {"edt":"0x42", "state":{"ja":"車両接続・充電不可・放電可", "en":"Dischargeable"}},
                                    {"edt":"0x43", "state":{"ja":"車両接続・充電可・放電可", "en":"Chargeable and Dischargeable"}},
                                    {"edt":"0x44", "state":{"ja":"車両接続・充電可否不明", "en":"Unknown of Chargeability"}},
                                    {"edt":"0xFF", "state":{"ja":"不定", "en":"Undefined"}}
                                ]
                            },
                            "note":{"ja":"Atomic operation with EPC=0xCD", "en":"Atomic operation with EPC=0xCD"}
                        }
                    ]
                },
                "0xC8":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"最小最大充電電力値", "en":"Minimum/maximum charging electric energy"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                },
                "0xC9":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"最小最大放電電力値", "en":"Minimum/maximum discharging electric energy"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                            }
                        ]
                    }
                },
                "0xCA":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"最小最大充電電流値", "en":"Minimum/maximum charging electric current"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                            }
                        ]
                    }
                },
                "0xCB":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"最小最大放電電流値", "en":"Minimum/maximum discharging electric current"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"minValue",
                                "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                            },
                            {
                                "name":"maxValue",
                                "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                            }
                        ]
                    }
                },
                "0xCC":{
                    "validRelease":{"from":"G", "to":"latest"},
                    "propertyName":{"ja":"充放電器タイプ", "en":"Charger/Discharger type"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x11", "state":{"ja":"AC_CPLT", "en":"AC_CPLT"}},
                            {"edt":"0x12", "state":{"ja":"AC_HLC（充電のみ）", "en":"AC_HLC_Charge"}},
                            {"edt":"0x13", "state":{"ja":"AC_HLC（充放電可）", "en":"AC_HLC_ChargeDischarge"}},
                            {"edt":"0x21", "state":{"ja":"DCタイプ_AA（充電のみ）", "en":"DC_AA_Charge"}},
                            {"edt":"0x22", "state":{"ja":"DCタイプ_AA（充放電可）", "en":"DC_AA_ChargeDischarge"}},
                            {"edt":"0x23", "state":{"ja":"DCタイプ_AA（放電のみ）", "en":"DC_AA_Discharge"}},
                            {"edt":"0x31", "state":{"ja":"DCタイプ_BB（充電のみ）", "en":"DC_BB_Charge"}},
                            {"edt":"0x32", "state":{"ja":"DCタイプ_BB（充放電可）", "en":"DC_BB_ChargeDischarge"}},
                            {"edt":"0x33", "state":{"ja":"DCタイプ_BB（放電のみ）", "en":"DC_BB_Discharge"}},
                            {"edt":"0x41", "state":{"ja":"DCタイプ_EE（充電のみ）", "en":"DC_EE_Charge"}},
                            {"edt":"0x42", "state":{"ja":"DCタイプ_EE（充放電可）", "en":"DC_EE_ChargeDischarge"}},
                            {"edt":"0x43", "state":{"ja":"DCタイプ_EE（放電のみ）", "en":"DC_EE_Discharge"}},
                            {"edt":"0x51", "state":{"ja":"DCタイプ_FF（充電のみ）", "en":"DC_FF_Charge"}},
                            {"edt":"0x52", "state":{"ja":"DCタイプ_FF（充放電可）", "en":"DC_FF_ChargeDischarge"}},
                            {"edt":"0x53", "state":{"ja":"DCタイプ_FF（放電のみ）", "en":"DC_FF_Discharge"}}
                        ]
                    }
                },
                "0xCD":{
                    "validRelease":{"from":"G", "to":"latest"},
                    "propertyName":{"ja":"車両接続確認", "en":"Vehicle Connection Confirmation"},
                    "accessRule":{"get":"notApplicable", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0x10", "state":{"ja":"接続確認", "en":"Connection confirmation"}}]
                    }
                },
                "0xCE":{
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"車載電池の充電可能容量値", "en":"Chargeable capacity of vehicle mounted battery"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xCF":{
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"車載電池の充電可能残容量値", "en":"Remaining chargeable capacity of vehicle mounted battery"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xD0":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"車載電池の使用容量値1", "en":"Used capacity of vehicle mounted battery 1 "},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xD1":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"車載電池の使用容量値2", "en":"Used capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        },
                        {
                            "validRelease":{"from":"G", "to":"latest"},
                            "propertyName":{"ja":"車載電池の使用容量値2", "en":"Used capacity of vehicle mounted battery 2"},
                            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        }
                    ]
                },
                "0xD2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"定格電圧", "en":"Rated voltage"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-32766", "unit":"V" }
                },
                "0xD3":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"瞬時充放電電力計測値", "en":"Measured instantaneous charging/discharging electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_-999999999-999999999", "unit":"W" }
                },
                "0xD4":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"瞬時充放電電流計測値", "en":"Measured instantaneous charging/discharging current"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"Ah", "multipleOf":0.1 }
                },
                "0xD5":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"瞬時充放電電圧計測値", "en":"Measured instantaneous charging/discharging voltage"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"V" }
                },
                "0xD6":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"積算放電電力量計測値", "en":"Measured cumulative amount of discharging electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
                },
                "0xD7":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"積算放電電力量リセット設定", "en":"Cumulative amount of discharging electric energy reset setting"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{ "$ref":"#/definitions/state_RESET" }
                },
                "0xD8":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"積算充電電力量計測値", "en":"Measured cumulative amount of charging electric energy"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
                },
                "0xD9":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"積算充電電力量リセット設定", "en":"Cumulative amount of charging electric energy reset setting"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{ "$ref":"#/definitions/state_RESET" }
                },
                "0xDA":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                            "accessRule":{"get":"required", "set":"required", "inf":"required"},
                            "data":{
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x41", "state":{"ja":"急速充電", "en":"Rapid charge"}},
                                    {"edt":"0x42", "state":{"ja":"充電", "en":"Charge"}},
                                    {"edt":"0x43", "state":{"ja":"放電", "en":"Discharge"}},
                                    {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                                    {"edt":"0x45", "state":{"ja":"テスト", "en":"Test"}},
                                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                                ]
                            }
                        },
                        {
                            "validRelease":{"from":"G", "to":"latest"},
                            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
                            "accessRule":{"get":"required", "set":"required", "inf":"required"},
                            "data":{
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x42", "state":{"ja":"充電", "en":"Charge"}},
                                    {"edt":"0x43", "state":{"ja":"放電", "en":"Discharge"}},
                                    {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                                    {"edt":"0x47", "state":{"ja":"停止", "en":"Idle"}},
                                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                                ]
                            }
                        }
                    ]
                },
                "0xDB":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"Grid connection(reverse flow acceptable)"}},
                            {"edt":"0x01", "state":{"ja":"独立", "en":"Independent operation"}},
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"Grid connection(reverse flow not acceptable)"}}
                        ]
                    }
                },
                "0xE2":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"車載電池の電池残容量1", "en":"Remaining stored electricity of vehicle mounted battery1"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xE3":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"D", "to":"F"},
                            "propertyName":{"ja":"車載電池の電池残容量2", "en":"Remaining stored electricity of vehicle mounted battery2"},
                            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        },
                        {
                            "validRelease":{"from":"G", "to":"latest"},
                            "propertyName":{"ja":"車載電池の電池残容量2", "en":"Remaining stored electricity of vehicle mounted battery2"},
                            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                        }
                    ]
                },
                "0xE4":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"車載電池の電池残容量3", "en":"Remaining stored electricity of vehicle mounted battery3"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                },
                "0xE6":{
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"車両ID", "en":"Vehcle ID"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"dataSize",
                                "element":{ "$ref":"#/definitions/number_0-24" }
                            },
                            {
                                "name":"id",
                                "element":{
                                    "type":"raw",
                                    "minSize":0,
                                    "maxSize":24
                                }
                            }
                        ]
                    }
                },
                "0xE7":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"充電量設定値1", "en":"Charging amount setting 1"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xE9":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"充電量設定値2", "en":"Charging amount setting 2"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
                },
                "0xEA":{
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"放電量設定値", "en":"Discharging electric energy setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
                },
                "0xEB":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"充電電力設定値", "en":"Charging electric energy setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                },
                "0xEC":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"放電電力設定値", "en":"Discharging electric energy setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                },
                "0xED":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"充電電流設定値", "en":"Charging current setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
                },
                "0xEE":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"放電電流設定値", "en":"Discharging current setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
                },
                "0xEF":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"定格電圧（独立時）", "en":"Rated voltage(Independent)"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-32766", "unit":"V" }
                }
            }
        }
    ]
},
"0x027F":{
    "validRelease":{"from":"C", "to":"latest"},
    "className":{"ja":"エンジンコージェネレーション", "en":"Engine cogeneration"},
    "elProperties":{
        "0xC1":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"温水器湯温計測値", "en":"Measured temperature of water in water heater"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xC2":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"定格発電量", "en":"Rated power generation output"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC3":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"貯湯槽熱量", "en":"Heating value of hot water storage tank"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"MJ" }
        },
        "0xC4":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"瞬時発電電力計測値", "en":"Measured instantaneous power generation output"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC5":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量計測値", "en":"Measured cumulative power generation output"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "multipleOf":0.001, "unit":"kWh" }
        },
        "0xC6":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"積算発電電力量リセット設定", "en":"Cumulative power generation output reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xC7":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"瞬時ガス消費量計測値", "en":"Measured instantaneous gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "multipleOf":0.001, "unit":"m3/h" }
        },
        "0xC8":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Measured cumulative gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "multipleOf":0.001, "unit":"m3" }
        },
        "0xC9":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量リセット設定", "en":"Cumulative gas consumption reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xCA":{
            "oneOf":[
                {
                    "validRelease":{"from":"C", "to":"C"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                }
            ]
        },
        "0xCB":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"発電動作状態", "en":"Power generation status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"発電中", "en":"Generating"}},
                    {"edt":"0x42", "state":{"ja":"停止中", "en":"Stopped"}},
                    {"edt":"0x45", "state":{"ja":"アイドル中", "en":"Idling"}}
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内瞬時消費電力計測値", "en":"Measured inhouse instantaneous power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xCD":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内積算消費電力量計測値", "en":"Measured inhouse cumulative power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "multipleOf":0.001, "unit":"kWh" }
        },
        "0xCE":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"宅内積算消費電力量リセット設定", "en":"In-house cumulative power consumption reset"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xD0":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"系統連系状態", "en":"System interconnected type"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", 
                        "en":"System-interconnected type (reverse power flow acceptable)"}},
                    {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                    {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）",
                        "en":"System-interconnected type(reverse power flow not acceptable)"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"残湯量計測値", "en":"Measured remaining hot water amount"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE2":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"タンク容量値", "en":"Tank capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        }
    }
},
"0x0280":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電力量メータ", "en":"Watt-hour meter"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値", "en":"Cumulative amounts of electric energy measurement value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xE2"] },
            "note":{"ja":"0xE2の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE2"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量単位", "en":"Cumulative amounts of electric energy unit"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値履歴１", "en":"Cumulative amounts of electric energy measurement log 1"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":4,
                "minItems":48,
                "maxItems":48,
                "items":{ "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xE2"] }
            }
        }
    }
},
"0x0281":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"水流量メータ", "en":"Water flow meter"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水流量メータ区分", "en":"Water flow meter classification"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"上水", "en":"running water"}},
                    {"edt":"0x31", "state":{"ja":"中水", "en":"recycled water"}},
                    {"edt":"0x32", "state":{"ja":"下水", "en":"sewage water"}},
                    {"edt":"0x33", "state":{"ja":"その他", "en":"other water"}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"所有者区分", "en":"Owner classification"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"指定なし", "en":"Not specified"}},
                    {"edt":"0x31", "state":{"ja":"事業体", "en":"Public waterworks company"}},
                    {"edt":"0x32", "state":{"ja":"民間会社", "en":"Private sector company"}},
                    {"edt":"0x33", "state":{"ja":"個人", "en":"Individual"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算水流量計測値", "en":"Measured Cumulative amount of flowing water"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "coefficient":["0xE1"] },
            "note":{"ja":"0xE1の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE1"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算水流量計測値単位", "en":"Unit for measured Cumulative amounts of flowing water"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x05", "numericValue":0.00001},
                    {"edt":"0x06", "numericValue":0.000001}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算水流量計測値履歴", "en":"Historical data of measured cumulative amounts of flowing water"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":4,
                "minItems":48,
                "maxItems":48,
                "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "multipleOf":0.001, "coefficient":["0xE1"] }
            },
            "note":{"ja":"0xE1の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE1"}
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検針データ異常検知状態", "en":"Detection of abnormal value in metering data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"セキュリティデータ情報", "en":"Security data information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ID番号設定", "en":"ID number setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{"ja":"ASCII code。初期値は '000000' ", "en":"ASCII code. Itinital value is '000000' "}
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検定満期情報", "en":"Verification expiration information"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" },
            "note":{"ja":"ASCIIコード、YYYYMM", "en":"ASCII code, YYYYMM."}
        }
    }
},
"0x0282":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ガスメータ", "en":"Gas meter"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Cumulative amount of gas consumption measurement value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "multipleOf":0.001 }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値履歴", "en":"Cumulative amounts of gas consumption measurement log"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":4,
                "minItems":48,
                "maxItems":48,
                "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "multipleOf":0.001 }
            }
        }
    }
},
"0x0283":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"LPガスメータ", "en":"LP gas meter"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"供給圧力データ最大値", "en":"Maximum value of supply pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"供給圧力データ最小値", "en":"Minimum value of supply pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"供給圧力データ現在値", "en":"Current value of supply pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"閉塞圧力データ最大値", "en":"Maximum value of block pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"閉塞圧力データ最小値", "en":"Minimum value of block pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"閉塞圧力データ現在値", "en":"Current value of block pressure data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kPa", "multipleOf":0.01 }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"閉塞圧力・供給圧力異常日回数情報", "en":"Number of block pressure/supply pressure error days:times"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xD7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"テスト発呼設定", "en":"Test call setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検針データ積算ガス消費量計測値１", "en":"Cumulative amount of gas consumption of metering data 1"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99999999", "unit":"m3", "multipleOf":0.0001 },
            "note":{"ja":"0xE0または0xE1のいずれかを必須", "en":"Either 0xE0 or 0xE1 is required."}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検針データ積算ガス消費量計測値２", "en":"Cumulative amount of gas consumption of metering data 2"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99999999", "unit":"m3", "multipleOf":0.001 },
            "note":{"ja":"0xE0または0xE1のいずれかを必須", "en":"Either 0xE0 or 0xE1 is required."}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検針データ異常検知状態", "en":"Error detection status of metering data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"セキュリティデータ情報１", "en":"Security data 1"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"セキュリティデータ情報２", "en":"Security data 2"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"センター弁遮断状態", "en":"Center valve shut-off status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"センター弁遮断復帰許可状態", "en":"Center valve shut-off recovery permission setting status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"緊急弁遮断状態", "en":"Emergency valve shut-off status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"遮断弁開閉状態", "en":"Shut-off valve open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル", "en":"Residual volume control warning"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x31", "state":{"ja":"残量管理警告レベル１", "en":"Residual volume control warning level 1"}},
                    {"edt":"0x32", "state":{"ja":"残量管理警告レベル２", "en":"Residual volume control warning level 2"}},
                    {"edt":"0x33", "state":{"ja":"残量管理警告レベル３", "en":"Residual volume control warning level 3"}},
                    {"edt":"0x42", "state":{"ja":"残量管理警告無し", "en":"No residual volume control warning"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル設定値１", "en":"Set value of residual volume control warning level 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル設定値２", "en":"Set value of residual volume control warning level 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル設定値３", "en":"Set value of residual volume control warning level 3"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"微少漏洩タイマ値（ガス流量継続）", "en":"Slight leak timer value (gas flow rate continuation)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"day" }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"微少漏洩タイマ値（圧力上昇無し）", "en":"Slight leak timer value (without pressure increase)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"day" }
        },
        "0xEF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"遮断理由履歴情報", "en":"Shut-off reason log"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        }
    }
},
"0x0287":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"分電盤メータリング", "en":"Power distribution board"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"主幹定格容量", "en":"Master rated capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"A" }
        },
        "0xB1":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル数（片方向）", "en":"Number of measurement channel(simplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-252" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測チャンネル範囲指定（片方向）",
                "en":"Channel range specification for cumulative amount of electric power consumption measurement(simplex)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測値リスト（片方向）",
                "en":"Measured cumulative amount of electric power consumption list(simplex)"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xB2",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "maxItems":60,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh" },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xB2",
                "en":"Atomic operation with EPC=0xB2"
            }
        },
        "0xB4":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測チャンネル範囲指定（片方向）", "en":"Channel range specification for instataneous current measurement (simplex)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測値リスト（片方向）", "en":"Measured instantaneous current list(simplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xB4",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "maxItems":60,
                            "items":{
                                "type":"object",
                                "properties":[
                                    {
                                        "name":"rPhase",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                                {
                                                    "type":"state",
                                                    "size":2,
                                                    "enum":[{"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "name":"tPhase",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                                {
                                                    "type":"state",
                                                    "size":2,
                                                    "enum":[{"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }    
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xB4",
                "en":"Atomic operation with EPC=0xB4"
            }
        },
        "0xB6":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"瞬時電力計測チャンネル範囲指定（片方向）",
                "en":"Channel range specification for instantaneous power consumption measurement(simplex)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB7":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値リスト（片方向）", "en":"Measured instantaneous power consumption list(simplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xB6",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "maxItems":60,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_-2147483647-2147483645", "unit":"W" },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0x7FFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xB6",
                "en":"Atomic operation with EPC=0xB6"
            }
        },
        "0xB8":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル数（双方向）", "en":"Number of measurement channels(duplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-252" },
                    { "$ref":"#/definitions/state_Undefined-FD" }
                ]
            }
        },
        "0xB9":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測チャンネル範囲指定（双方向）",
                "en":"Channel range specification for cumulative amount of electric power consumption measurement(duplex)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBA":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値リスト（双方向）", "en":"Measured cumulative amount of electric power consumption list(duplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xB9",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":8,
                            "maxItems":30,
                            "items":{
                                "type":"object",
                                "properties":[
                                    {
                                        "name":"normal",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_0-99999999", "unit":"kWh" },
                                                {
                                                    "type":"state",
                                                    "size":4,
                                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "name":"reverse",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_0-99999999", "unit":"kWh" },
                                                {
                                                    "type":"state",
                                                    "size":4,
                                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xB9",
                "en":"Atomic operation with EPC=0xB9"
            }
        },
        "0xBB":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"瞬時電流計測チャンネル範囲指定（双方向）",
                "en":"Channel range specification for instantaneous current measurement(duplex)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBC":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測値リスト（双方向）", "en":"Measured instantaneous current list(duplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xBB",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "maxItems":60,
                            "items":{
                                "type":"object",
                                "properties":[
                                    {
                                        "name":"rPhase",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                                {
                                                    "type":"state",
                                                    "size":2,
                                                    "enum":[{"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "name":"tPhase",
                                        "element":{
                                            "oneOf":[
                                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                                {
                                                    "type":"state",
                                                    "size":2,
                                                    "enum":[{"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xBB",
                "en":"Atomic operation with EPC=0xBB"
            }
        },
        "0xBD":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"瞬時電力計測チャンネル範囲指定（双方向）",
                "en":"Channel range specification for instantaneous power consumption measurement(duplex)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値リスト（双方向）", "en":"Measured instantaneous power consumption list(duplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xBD",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"startChannel",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-252" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined-FD" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "maxItems":60,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_-2147483647-2147483645", "unit":"W" },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0x7FFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{
                "ja":"Atomic operation with EPC=0xBD",
                "en":"Atomic operation with EPC=0xBD"
            }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値（正方向）", "en":"Measured cumulative amount of electric energy(normal direction)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xC2"] },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                    }
                ]
            }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値（逆方向）", "en":"Measured cumulative amount of electric energy(reverse direction)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xC2"] },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                    }
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量単位", "en":"Unit of cumulative amounts of electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x0A", "numericValue":10},
                    {"edt":"0x0B", "numericValue":100},
                    {"edt":"0x0C", "numericValue":1000},
                    {"edt":"0x0D", "numericValue":10000}
                ]
            }
        },
        "0xC3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測値履歴（正方向）",
                "en":"Historical data of measured cumulative amounts of electric energy(normal direction)"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xC5",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "minItems":48,
                            "maxItems":48,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xC2"] },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"Atomic operation with EPC=0xC5", "en":"Atomic operation with EPC=0xC5"}
        },
        "0xC4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測値履歴（逆方向）",
                "en":"Historical data of measured cumulative amounts of electric energy(reverse direction)"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xC5",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "minItems":48,
                            "maxItems":48,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xC2"] },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"Atomic operation with EPC=0xC5", "en":"Atomic operation with EPC=0xC5"}
        },
        "0xC5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{
                "ja":"積算履歴収集日",
                "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99", "unit":"day" },
            "note":{"ja":"Atomic operation with EPC=0xC3 and 0xC4", "en":"Atomic operation with EPC=0xC3 and 0xC4"}
        },
        "0xC6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値", "en":"Measured instantaneous amounts of electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-2147483647-2147483645", "unit":"W" },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[
                            {"edt":"0x7FFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xC7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測値", "en":"Measured instantaneous currents"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"rPhase",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "name":"tPhase",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xC8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時電圧計測値", "en":"Measured instantaneous voltages"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"R-S(N)",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"V", "multipleOf":0.1 }
                    },
                    {
                        "name":"S(N)-T",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"V", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル１", "en":"Measurement channel 1"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル2", "en":"Measurement channel 2"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル3", "en":"Measurement channel 3"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル4", "en":"Measurement channel 4"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル5", "en":"Measurement channel 5"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル6", "en":"Measurement channel 6"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル7", "en":"Measurement channel 7"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル8", "en":"Measurement channel 8"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル9", "en":"Measurement channel 9"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xD9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル10", "en":"Measurement channel 10"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル11", "en":"Measurement channel 11"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル12", "en":"Measurement channel 12"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル13", "en":"Measurement channel 13"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル14", "en":"Measurement channel 14"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル15", "en":"Measurement channel 15"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xDF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル16", "en":"Measurement channel 16"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル17", "en":"Measurement channel 17"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル18", "en":"Measurement channel 18"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル19", "en":"Measurement channel 19"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル20", "en":"Measurement channel 20"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル21", "en":"Measurement channel 21"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル22", "en":"Measurement channel 22"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル23", "en":"Measurement channel 23"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル24", "en":"Measurement channel 24"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル25", "en":"Measurement channel 25"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル26", "en":"Measurement channel 26"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル27", "en":"Measurement channel 27"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル28", "en":"Measurement channel 28"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル29", "en":"Measurement channel 29"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル30", "en":"Measurement channel 30"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル31", "en":"Measurement channel 31"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        },
        "0xEF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル32", "en":"Measurement channel 32"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/object_PDB_01" }
        }
    }
},
"0x0288":{
    "oneOf":[
        {
            "validRelease":{"from":"A","to":"E"},
            "className":{"ja":"スマート電力量メータ", "en":"Smart electric energy meter"},
            "elProperties":{
                "0x80":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"動作状態", "en":""},
                    "accessRule":{"get":"required", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD0":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"電力区分", "en":""},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD1":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"所有者区分", "en":""},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD2":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"相線式設定状態", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD3":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"合成変成比", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD4":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"合成変成比の倍率", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD5":{
                    "oneOf":[
                        {
                            "validRelease":{"from":"A", "to":"A"},
                            "propertyName":{"ja":"計器認定番号", "en":""},
                            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/raw_10" }
                        },
                        {
                            "validRelease":{"from":"B", "to":"E"},
                            "propertyName":{"ja":"計器認定番号", "en":""},
                            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                            "data":{ "$ref":"#/definitions/raw_10" }
                        }
                    ]
                },
                "0xD6":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"検定満了年月", "en":""},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_6" }
                },
                "0xD7":{
                    "validRelease":{"from":"B", "to":"E"},
                    "propertyName":{"ja":"積算電力量有効桁数", "en":""},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE0":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算電力量計測値（正方向）", "en":""},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE1":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算電力量単位（正逆方向）", "en":""},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE2":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算電力量計測値履歴１（正方向）", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_194" }
                },
                "0xE3":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算電力量計測値（逆方向）", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE4":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算電力量計測値履歴１（逆方向）", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_194" }
                },
                "0xE5":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"積算履歴収集日１", "en":""},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE7":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"瞬時電力計測値", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE8":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"瞬時電流計測値", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE9":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"瞬時電圧計測値", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xEA":{
                    "validRelease":{"from":"B", "to":"E"},
                    "propertyName":{"ja":"定時積算電力量計測値（正方向）", "en":""},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_11" }
                },
                "0xEB":{
                    "validRelease":{"from":"B", "to":"E"},
                    "propertyName":{"ja":"定時積算電力量計測値（逆方向）", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_11" }
                }
            }
        },
        {
            "validRelease":{"from":"F", "to":"latest"},
            "className":{"ja":"低圧スマート電力量メータ", "en":"Low-voltage smart electric energy meter"},
            "elProperties":{
                "0xD3":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"係数", "en":"Coefficient"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-999999" }
                },
                "0xD7":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"積算電力量有効桁数", "en":"Number of effective digits for cumulative amounts of electric energy"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_1-8" }
                },
                "0xE0":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"積算電力量計測値（正方向計測値）", "en":"Measured cumulative amount of electric energy(normal direction)"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                            {
                                "type":"state",
                                "size":4,
                                "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                            }
                        ]
                    }
                },
                "0xE1":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"積算電力量単位（正方向、逆方向計測値）", "en":"Unit for cumulative amounts of electric energy(normal and reverse directions)"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"numericValue",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "numericValue":1},
                            {"edt":"0x01", "numericValue":0.1},
                            {"edt":"0x02", "numericValue":0.01},
                            {"edt":"0x03", "numericValue":0.001},
                            {"edt":"0x04", "numericValue":0.0001},
                            {"edt":"0x0A", "numericValue":10},
                            {"edt":"0x0B", "numericValue":100},
                            {"edt":"0x0C", "numericValue":1000},
                            {"edt":"0x0D", "numericValue":10000}
                        ]
                    }
                },
                "0xE2":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算電力量計測値履歴1（正方向計測値）",
                        "en":"Historical data of measured cumulative amounts of electric energy 1(normal direction)"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "atomic":"0xE5",
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"day",
                                "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                            },
                            {
                                "name":"energy",
                                "element":{
                                    "type":"array",
                                    "itemSize":4,
                                    "minItems":48,
                                    "maxItems":48,
                                    "items":{
                                        "oneOf":[
                                            { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                            {
                                                "type":"state",
                                                "size":4,
                                                "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    "note":{"ja":"Atomic operation with EPC=0xE5", "en":"Atomic operation with EPC=0xE5"}
                },
                "0xE3":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算電力量計測値（逆方向計測値）",
                        "en":"Measured cumulative amounts of electric energy(reverse direction)"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                            {
                                "type":"state",
                                "size":4,
                                "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                            }
                        ]
                    }
                },
                "0xE4":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算電力量計測値履歴1（逆方向計測値）",
                        "en":"Historical data of measured cumulative amounts of electric energy 1(reverse direction)"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "atomic":"0xE5",
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"day",
                                "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                            },
                            {
                                "name":"energy",
                                "element":{
                                    "type":"array",
                                    "itemSize":4,
                                    "minItems":48,
                                    "maxItems":48,
                                    "items":{
                                        "oneOf":[
                                            { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                            {
                                                "type":"state",
                                                "size":4,
                                                "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    "note":{"ja":"Atomic operation with EPC=0xE5", "en":"Atomic operation with EPC=0xE5"}
                },
                "0xE5":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算履歴収集日1",
                        "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved 1"
                    },
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-99", "unit":"day" },
                    "note":{"ja":"Atomic operation with EPC=0xE2 and 0xE4", "en":"Atomic operation with EPC=0xE2 and 0xE4"}
                },
                "0xE7":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"瞬時電力計測値", "en":"Measured instantaneous electric energy"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            { "$ref":"#/definitions/number_-2147483647-2147483645", "unit":"W" },
                            {
                                "type":"state",
                                "size":4,
                                "enum":[
                                    {"edt":"0x7FFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                ]
                            }
                        ]
                    }
                },
                "0xE8":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"瞬時電流計測値", "en":"Measured instantaneous currents"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"rPhase",
                                "element":{
                                    "oneOf":[
                                        { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                        {
                                            "type":"state",
                                            "size":2,
                                            "enum":[
                                                {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                            ]
                                        }
                                    ]
                                }
                            },
                            {
                                "name":"tPhase",
                                "element":{
                                    "oneOf":[
                                        { "$ref":"#/definitions/number_-32767-32765", "unit":"A", "multipleOf":0.1 },
                                        {
                                            "type":"state",
                                            "size":2,
                                            "enum":[
                                                {"edt":"0x7FFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "0xEA":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"定時積算電力量計測値（正方向計測値）",
                        "en":"Cumulative amounts of electric energy measured at fixed time(normal direction)"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"dateAndTime",
                                "element":{
                                    "type":"date-time"
                                }
                            },
                            {
                                "name":"energy",
                                "element":{
                                    "oneOf":[
                                        { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                        {
                                            "type":"state",
                                            "size":4,
                                            "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "0xEB":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"定時積算電力量計測値（逆方向計測値）",
                        "en":"Cumulative amounts of electric energy measured at fixed time(reverse direction)"
                    },
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"dateAndTime",
                                "element":{
                                    "type":"date-time"
                                }
                            },
                            {
                                "name":"energy",
                                "element":{
                                    "oneOf":[
                                        { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                        {
                                            "type":"state",
                                            "size":4,
                                            "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                "0xEC":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算電力量計測値履歴2（正方向、逆方向計測値）",
                        "en":"Historical data of measured cumulative amounts of electric energy 2(normal and reverse direction)"
                    },
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "atomic":"0xED",
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"dateAndTime",
                                "element":{ "type":"date-time", "size":6 }
                            },
                            {
                                "name":"numberOfDataSet",
                                "element":{ "$ref":"#/definitions/number_1-12" }
                            },
                            {
                                "name":"energy",
                                "element":{
                                    "type":"array",
                                    "itemSize":8,
                                    "maxItems":12,
                                    "items":{
                                        "type":"object",
                                        "properties":[
                                            {
                                                "name":"normalDirection",
                                                "element":{
                                                    "oneOf":[
                                                        { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                                        {
                                                            "type":"state",
                                                            "size":4,
                                                            "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "name":"reverseDirection",
                                                "element":{
                                                    "oneOf":[
                                                        { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xE1"] },
                                                        {
                                                            "type":"state",
                                                            "size":4,
                                                            "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    "note":{
                        "ja":"Atomic operation with EPC=0xED。電力量は最大12セット",
                        "en":"Atomic operation with EPC=0xED, energy is max. 12 sets of data"
                    }
                },
                "0xED":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{
                        "ja":"積算履歴収集日2",
                        "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved 2"
                    },
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"dateAndTime",
                                "element":{
                                    "type":"date-time",
                                    "size":6
                                }
                            },
                            {
                                "name":"numberOfDataSet",
                                "element":{ "$ref":"#/definitions/number_1-12" }
                            }
                        ]
                    },
                    "note":{
                        "ja":"分のデータは0x00（0分）または0x1E（30分）",
                        "en":"Data for minutes should be either 0x00(0 minute) or 0x1E(30 minutes)"
                    }
                }
            }
        }
    ]
},
"0x0289":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"スマートガスメータ", "en":"Smart gas meter"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"日時付積算ガス消費量計測値情報", "en":"Measured cumulative gas consumption information with date and time"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_11" },
            "note":{"ja":"EPC=0xD0または0xE2のどちらかの実装が必須", "en":"Either EPC=0xD0 or 0xE2 is required"}
        },
        "0xD1":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"ガス消費量履歴情報", "en":"Historical information of cumulative gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_109" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ガス区分設定", "en":"Gas meter classification setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"都市ガス", "en":"City gas"}},
                    {"edt":"0x31", "state":{"ja":"LPガス", "en":"LP gas"}},
                    {"edt":"0x32", "state":{"ja":"天然ガス", "en":"Natural gas"}},
                    {"edt":"0x33", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"所有者区分設定", "en":"Owner classification setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"指定無し", "en":"Not specified"}},
                    {"edt":"0x31", "state":{"ja":"都市ガス", "en":"City gas"}},
                    {"edt":"0x32", "state":{"ja":"LPガス", "en":"LP gas"}},
                    {"edt":"0x33", "state":{"ja":"民間会社", "en":"Private-sector company"}},
                    {"edt":"0x34", "state":{"ja":"個人", "en":"Indivisual"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Measured cumulative gas consumption"},
            "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "multipleOf":0.001, "unit":"m3" },
            "note":{"ja":"EPC=0xD0または0xE2のどちらかの実装が必須", "en":"Either EPC=0xD0 or 0xE2 is required"}
        },
        "0xE3":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"積算ガス消費量計測値単位", "en":"Unit for measured cumulative gas consumption"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"numericValue",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "numericValue":1},
                            {"edt":"0x01", "numericValue":0.1},
                            {"edt":"0x02", "numericValue":0.01},
                            {"edt":"0x03", "numericValue":0.001},
                            {"edt":"0x04", "numericValue":0.0001},
                            {"edt":"0x05", "numericValue":0.00001},
                            {"edt":"0x06", "numericValue":0.000001}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"B", "to":"latest"},
                    "propertyName":{"ja":"積算ガス消費量計測値単位", "en":"Unit for measured cumulative gas consumption"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"numericValue",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "numericValue":1},
                            {"edt":"0x01", "numericValue":0.1},
                            {"edt":"0x02", "numericValue":0.01},
                            {"edt":"0x03", "numericValue":0.001},
                            {"edt":"0x04", "numericValue":0.0001},
                            {"edt":"0x05", "numericValue":0.00001},
                            {"edt":"0x06", "numericValue":0.000001}
                        ]
                    }
                }
            ]
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量履歴情報", "en":"Historical data of measured cumulative gas consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_194" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算ガス消費量履歴収集日設定", "en":"Day setting for which the historical data of measured cumulative gas consumption is to be retrieved"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99" }
        },
        "0xE6":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"検針データ異常検知状態", "en":"Detection of abnormal value in metering data"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                {
                    "validRelease":{"from":"B", "to":"latest"},
                    "propertyName":{"ja":"検針データ異常検知状態", "en":"Detection of abnormal value in metering data"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                }
            ]
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"セキュリティデータ情報", "en":"Security data information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_10" }
        },
        "0xE8":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"A"},
                    "propertyName":{"ja":"センター弁遮断状態", "en":"Valve closure by the Center"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                },
                {
                    "validRelease":{"from":"B", "to":"latest"},
                    "propertyName":{"ja":"センター弁遮断状態", "en":"Valve closure by the Center"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
                }
            ]
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"センター弁遮断復帰許可状態", "en":"Permission from the Center to reopen the valve closed by the Center"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"緊急弁遮断状態", "en":"Emergency closure of shutoff valve"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"遮断弁開閉状態", "en":"Shutoff valve status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"遮断理由履歴情報", "en":"Historical data of shutoff reasons"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ID 番号設定", "en":"ID number setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検定満期設定", "en":"Verification expiration setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" }
        }
    }
},
"0x028A":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"高圧スマート電力量メータ", "en":"High-voltage smart electric energy meter"},
    "elProperties":{
        "0xC1":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"月間最大需要電力", "en":"Monthly maximum electric power demand"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-99999999", "unit":"kW" },
                    {
                        "type":"state",
                        "size":4,
                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                    }
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"累積最大需要電力", "en":"Cumulative electric power demand"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99999999", "unit":"kW" }
        },
        "0xC3":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"定時需要電力（30分平均電力）",
                "en":"Electric power demand at fixed time(30-minute average electric power)"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kW" },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xC4":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"需要電力有効桁数", "en":"Number of effective digits of electric power demand"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-8" }
        },
        "0xC5":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"需要電力単位", "en":"Unit of amounts of electric power"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x0A", "numericValue":10},
                    {"edt":"0x0B", "numericValue":100},
                    {"edt":"0x0C", "numericValue":1000},
                    {"edt":"0x0D", "numericValue":10000}
                ]
            }
        },
        "0xC6":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"需要電力計測値履歴", "en":"Historical data of measured electric power demand"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xE1",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                    },
                    {
                        "name":"power",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "minItems":48,
                            "maxItems":48,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kW" },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"Atomic operation with EPC=0xE1", "en":"Atomic operation with EPC=0xE1"}
        },
        "0xC7":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"累積最大需要電力単位", "en":"Unit of cumulative maximum electric power demand"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x0A", "numericValue":10},
                    {"edt":"0x0B", "numericValue":100},
                    {"edt":"0x0C", "numericValue":1000},
                    {"edt":"0x0D", "numericValue":10000}
                ]
            }
        },
        "0xCA":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"力測積算無効電力量（遅れ）計測値",
                "en":"Measurement data of reactive electric power factor consumption (lag) for power factor measurement"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"powerConsumption",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kvarh", "coefficient":["0xCD","0xD3","0xD4"] },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xCB":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"定時力測積算無効電力量（遅れ）計測値",
                "en":"Measurement data of cumulative amount of reactive electric power consumption(lag) at fixed time for power factor measurement"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"powerConsumption",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kvarh", "coefficient":["0xCD","0xD3","0xD4"] },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"力測積算無効電力量（遅れ）有効桁数",
                "en":"Number of effective digits for cumulative amount of reactive electric power consumption(lag) for power factor measurement"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-8" }
        },
        "0xCD":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"力測積算無効電力量（遅れ）単位",
                "en":"Unit of measurement data of cumulative amount of reactive electric power consumption(lag)"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x0A", "numericValue":10},
                    {"edt":"0x0B", "numericValue":100},
                    {"edt":"0x0C", "numericValue":1000},
                    {"edt":"0x0D", "numericValue":10000}
                ]
            }
        },
        "0xCE":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"力測積算無効電力量（遅れ）計測値履歴",
                "en":"Historical data of measurement data of cumulative amount of reactive electric power consumption(lag) for power factor measurement"
            },
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xE1",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                    },
                    {
                        "name":"powerConsumption",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "minItems":48,
                            "maxItems":48,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kvarh", "coefficient":["0xCD","0xD3","0xD4"] },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"Atomic operation with EPC=0xE1", "en":"Atomic operation with EPC=0xE1"}
        },
        "0xD3":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"係数", "en":"Coefficient"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999" }
        },
        "0xD4":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"係数の倍率", "en":"Multiplying factor for coefficient"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"確定日", "en":"Fixed date"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-31" }
        },
        "0xE1":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"積算履歴収集日",
                "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
            },
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99", "unit":"day" },
            "note":{"ja":"0:当日", "en":"0:current day"}
        },
        "0xE2":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"積算有効電力量計測値", "en":"Measured cumulative amount of active electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xD4","0xE6"] },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"定時積算有効電力量計測値", "en":"Cumulative amounts of active electric energy at fixed time"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xD4","0xE6"] },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"力測積算有効電力量計測値", "en":"Measurement data of cumulative amount of active electric energy for power factor measurement"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dateAndTime",
                        "element":{
                            "type":"date-time"
                        }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xD4","0xE6"] },
                                {
                                    "type":"state",
                                    "size":4,
                                    "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        "0xE5":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"積算有効電力量有効桁数",
                "en":"Number of effective digits for cumulative amount of active electric energy"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-8" }
        },
        "0xE6":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"積算有効電力量単位", "en":"Unit of cumulative amounts of effective electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x0A", "numericValue":10},
                    {"edt":"0x0B", "numericValue":100},
                    {"edt":"0x0C", "numericValue":1000},
                    {"edt":"0x0D", "numericValue":10000}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"積算有効電力量計測値履歴",
                "en":"Historical data of measured cumulative amount of active electric energy"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "atomic":"0xE1",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{ "$ref":"#/definitions/number_0-99_u16", "unit":"day" }
                    },
                    {
                        "name":"energy",
                        "element":{
                            "type":"array",
                            "itemSize":4,
                            "minItems":48,
                            "maxItems":48,
                            "items":{
                                "oneOf":[
                                    { "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xD3","0xD4","0xE6"] },
                                    {
                                        "type":"state",
                                        "size":4,
                                        "enum":[{"edt":"0xFFFFFFFE", "state":{"ja":"No data","en":"No data"}, "readOnly":true}]
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            "note":{"ja":"Atomic operation with EPC=0xE1", "en":"Atomic operation with EPC=0xE1"}
        }
    }
},
"0x028B":{
    "validRelease":{"from":"H", "to":"latest"},
    "className":{"ja":"灯油メータ", "en":"Kerosense meter"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量計測値", "en":"Measured cumulative amount of kerosene consumption"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"L", "multipleOf":0.1 }
        },
        "0xE2":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量計測値履歴", "en":"History of measured cumulative amounts of kerosene consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":48,
                "maxItems":48,
                "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"L", "multipleOf":0.1 }
            }
        }
    }
},
"0x028C":{
    "validRelease":{"from":"H", "to":"latest"},
    "className":{"ja":"スマート灯油メータ", "en":"Smart kerosense meter"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"日時付積算灯油消費量計測値情報", "en":"Measured cumulative kerosene consumption information with date and time"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_11" }
        },
        "0xD1":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"灯油消費量履歴情報", "en":"Historical information of cumulative kerosene consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_109" }
        },
        "0xE1":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"所有者区分設定", "en":"Owner category setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"指定無し", "en":"Not specified"}},
                    {"edt":"0x31", "state":{"ja":"灯油販売", "en":"Kerosene sales"}},
                    {"edt":"0x32", "state":{"ja":"民間会社", "en":"Private-sector company"}},
                    {"edt":"0x33", "state":{"ja":"個人", "en":"Indivisual"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量計測値", "en":"Measured cumulative kerosene consumption"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"L", "multipleOf":0.001 }
        },
        "0xE3":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量計測値単位", "en":"Units for measured cumulative kerosene consumption"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"numericValue",
                "size":1,
                "enum":[
                    {"edt":"0x00", "numericValue":1},
                    {"edt":"0x01", "numericValue":0.1},
                    {"edt":"0x02", "numericValue":0.01},
                    {"edt":"0x03", "numericValue":0.001},
                    {"edt":"0x04", "numericValue":0.0001},
                    {"edt":"0x05", "numericValue":0.00001},
                    {"edt":"0x06", "numericValue":0.000001}
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量履歴情報", "en":"Historical information of cumulative kerosene consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_194" }
        },
        "0xE5":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"積算灯油消費量履歴収集日設定", "en":"Collection date setting for history of cumulative kerosene consumption"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99" }
        },
        "0xE6":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"検針データ異常検知状態", "en":"Meter reading data abnormality detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE7":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"セキュリティデータ情報", "en":"Security data information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_10" }
        },
        "0xE8":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル", "en":"Residual volume control warning level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"レベル１", "en":"Level 1"}},
                    {"edt":"0x31", "state":{"ja":"レベル２", "en":"Level 2"}},
                    {"edt":"0x32", "state":{"ja":"レベル３", "en":"Level 3"}},
                    {"edt":"0x42", "state":{"ja":"無し", "en":"None"}}
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル１", "en":"Residual volume control warning level 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xEB":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル２", "en":"Residual volume control warning level 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xEC":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"残量管理警告レベル３", "en":"Residual volume control warning level 3"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xED":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"微少漏洩タイマ値（灯油流量継続）", "en":"Slight leak timer value (kerosene flow rate continuation)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253" }
        },
        "0xEE":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"ID 番号設定", "en":"ID number setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" }
        },
        "0xEF":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"検定満期設定", "en":"Verification expiration setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_6" }
        }
    }
},
"0x0290":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"一般照明", "en":"General lighting"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ予約設定", "en":"OFF timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"照度レベル設定", "en":"Illuminance Level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xB1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"光色設定", "en":"Light color setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LightColor-41-44" }
                },
                {
                    "validRelease":{"from":"C", "to":"latest"},
                    "propertyName":{"ja":"光色設定", "en":"Light color setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/state_LightColor-40-44" }
                }
            ]
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"照度レベル段数設定", "en":"Brightness level step setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"光色レベル段数設定", "en":"Light color step setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"設定可能レベル最大値", "en":"Maximum specifiable values"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"brightness",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"color",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    }
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯設定可能レベル最大値", "en":"Maximum value of settable level for night lighting"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"brightness",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"color",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    }
                ]
            }
        },
        "0xB6":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"点灯モード設定", "en":"Lighting mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"通常灯", "en":"Normal Lighting"}},
                    {"edt":"0x43", "state":{"ja":"常夜灯", "en":"Night Lighting"}},
                    {"edt":"0x45", "state":{"ja":"カラー灯", "en":"Color Lighting"}}
                ]
            }
        },
        "0xB7":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時照度レベル設定", "en":"Brightness level setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xB8":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時照度レベル段数設定", "en":"Brightness level step setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xB9":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時照度レベル設定", "en":"Brightness level setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xBA":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時照度レベル段数設定", "en":"Brightness level step setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xBB":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時光色設定", "en":"Light color setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LightColor-40-44" }
        },
        "0xBC":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時光色レベル段数設定", "en":"Light color level step setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xBD":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時光色設定", "en":"Light color setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LightColor-40-44" }
        },
        "0xBE":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時光色レベル段数設定", "en":"Light color level step setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xBF":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"自動モード時点灯モード状態", "en":"Lighting mode status in Auto mode"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x42", "state":{"ja":"通常灯", "en":"Normal Lighting"}},
                    {"edt":"0x43", "state":{"ja":"常夜灯", "en":"Night Lighting"}},
                    {"edt":"0x44", "state":{"ja":"消灯", "en":"Color Lighting"}},
                    {"edt":"0x45", "state":{"ja":"カラー灯", "en":"Color Lighting"}}
                ]
            }
        },
        "0xC0":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"RGB設定", "en":"RGB Setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"red",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"green",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"blue",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    }
                ]
            }
        }
    }
},
"0x0291":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"単機能照明", "en":"Mono functional lighting"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"照度レベル設定", "en":"Illuminance Level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        }
    }
},
"0x0292":{
    "validRelease":{"from":"K", "to":"latest"},
    "className":{"ja":"固体発光光源用照明", "en":"Lighting for solid light-emitting source"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"ON タイマ予約設定", "en":"ON timer reservation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0x91":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x94":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"OFF タイマ予約設定", "en":"OFF timer reservation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0x95":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定値", "en":"OFF timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB1":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"光源数", "en":"Number of light sources"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-253" }
        },
        "0xB2":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"光源動作状態リスト", "en":"List of the light source operation status"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_1-253" }
        },
        "0xB3":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"光源光出力設定値リスト", "en":"List of the light source optical output setting values"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-253" }
        },
        "0xB4":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"光源色温度設定値リスト", "en":"List of light source color temperature setting values"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-253" }
        }
    }
},
"0x02A0":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ブザー", "en":"Buzzar"},
    "elProperties":{
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"音発生設定", "en":"Sound generation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ブザー音種別設定", "en":"Buzzer sound type"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/level_31-8" }
        }
    }
},
"0x02A1":{
    "validRelease":{"from":"G", "to":"latest"},
    "className":{"ja":"電気自動車充電器", "en":"EV charger"},
    "elProperties":{
        "0xC5":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"定格充電能力", "en":"Rated charge capacity"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
        },
        "0xC7":{
            "oneOf":[
                {
                    "validRelease":{"from":"G", "to":"I"},
                    "propertyName":{"ja":"車両接続・充電可否状態", "en":"Vehicle connection and chargeable status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "atomic":"0xCD",
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFF", "state":{"ja":"不定", "en":"Undefined"}},
                            {"edt":"0x30", "state":{"ja":"車両未接続", "en":"Not Connected"}},
                            {"edt":"0x40", "state":{"ja":"車両接続・充電不可", "en":"Not Chargeable"}},
                            {"edt":"0x41", "state":{"ja":"車両接続・充電可", "en":"Chargeable"}}
                        ]
                    },
                    "note":{"ja":"Atomic operation with EPC=0xCD", "en":"Atomic operation with EPC=0xCD"}
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"車両接続・充電可否状態", "en":"Vehicle connection and chargeable status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "atomic":"0xCD",
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFF", "state":{"ja":"不定", "en":"Undefined"}},
                            {"edt":"0x30", "state":{"ja":"車両未接続", "en":"Not Connected"}},
                            {"edt":"0x40", "state":{"ja":"車両接続・充電不可", "en":"Not Chargeable"}},
                            {"edt":"0x41", "state":{"ja":"車両接続・充電可", "en":"Chargeable"}},
                            {"edt":"0x44", "state":{"ja":"車両接続・充電可否不明", "en":"Unknown of Chargeability"}}
                        ]
                    },
                    "note":{"ja":"Atomic operation with EPC=0xCD", "en":"Atomic operation with EPC=0xCD"}
                }
            ]
        },
        "0xC8":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"最小最大充電電力値", "en":"Minimum/maximum charging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
                    }
                ]
            }
        },
        "0xCA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"最小最大充電電流値", "en":"Minimum/maximum charging electric current"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"minValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    },
                    {
                        "name":"maxValue",
                        "element":{ "$ref":"#/definitions/number_0-32766", "unit":"A", "multipleOf":0.1 }
                    }
                ]
            }
        },
        "0xCC":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"充電器タイプ", "en":"Charger/Discharger type"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x11", "state":{"ja":"AC_CPLT", "en":"AC_CPLT"}},
                    {"edt":"0x12", "state":{"ja":"AC_HLC（充電のみ）", "en":"AC_HLC_Charge"}},
                    {"edt":"0x21", "state":{"ja":"DCタイプ_AA（充電のみ）", "en":"DC_AA_Charge"}},
                    {"edt":"0x31", "state":{"ja":"DCタイプ_BB（充電のみ）", "en":"DC_BB_Charge"}},
                    {"edt":"0x41", "state":{"ja":"DCタイプ_EE（充電のみ）", "en":"DC_EE_Charge"}},
                    {"edt":"0x51", "state":{"ja":"DCタイプ_FF（充電のみ）", "en":"DC_FF_Charge"}}
                ]
            }
        },
        "0xCD":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"車両接続確認", "en":"Vehicle Connection Confirmation"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[{"edt":"0x10", "state":{"ja":"接続確認", "en":"Connection confirmation"}}]
            }
        },
        "0xCE":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"車載電池の充電可能容量値", "en":"Chargeable capacity of vehicle mounted battery"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xCF":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"車載電池の充電可能残容量値", "en":"Remaining chargeable capacity of vehicle mounted battery"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xD0":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"車載電池の使用容量値1", "en":"Used capacity of vehicle mounted battery 1 "},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xD2":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"定格電圧", "en":"Rated voltage"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"V" }
        },
        "0xD3":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"瞬時充電電力計測値", "en":"Measured instantaneous charging/discharging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
        },
        "0xD8":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"積算充電電力量計測値", "en":"Measured cumulative amount of charging electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xD9":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"積算充電電力量リセット設定", "en":"Cumulative amount of charging electric energy reset setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xDA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x42", "state":{"ja":"充電", "en":"Charge"}},
                    {"edt":"0x44", "state":{"ja":"待機", "en":"standby"}},
                    {"edt":"0x47", "state":{"ja":"停止", "en":"Idle"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{
                "ja":"車載電池の電池残容量1",
                "en":"Remaining stored electricity of vehicle mounted battery1"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xE4":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{
                "ja":"車載電池の電池残容量3",
                "en":"Remaining stored electricity of vehicle mounted battery3"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE6":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"車両ID", "en":"Vehcle ID"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"dataSize",
                        "element":{ "$ref":"#/definitions/number_0-24" }
                    },
                    {
                        "name":"ids",
                        "element":{
                            "type":"array",
                            "itemSize":1,
                            "maxItems":24,
                            "items":{ "$ref":"#/definitions/number_0-255" }
                        }
                    }
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"充電量設定値", "en":"Charging amount setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xEB":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"充電電力設定値", "en":"Charging electric energy setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"W" }
        },
        "0xED":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"充電電流設定値", "en":"Charging current setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        }
    }
},
"0x02A2":{
    "validRelease":{"from":"H", "to":"latest"},
    "className":{"ja":"Household small wind turbine power generation", "en":"Household small wind turbine power generation"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"System interconnection status", "en":"System interconnection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"System-linked type", "en":"System-linked type"}},
                    {"edt":"0x01", "state":{"ja":"Independent type", "en":"Independent type"}},
                    {"edt":"0x02", "state":{"ja":"Hybrid type", "en":"Hybrid type"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Measured instantaneous amount of electricity Generated", "en":"Measured instantaneous amount of electricity Generated"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE1":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Measured cumulative amount of electricity generated", "en":"Measured cumulative amount of electricity generated"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xE2":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Resetting cumulative amount of electricity generated", "en":"Resetting cumulative amount of electricity generated"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xE3":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Measured cumulative amount of electricity sold", "en":"Measured cumulative amount of electricity sold"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xE4":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Resetting cumulative amount of electricity sold", "en":"Resetting cumulative amount of electricity sold"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/state_RESET" }
        },
        "0xE5":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Power generation output limit setting 1", "en":"Power generation output limit setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xE6":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Power generation output limit setting 2", "en":"Power generation output limit setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE7":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Limit setting for the amount of electricity sold", "en":"Limit setting for the amount of electricity sold"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE8":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Rated power", "en":"Rated power"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xEA":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Measured wind speed", "en":"Measured wind speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"m/s" }
        },
        "0xEB":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Rated wind speed", "en":"Rated wind speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"m/s" }
        },
        "0xEC":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Cut-in wind speed", "en":"Cut-in wind speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"m/s" }
        },
        "0xED":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Cut-out wind speed", "en":"Cut-out wind speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"m/s" }
        },
        "0xEE":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Extreme wind speed", "en":"Extreme wind speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253", "unit":"m/s" }
        },
        "0xEF":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"Braking status", "en":"Braking status"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        }
    }
},
"0x02A3":{
    "validRelease":{"from":"I", "to":"latest"},
    "className":{"ja":"照明システム", "en":"Lighting system"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"照度レベル設定", "en":"Illuminance level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"シーン制御設定", "en":"Scene control setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253" }
        },
        "0xC1":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"シーン制御設定可能数", "en":"Number that can assign scene control setting"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253" }
        }
    }
},
"0x02A4":{
    "validRelease":{"from":"J", "to":"latest"},
    "className":{"ja":"拡張照明システム", "en":"Extended lighting system"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"照度レベル設定", "en":"Illuminance level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xC0":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"シーン制御設定", "en":"Scene control setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-253" }
        },
        "0xC1":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"シーン制御設定可能数", "en":"Number that can assign scene control setting"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-253" }
        },
        "0xC2":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"電力消費率リスト", "en":"Power consumption rate list"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-253" }
        },
        "0xC3":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"全灯時消費電力", "en":"Power consumption when fully lighted"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC4":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"節電可能消費電力", "en":"Possible power savings"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC5":{
            "validRelease":{"from":"J", "to":"latest"},
            "propertyName":{"ja":"消費電力制限設定", "en":"Power consumption limit setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xC6":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"自動動作制御設定", "en":"Automatic operation controlling setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xC7":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"フェード制御変化時間設定", "en":"Fading control change time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-3600", "unit":"second" }
        }
    }
},
"0x02A5":{
    "validRelease":{"from":"K", "to":"latest"},
    "className":{"ja":"マルチ入力PCS", "en":"Multiple input PCS"},
    "elProperties":{
        "0x83":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_17" }
        },
        "0x97":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"現在時刻設定", "en":"Current time setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x98":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"現在年月日設定", "en":"Current date setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{ "type":"date-time", "size":4 }
        },
        "0xD0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"系統連系状態", "en":"System-interconnected type"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"系統連系（逆潮流可）", "en":"System-interconnected type(reverse power flow acceptable)"}},
                    {"edt":"0x01", "state":{"ja":"独立", "en":"Independent type"}},
                    {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値（正方向）", "en":"Measured cumulative amount of electric energy(normal direction)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xE3":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値（逆方向）", "en":"Measured cumulative amount of electric energy(reverse direction)"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xE7":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値", "en":"Measured instantaneous electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-2147483647-2147483645", "unit":"W" }
        },
        "0xE8":{
            "validRelease":{"from":"K", "to":"latest"},
            "propertyName":{"ja":"接続機器リスト", "en":"List of connected devices"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-31" }
        }
    }
},
"0x02A6":{
    "validRelease":{"from":"L", "to":"latest"},
    "className":{"ja":"ハイブリッド給湯器", "en":"Hybrid water heater"},
    "firstRelease":"L",
    "elProperties":{
        "0xB0":{
            "propertyName":{"ja":"沸き上げ自動設定", "en":"Automatic water heating setting"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動沸き上げ", "en":"Auto Heating"}},
                    {"edt":"0x43", "state":{"ja":"手動沸き上げ停止", "en":"Manual No Heating"}},
                    {"edt":"0x42", "state":{"ja":"手動沸き上げ", "en":"Manual Heating"}}
                ]
            }
        },
        "0xB2":{
            "propertyName":{"ja":"給湯沸き上げ中状態", "en":"Water heating status"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xB3":{
            "propertyName":{"ja":"暖房沸き上げ中状態", "en":"Heater status"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xB6":{
            "propertyName":{"ja":"補助熱源機給湯モード設定", "en":"Hot water supply mode setting for auxiliary heat source machine"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB7":{
            "propertyName":{"ja":"補助熱源機暖房モード設定", "en":"Heater mode setting for auxiliary heat source machine"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB8":{
            "propertyName":{"ja":"太陽光発電連携モード設定", "en":"Linkage mode setting for solar power generation"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"モード切", "en":"Mode off"}},
                    {"edt":"0x42", "state":{"ja":"自家消費", "en":"Household consumption"}},
                    {"edt":"0x43", "state":{"ja":"売電優先", "en":"Prioritizing electricity sales"}},
                    {"edt":"0x44", "state":{"ja":"経済性考慮", "en":"Economic efficiency"}}
                ]
            }
        },
        "0xB9":{
            "propertyName":{"ja":"太陽光発電利用時間", "en":"Solar power generations utilization time"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"Start time",
                        "element":{
                            "type":"time",
                            "size":2
                        }
                    },
                    {
                        "name":"End time",
                        "element":{
                            "type":"time",
                            "size":2
                        }
                    }
                ]
            }
        },
        "0xC3":{
            "propertyName":{"ja":"給湯中状態", "en":"Hot water supply status"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE1":{
            "propertyName":{"ja":"残湯量計測値", "en":"Measured amount of hot water remaining in tank"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xE2":{
            "propertyName":{"ja":"タンク容量値", "en":"Tank capacity"},
            "validRelease":{"from":"L", "to":"latest"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        }
    }
},
"0x03B2":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気ポット", "en":"Electric hot water pot"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓋開閉状態", "en":"Cover open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"湯切れ警告状態", "en":"No-waterwarning"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"沸騰設定", "en":"Boil-up setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"沸騰開始", "en":"Boil-up start"}},
                    {"edt":"0x42", "state":{"ja":"沸騰停止／保温", "en":"Boil-up stop/warmer"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"沸騰／保温モード設定", "en":"Boil-up/warmer mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"クエン酸洗浄", "en":"Citric acid cleaning"}},
                    {"edt":"0x42", "state":{"ja":"通常保温", "en":"normal warmer"}},
                    {"edt":"0x43", "state":{"ja":"省エネ保温", "en":"power-saving warmer"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"保温温度設定値", "en":"Set value of warmer temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100Celsius" }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"出湯状態", "en":"Hot water discharge status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ロック状態", "en":"Lock status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x03B7":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"冷凍冷蔵庫", "en":"Refrigerator"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"急速冷凍動作設定", "en":"Quick freeze function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"通常冷凍", "en":"normal operation"}},
                    {"edt":"0x42", "state":{"ja":"急速冷凍", "en":"quick freeze"}},
                    {"edt":"0x43", "state":{"ja":"急速冷凍待機", "en":"standby for quick freezing"}}
                ]
            }
        },
        "0xA1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"急速冷蔵動作設定", "en":"Quick refrigeration function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"通常冷蔵", "en":"normal operation"}},
                    {"edt":"0x42", "state":{"ja":"急速冷蔵", "en":"quick refrigeration"}},
                    {"edt":"0x43", "state":{"ja":"急速冷蔵待機", "en":"standby for quick refrigeration"}}
                ]
            }
        },
        "0xA4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製氷許可設定", "en":"Icemaker setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"製氷許可", "en":"enable icemaker"}},
                    {"edt":"0x42", "state":{"ja":"製氷禁止", "en":"disable icemaker"}},
                    {"edt":"0x43", "state":{"ja":"製氷一定時間禁止", "en":"temporarily disable icemaker"}}
                ]
            }
        },
        "0xA5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製氷動作状態", "en":"Icemaker operation status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xA6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製氷用給水タンク状態", "en":"Icemaker tank status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"水あり", "en":"Water in tank"}},
                    {"edt":"0x42", "state":{"ja":"水なし", "en":"No water"}}
                ]
            }
        },
        "0xA8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室加湿動作設定", "en":"Refrigerator compartment humidification function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xA9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室加湿動作設定", "en":"Vegetable compartment humidification function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xAD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"脱臭動作設定", "en":"Deodorization function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開放警告状態", "en":"Door open warning"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室ドア開閉状態", "en":"Refrigerator compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷凍室ドア開閉状態", "en":"Freezer compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"氷温室ドア開閉状態", "en":"Ice compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室ドア開閉状態", "en":"Vegetable compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"切換室ドア開閉状態", "en":"Multi-refrigerating mode compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室温度計測値", "en":"Measured refrigerator compartment temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷凍室温度計測値", "en":"Measured freezer compartment temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"氷温室温度計測値", "en":"Measured subzero-fresh compartment temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室温度計測値", "en":"Measured vegetable compartment temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"切替室室温度計測値", "en":"Measured multi-refrigerating mode compartment temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xD8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"圧縮機回転数レベル", "en":"Compressor rotation speed"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"maxLevel",
                        "element":{ "$ref":"#/definitions/number_1-255" }
                    },
                    {
                        "name":"level",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    }
                ]
            }
        },
        "0xDA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"消費電流計測値", "en":"Measured electric current consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"A", "multipleOf":0.1 }
        },
        "0xDC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"定格消費電力値", "en":"Rated power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"設定可能温度レベル最大値", "en":"Maximum allowable temperature setting level"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"refrigerator",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"freezer",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"ice",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"vegetable",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"multi",
                        "element":{ "$ref":"#/definitions/number_0-255" }
                    },
                    {
                        "name":"reserved",
                        "element":{ "$ref":"#/definitions/raw_3" }
                    }
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室温度設定値", "en":"Refrigerator compartment temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷凍室温度設定値", "en":"Freezer compartment temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"氷温室温度設定値", "en":"Ice temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室温度設定値", "en":"Vegetable compartment temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"切換室温度設定値", "en":"Multi-refrigerating mode compartment temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室温度レベル設定", "en":"Refrigerator compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷凍室温度レベル設定", "en":"Freezer compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"氷温室温度レベル設定", "en":"ice compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室温度レベル設定", "en":"Vegetable compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"切換室温度レベル設定", "en":"Multi-refrigerating mode compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        }
    }
},
"0x03B8":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"オーブンレンジ", "en":"Combination microwave oven"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱状態", "en":"Heating status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"初期状態", "en":"Initial state"}},
                    {"edt":"0x41", "state":{"ja":"運転中", "en":"Heating"}},
                    {"edt":"0x42", "state":{"ja":"一時停止中", "en":"Heating suspended"}},
                    {"edt":"0x43", "state":{"ja":"完了報知中", "en":"Reporting completion of heating cycle"}},
                    {"edt":"0x44", "state":{"ja":"設定中", "en":"Setting"}},
                    {"edt":"0x45", "state":{"ja":"予熱中", "en":"Preheating"}},
                    {"edt":"0x46", "state":{"ja":"予熱完了保温中", "en":"Preheat temperature maintenance"}},
                    {"edt":"0x47", "state":{"ja":"加熱途中報知一時停止中", "en":"Heating temporarily stopped for manual cooking action"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱設定", "en":"Heating setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"加熱開始・再開", "en":"Start/restart heating"}},
                    {"edt":"0x42", "state":{"ja":"加熱一時停止", "en":"Suspend heating"}},
                    {"edt":"0x43", "state":{"ja":"加熱停止", "en":"Stop heating"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動メニューコース設定", "en":"Automatic heating menu setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-254" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                        ]
                    }
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"オーブンモード設定", "en":"Oven mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"自動選択", "en":"Automatic selection"}},
                    {"edt":"0x41", "state":{"ja":"対流オーブン", "en":"Convection oven"}},
                    {"edt":"0x42", "state":{"ja":"熱風オーブン", "en":"Circulation oven"}},
                    {"edt":"0x43", "state":{"ja":"複合オーブン", "en":"Hybrid oven"}},
                    {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                ]
            }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"オーブン予熱設定", "en":"Oven preheating setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"予熱あり", "en":"With preheating"}},
                    {"edt":"0x42", "state":{"ja":"予熱なし", "en":"Without preheating"}},
                    {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                ]
            }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"発酵モード設定", "en":"Fermenting mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"自動選択", "en":"Automatic selection"}},
                    {"edt":"0x41", "state":{"ja":"対流発酵", "en":"Convection fermentation"}},
                    {"edt":"0x42", "state":{"ja":"熱風発酵", "en":"Circulation fermentation"}},
                    {"edt":"0x43", "state":{"ja":"複合発酵", "en":"Hybrid fermentation"}},
                    {"edt":"0x51", "state":{"ja":"電子レンジ発酵", "en":"Microwave fermentation"}},
                    {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱モード設定", "en":"Heating mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"電子レンジ加熱", "en":"Microwave heating"}},
                    {"edt":"0x42", "state":{"ja":"解凍", "en":"Defrosting"}},
                    {"edt":"0x43", "state":{"ja":"オーブン", "en":"Oven"}},
                    {"edt":"0x44", "state":{"ja":"グリル", "en":"Grill"}},
                    {"edt":"0x45", "state":{"ja":"トースト", "en":"Toaster"}},
                    {"edt":"0x46", "state":{"ja":"発酵", "en":"Fermenting"}},
                    {"edt":"0x47", "state":{"ja":"煮込み", "en":"Stewing"}},
                    {"edt":"0x48", "state":{"ja":"スチーム加熱", "en":"Steaming"}},
                    {"edt":"0x51", "state":{"ja":"電子レンジ２段加熱", "en":"Two stage microwave heating"}},
                    {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動加熱設定", "en":"Automatic heating setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Automatic"}},
                    {"edt":"0x42", "state":{"ja":"マニュアル", "en":"Manual"}},
                    {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動加熱レベル設定", "en":"Automatic heating level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-5" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFF", "state":{"ja":"未設定", "en":"undefined"}}
                        ]
                    }            
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"庫内温度設定値", "en":"Chamber temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0x8001", "state":{"ja":"自動設定", "en":"Automatic"}},
                            {"edt":"0x8002", "state":{"ja":"未設定", "en":"undefined"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"仕上がり温度設定値", "en":"Food temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-2732-32766", "unit":"Celsius", "multipleOf":0.1 },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0x8002", "state":{"ja":"未設定", "en":"undefined"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱時間設定値", "en":"Heating time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time"
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱残時間設定値", "en":"Remaining heating time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time"
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電子レンジ加熱出力設定値", "en":"Microwave heating power setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"途中報知パターン設定", "en":"Prompt message setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_8" }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"付属品設定", "en":"Accessories to combination microwave oven setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"表示文字列設定", "en":"Display character string setting"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/raw_40" }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電子レンジ2段加熱時間設定値", "en":"Two-stage microwave heating setting (duration)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"Heating1st",
                        "element":{
                            "type":"time"
                        }
                    },
                    {
                        "name":"Heating2nd",
                        "element":{
                            "type":"time"
                        }
                    }
                ]
            }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"電子レンジ2段加熱出力設定値", "en":"Two-stage microwave heating setting (heating power)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"Heating1st",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    },
                    {
                        "name":"Heating2nd",
                        "element":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
                    }
                ]
            }
        }
    }
},
"0x03B9":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"クッキングヒータ", "en":"Cooking heater"},
    "elProperties":{
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                          "oneOf":[
                            { "type":"time", "size":3 },
                            {
                              "type":"state",
                              "size":3,
                              "enum":[{"edt":"0xFFFFFF", "state":{"ja":"未設定", "en":"undefined"}}]
                            }
                          ]  
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                          "oneOf":[
                            { "type":"time", "size":3 },
                            {
                              "type":"state",
                              "size":3,
                              "enum":[{"edt":"0xFFFFFF", "state":{"ja":"未設定", "en":"undefined"}}]
                            }
                          ]  
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                          "oneOf":[
                            { "type":"time", "size":3 },
                            {
                              "type":"state",
                              "size":3,
                              "enum":[{"edt":"0xFFFFFF", "state":{"ja":"未設定時", "en":"undefined"}}]
                            }
                          ]  
                        }
                    },
                    {
                        "name":"roaster",
                        "element":{
                          "oneOf":[
                            { "type":"time", "size":3 },
                            {
                              "type":"state",
                              "size":3,
                              "enum":[{"edt":"0xFFFFFF", "state":{"ja":"未設定時", "en":"undefined"}}]
                            }
                          ]  
                        }
                    }
                ]
            }
        },
        "0xA1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"チャイルドロック設定", "en":"Child lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}}
                ]
            }
        },
        "0xA2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ラジエントヒータロック設定", "en":"Radiant heater lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"OFF", "en":"OFF"}},
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"過熱状態", "en":"heating Status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"待機", "en":"standby"}},
                                {"edt":"0x41", "state":{"ja":"運転", "en":"heating"}},
                                {"edt":"0x42", "state":{"ja":"一時停止", "en":"pause"}},
                                {"edt":"0x50", "state":{"ja":"加熱禁止", "en":"heatingProhibited"}},
                                {"edt":"0xFF", "state":{"ja":"不明", "en":"unknown"}}
                            ]
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"待機", "en":"standby"}},
                                {"edt":"0x41", "state":{"ja":"運転", "en":"heating"}},
                                {"edt":"0x42", "state":{"ja":"一時停止", "en":"pause"}},
                                {"edt":"0x50", "state":{"ja":"加熱禁止", "en":"heatingProhibited"}},
                                {"edt":"0xFF", "state":{"ja":"不明", "en":"unknown"}}
                            ]
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"待機", "en":"standby"}},
                                {"edt":"0x41", "state":{"ja":"運転", "en":"heating"}},
                                {"edt":"0x42", "state":{"ja":"一時停止", "en":"pause"}},
                                {"edt":"0x50", "state":{"ja":"加熱禁止", "en":"heatingProhibited"}},
                                {"edt":"0xFF", "state":{"ja":"不明", "en":"unknown"}}
                            ]
                        }
                    },
                    {
                        "name":"roaster",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"待機", "en":"standby"}},
                                {"edt":"0x41", "state":{"ja":"運転", "en":"heating"}},
                                {"edt":"0x42", "state":{"ja":"一時停止", "en":"pause"}},
                                {"edt":"0x50", "state":{"ja":"加熱禁止", "en":"heatingProhibited"}},
                                {"edt":"0xFF", "state":{"ja":"不明", "en":"unknown"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱設定", "en":"Heating setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"加熱停止", "en":"Stop heating"}},
                                {"edt":"0x41", "state":{"ja":"加熱開始・再開", "en":"Start/resume heating"}},
                                {"edt":"0x42", "state":{"ja":"加熱一時停止", "en":"Temporarily stop heating"}},
                                {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                            ]
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"加熱停止", "en":"Stop heating"}},
                                {"edt":"0x41", "state":{"ja":"加熱開始・再開", "en":"Start/resume heating"}},
                                {"edt":"0x42", "state":{"ja":"加熱一時停止", "en":"Temporarily stop heating"}},
                                {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                            ]
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"加熱停止", "en":"Stop heating"}},
                                {"edt":"0x41", "state":{"ja":"加熱開始・再開", "en":"Start/resume heating"}},
                                {"edt":"0x42", "state":{"ja":"加熱一時停止", "en":"Temporarily stop heating"}},
                                {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                            ]
                        }
                    },
                    {
                        "name":"roaster",
                        "element":{
                            "type":"state",
                            "size":1,
                            "enum":[
                                {"edt":"0x40", "state":{"ja":"加熱停止", "en":"Stop heating"}},
                                {"edt":"0x41", "state":{"ja":"加熱開始・再開", "en":"Start/resume heating"}},
                                {"edt":"0x42", "state":{"ja":"加熱一時停止", "en":"Temporarily stop heating"}},
                                {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                            ]
                        }
                    }
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"一括停止設定", "en":"All Stop setting"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[ {"edt":"0x40", "state":{"ja":"一括加熱停止", "en":"Stop all heating"}} ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"コンロ加熱モード設定", "en":"Heating modes of stoves setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                          "type":"state",
                          "size":1,
                          "enum":[
                            {"edt":"0x41", "state":{"ja":"加熱出力制御モード", "en":"Heating power control mode"}},
                            {"edt":"0x42", "state":{"ja":"天ぷら（揚げ物）", "en":"Deep frying"}},
                            {"edt":"0x43", "state":{"ja":"湯沸かし", "en":"Water heating"}},
                            {"edt":"0x44", "state":{"ja":"炊飯", "en":"Rice boiling"}},
                            {"edt":"0x45", "state":{"ja":"炒め物", "en":"Stir-frying"}},
                            {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                          ]
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                          "type":"state",
                          "size":1,
                          "enum":[
                            {"edt":"0x41", "state":{"ja":"加熱出力制御モード", "en":"Heating power control mode"}},
                            {"edt":"0x42", "state":{"ja":"天ぷら（揚げ物）", "en":"Deep frying"}},
                            {"edt":"0x43", "state":{"ja":"湯沸かし", "en":"Water heating"}},
                            {"edt":"0x44", "state":{"ja":"炊飯", "en":"Rice boiling"}},
                            {"edt":"0x45", "state":{"ja":"炒め物", "en":"Stir-frying"}},
                            {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                          ]
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                          "type":"state",
                          "size":1,
                          "enum":[
                            {"edt":"0x41", "state":{"ja":"加熱出力制御モード", "en":"Heating power control mode"}},
                            {"edt":"0x42", "state":{"ja":"天ぷら（揚げ物）", "en":"Deep frying"}},
                            {"edt":"0x43", "state":{"ja":"湯沸かし", "en":"Water heating"}},
                            {"edt":"0x44", "state":{"ja":"炊飯", "en":"Rice boiling"}},
                            {"edt":"0x45", "state":{"ja":"炒め物", "en":"Stir-frying"}},
                            {"edt":"0xFF", "state":{"ja":"設定なし", "en":"undefined"}}
                          ]
                        }
                    }
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱温度設定値", "en":"Heating temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{ "$ref":"#/definitions/number_50-250", "unit":"Celsius" }
                    },
                    {
                        "name":"rightStove",
                        "element":{ "$ref":"#/definitions/number_50-250", "unit":"Celsius" }
                    },
                    {
                        "name":"farSideStove",
                        "element":{ "$ref":"#/definitions/number_50-250", "unit":"Celsius" }
                    }
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱出力設定", "en":"Heating power setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-10000", "unit":"W" },
                                { "$ref":"#/definitions/level_3000-17" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4008", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}},
                                        {"edt":"0xFFFF", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-10000", "unit":"W" },
                                { "$ref":"#/definitions/level_3000-17" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4008", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}},
                                        {"edt":"0xFFFF", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-10000", "unit":"W" },
                                { "$ref":"#/definitions/level_3000-17" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4008", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}},
                                        {"edt":"0xFFFF", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        "name":"roaster",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_0-10000", "unit":"W" },
                                { "$ref":"#/definitions/level_3000-17" },
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4008", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}},
                                        {"edt":"0xFFFF", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        }
    }
},
"0x03BB":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"炊飯器", "en":"Rice cooker"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炊飯予約設定", "en":"Rice cooking reservation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炊飯予約設定時刻設定値", "en":"Set value of rice cooking reservation setting time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炊飯予約設定相対時間設定値", "en":"Set value of rice cooking reservation setting relative time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓋開閉状態", "en":"Cover open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炊飯状態", "en":"Rice cooking status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"停止", "en":"Stop"}},
                    {"edt":"0x42", "state":{"ja":"予熱", "en":"Preheating"}},
                    {"edt":"0x43", "state":{"ja":"炊飯", "en":"Rice cooking"}},
                    {"edt":"0x44", "state":{"ja":"蒸らし", "en":"Steaming"}},
                    {"edt":"0x45", "state":{"ja":"炊飯完了", "Rice cooking completion":"aa"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"炊飯制御設定", "en":"Rice cooking control setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"炊飯開始・再開", "en":"Rice cooking start/restart"}},
                    {"edt":"0x42", "state":{"ja":"炊飯一時停止", "en":"Rice cooking suspension"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"保温設定", "en":"Warmer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"内なべ取り外し状態", "en":"Inner pot removal status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"蓋取り外し状態", "en":"Cover removal status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_YES-NO-4142" }
        }
    }
},
"0x03C5":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"洗濯機", "en":"Washing machine"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door/cover open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯設定", "en":"Washing machine setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"洗濯開始・再開", "en":" Start/restart the washing cycle"}},
                    {"edt":"0x42", "state":{"ja":"洗濯一時停止", "en":" Suspend the washing cycle"}},
                    {"edt":"0x43", "state":{"ja":"洗濯停止", "en":" Stop the washing cycle"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯遷移状態", "en":"Current stage of washing cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"洗い", "en":"Washing"}},
                    {"edt":"0x42", "state":{"ja":"すすぎ", "en":"Rinsing"}},
                    {"edt":"0x43", "state":{"ja":"脱水", "en":"Spin drying"}},
                    {"edt":"0x44", "state":{"ja":"一時停止", "en":"Suspended"}},
                    {"edt":"0x45", "state":{"ja":"洗濯完了・停止", "en":"The washing cycle stopped/completed"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯残り時間", "en":"Time remaining to complete washing cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"time" }
        }
    }
},
"0x03C6":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"衣類乾燥機", "en":"Cloth dryer"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"扉・蓋開閉状態", "en":"Door/cover open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥設定", "en":"Drying setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"乾燥開始・再開", "en":" Start/restart drying"}},
                    {"edt":"0x42", "state":{"ja":"乾燥一時停止", "en":" Suspend drying"}},
                    {"edt":"0x43", "state":{"ja":"乾燥停止", "en":" Stop drying"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥遷移状態", "en":"Drying status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"乾燥", "en":"Drying in progress"}},
                    {"edt":"0x42", "state":{"ja":"一時停止", "en":"Drying suspended"}},
                    {"edt":"0x43", "state":{"ja":"乾燥完了・一時停止", "en":"Drying stopped/completed"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥残り時間", "en":"Remaining drying time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"time" }
        }
    }
},
"0x03CE":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"業務用ショーケース", "en":"Commercial show case"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"冷却", "en":"Cooling"}},
                    {"edt":"0x42", "state":{"ja":"非冷", "en":"Non-cooling"}},
                    {"edt":"0x43", "state":{"ja":"霜取り", "en":"Defrosting"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xBD":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"吐出温度計測値", "en":"Measured value of discharge temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xCA":{
            "oneOf":[
                {
                    "validRelease":{"from":"F", "to":"H"},
                    "propertyName":{"ja":"グループ情報", "en":"Group information"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                {
                    "validRelease":{"from":"I", "to":"latest"},
                    "propertyName":{"ja":"グループ情報", "en":"Group information"},
                    "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                }
            ]
        },
        "0xD0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"ショーケースタイプ情報", "en":"Showcase type information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ノンフロンインバータ（CO2）", "en":"Non-fluorocarbon inverter"}},
                    {"edt":"0x42", "state":{"ja":"インバータ", "en":"Inverter"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"ドアタイプ情報", "en":"Door type information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"Open", "en":"Open"}},
                    {"edt":"0x42", "state":{"ja":"Close", "en":"Close"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"ショーケース構成情報", "en":"Showcase configuration information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"別置型", "en":"Separate type"}},
                    {"edt":"0x42", "state":{"ja":"内蔵型", "en":"Built-in type"}}
                ]
            }
        },
        "0xD3":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"ショーケース形状情報", "en":"Showcase shape information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"箱型", "en":"Box type"}},
                    {"edt":"0x42", "state":{"ja":"卓上型", "en":"Desktop type"}},
                    {"edt":"0x43", "state":{"ja":"三面ガラス式", "en":"Triple glass type"}},
                    {"edt":"0x44", "state":{"ja":"四面ガラス式", "en":"Quadruple glass type"}},
                    {"edt":"0x45", "state":{"ja":"リーチイン", "en":"Reach-in"}},
                    {"edt":"0x46", "state":{"ja":"ガラストップ", "en":"Glass top type"}},
                    {"edt":"0x47", "state":{"ja":"多段型オープン（天井吹出形）", "en":"Multistage open (ceiling blowoff type)"}},
                    {"edt":"0x48", "state":{"ja":"多段型オープン（背面吹出形）", "en":"ultistageopen (backside blowoff type)"}},
                    {"edt":"0x49", "state":{"ja":"平型", "en":"Flat type"}},
                    {"edt":"0x4A", "state":{"ja":"ウォークイン", "en":"Walk-in type"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xD4":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫内温度帯情報", "en":"Temperature range information for inside the case"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"冷蔵", "en":"Refrigeration"}},
                    {"edt":"0x42", "state":{"ja":"冷凍", "en":"Freezing"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"庫内照明動作状態", "en":"Internal lighting operation status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xE1":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"庫外照明動作状態", "en":"External lighting operation status"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xE2":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"コンプレッサ動作状態", "en":"Compressor operation status"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xE3":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"庫内温度計測値", "en":"Measured value of internal temperature"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xE4":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"冷凍能力値", "en":"Freezing capability value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE5":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"霜取りヒータ消費電力", "en":"Defrosting heater power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE6":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"ファンモータ消費電力", "en":"Fan motor power consumption"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
        },
        "0xE7":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"ヒーターモード", "en":"Heater mode"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xEB":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫内照明タイプ", "en":"Type of lighting inside the showcase"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"蛍光灯", "en":"Fluorescent lights"}},
                    {"edt":"0x42", "state":{"ja":"LED", "en":"LED"}},
                    {"edt":"0x43", "state":{"ja":"照明無し", "en":"No lighting"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xEC":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫外照明タイプ", "en":"Type of lighting outside the case"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"蛍光灯", "en":"Fluorescent lights"}},
                    {"edt":"0x42", "state":{"ja":"LED", "en":"LED"}},
                    {"edt":"0x43", "state":{"ja":"照明無し", "en":"No lighting"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"Other"}}
                ]
            }
        },
        "0xED":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫内照明照度レベル設定", "en":"Illuminance level setting of lighting inside the showcase"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xEE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫外照明照度レベル設定", "en":"Illuminance level setting of lighting outside the case"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xEF":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"庫内温度設定値", "en":"Temperature setting of inside the case"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-126Celsius" }
        }
    }
},
"0x03D3":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"洗濯乾燥機", "en":"Washer and dryer"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"扉・蓋開閉状態", "en":"Door/cover open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯・乾燥設定", "en":"Washer and dryer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"洗濯乾燥開始・再開／洗濯乾燥運転中", "en":"Start/restart or in progress"}},
                    {"edt":"0x42", "state":{"ja":"洗濯乾燥一時停止", "en":"Suspend"}},
                    {"edt":"0x43", "state":{"ja":"洗濯乾燥停止", "en":"Stop"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥コース設定1", "en":"Washer and dryer cycle setting 1 (Note 1)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x21", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x22", "state":{"ja":"静音", "en":"silent"}},
                    {"edt":"0x23", "state":{"ja":"汚れ大", "en":"heavily soiled clothes"}},
                    {"edt":"0x24", "state":{"ja":"しつこい汚れ", "en":"hard-to-remove stains"}},
                    {"edt":"0x25", "state":{"ja":"つけおき", "en":"presoaking"}},
                    {"edt":"0x26", "state":{"ja":"毛布", "en":"blankets"}},
                    {"edt":"0x27", "state":{"ja":"ソフト", "en":"soft"}},
                    {"edt":"0x28", "state":{"ja":"ドライ", "en":"dry"}},
                    {"edt":"0x29", "state":{"ja":"清潔すすぎ", "en":"clean rinsing"}},
                    {"edt":"0x2A", "state":{"ja":"アイロン／Yシャツ", "en":"ironing/business shirts"}},
                    {"edt":"0x2B", "state":{"ja":"吊り干し", "en":"hang drying"}},
                    {"edt":"0x2C", "state":{"ja":"厚物", "en":"thick clothes"}},
                    {"edt":"0x2D", "state":{"ja":"除菌", "en":"disinfection"}},
                    {"edt":"0x2E", "state":{"ja":"油汚れ", "en":"oil stains"}},
                    {"edt":"0x2F", "state":{"ja":"メモリー", "en":"memory"}},
                    {"edt":"0x30", "state":{"ja":"省洗剤", "en":"detergent saving"}},
                    {"edt":"0x31", "state":{"ja":"汚れ小", "en":"lightly soiled clothes"}},
                    {"edt":"0x32", "state":{"ja":"少量短時間", "en":"quick wash of small amount of laundry"}},
                    {"edt":"0x61", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x62", "state":{"ja":"静音", "en":"silent"}},
                    {"edt":"0x63", "state":{"ja":"汚れ大", "en":"heavily soiled clothes"}},
                    {"edt":"0x64", "state":{"ja":"しつこい汚れ", "en":"hard-to-remove stains"}},
                    {"edt":"0x65", "state":{"ja":"つけおき", "en":"presoaking"}},
                    {"edt":"0x66", "state":{"ja":"毛布", "en":"blankets"}},
                    {"edt":"0x67", "state":{"ja":"ソフト", "en":"soft"}},
                    {"edt":"0x68", "state":{"ja":"ドライ", "en":"dry"}},
                    {"edt":"0x69", "state":{"ja":"清潔すすぎ", "en":"clean rinsing"}},
                    {"edt":"0x6A", "state":{"ja":"除菌", "en":"disinfection"}},
                    {"edt":"0x6B", "state":{"ja":"油汚れ", "en":"oil stains"}},
                    {"edt":"0x6C", "state":{"ja":"メモリー", "en":"memory"}},
                    {"edt":"0x6D", "state":{"ja":"省洗剤", "en":"detergent saving"}},
                    {"edt":"0x6E", "state":{"ja":"汚れ小", "en":"lightly soiled clothes"}},
                    {"edt":"0x6F", "state":{"ja":"少量短時間", "en":"quick wash of small amount of laundry"}},
                    {"edt":"0x7F", "state":{"ja":"槽洗浄", "en":"tank cleaning"}},
                    {"edt":"0xA1", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0xA2", "state":{"ja":"毛布", "en":"blankets"}},
                    {"edt":"0xA3", "state":{"ja":"ソフト", "en":"soft"}},
                    {"edt":"0xA4", "state":{"ja":"ドライ", "en":"dry"}},
                    {"edt":"0xA5", "state":{"ja":"アイロン／Yシャツ", "en":"ironing/business shirts"}},
                    {"edt":"0xA6", "state":{"ja":"吊り干し", "en":"hang drying"}},
                    {"edt":"0xA7", "state":{"ja":"厚物", "en":"thick clothes"}},
                    {"edt":"0xA8", "state":{"ja":"除菌", "en":"disinfection"}},
                    {"edt":"0xA9", "state":{"ja":"縮み低減", "en":"shrinkage minimization"}},
                    {"edt":"0xAA", "state":{"ja":"仕上げ", "en":"finishing"}},
                    {"edt":"0xAB", "state":{"ja":"静止乾燥", "en":"stationary drying"}},
                    {"edt":"0xAC", "state":{"ja":"時間指定", "en":"user definition of drying time"}},
                    {"edt":"0xAD", "state":{"ja":"衣類あたため", "en":"garment warming"}},
                    {"edt":"0xBF", "state":{"ja":"槽洗浄", "en":"tank cleaning"}}
                ]
            },
            "note":{
                "ja":"0x21-0x3F 洗濯乾燥コース、0x61-0x7F 洗濯コース、0xA1-0xBF 乾燥コース",
                "en":"0x21-0x3F wash and dry、0x61-0x7F wash、0xA1-0xBF dry"
            }
        },
        "0xD1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥コース設定2", "en":"Washer and dryer cycle setting 2 (Note 1)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x20", "state":{"ja":"洗濯なし", "en":"No washing"}},
                    {"edt":"0x21", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x22", "state":{"ja":"静音", "en":"silent"}},
                    {"edt":"0x23", "state":{"ja":"汚れ大", "en":"heavily soiled clothes"}},
                    {"edt":"0x24", "state":{"ja":"しつこい汚れ", "en":"hard-to-remove stains"}},
                    {"edt":"0x25", "state":{"ja":"つけおき", "en":"presoaking"}},
                    {"edt":"0x26", "state":{"ja":"毛布", "en":"blankets"}},
                    {"edt":"0x27", "state":{"ja":"ソフト", "en":"soft"}},
                    {"edt":"0x28", "state":{"ja":"ドライ", "en":"dry"}},
                    {"edt":"0x29", "state":{"ja":"清潔すすぎ", "en":"clean rinsing"}},
                    {"edt":"0x2D", "state":{"ja":"除菌", "en":"disinfection"}},
                    {"edt":"0x2E", "state":{"ja":"油汚れ", "en":"oil stains"}},
                    {"edt":"0x2F", "state":{"ja":"メモリー", "en":"memory"}},
                    {"edt":"0x30", "state":{"ja":"省洗剤", "en":"detergent saving"}},
                    {"edt":"0x31", "state":{"ja":"汚れ小", "en":"lightly soiled clothes"}},
                    {"edt":"0x32", "state":{"ja":"少量短時間", "en":"quick wash of small amount of laundry"}},
                    {"edt":"0x3F", "state":{"ja":"槽洗浄", "en":"tank cleaning"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥方法設定", "en":"Drying cycle setting (Note1)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0xA0", "state":{"ja":"乾燥なし", "en":"No drying"}},
                    {"edt":"0xA1", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0xA2", "state":{"ja":"毛布", "en":"blankets"}},
                    {"edt":"0xA3", "state":{"ja":"ソフト", "en":"soft"}},
                    {"edt":"0xA4", "state":{"ja":"ドライ", "en":"dry"}},
                    {"edt":"0xA5", "state":{"ja":"アイロン／Yシャツ", "en":"ironing/business shirts"}},
                    {"edt":"0xA6", "state":{"ja":"吊り干し", "en":"hang drying"}},
                    {"edt":"0xA7", "state":{"ja":"厚物", "en":"thick clothes"}},
                    {"edt":"0xA8", "state":{"ja":"除菌", "en":"disinfection"}},
                    {"edt":"0xA9", "state":{"ja":"縮み低減", "en":"shrinkage minimization"}},
                    {"edt":"0xAA", "state":{"ja":"仕上げ", "en":"finishing"}},
                    {"edt":"0xAB", "state":{"ja":"静止乾燥", "en":"stationary drying"}},
                    {"edt":"0xAC", "state":{"ja":"時間指定", "en":"user definition of drying time"}},
                    {"edt":"0xAD", "state":{"ja":"衣類あたため", "en":"garment warming"}},
                    {"edt":"0xAE", "state":{"ja":"ヒータ入力制限", "en":"heater current limit"}},
                    {"edt":"0xBF", "state":{"ja":"槽洗浄", "en":"tank cleaning"}}
                ]
            }
        },
        "0xD3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"設定可能コース情報1", "en":"Washer and dryer cycle option list 1"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        },
        "0xD4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"設定可能コース情報2", "en":"Washer and dryer cycle option list 2"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"設定可能コース情報3", "en":"Washer and dryer cycle option list 3"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xD6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水流設定", "en":"Water flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/level_A0-8" },
                    { "$ref":"#/definitions/level_C0-8" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            },
            "note":{
                "ja":"0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
                "en":"0xA0-0xA7 relative plus、0xC0-0xC7 relative minus"
            }
        },
        "0xD7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"脱水回転数設定値", "en":"Rotation speed for spin drying setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-4095","unit":"rpm" },
                    { "$ref":"#/definitions/level_A000-2048" },
                    { "$ref":"#/definitions/level_C000-2048" },
                    { "$ref":"#/definitions/state_AUTO-FFFF" }
                ]
            },
            "note":{
                "ja":"0xA000-0xA7FF プラス相対指定、0xC000-0xC7FF マイナス相対指定",
                "en":"0xA000-0xA7FF relative plus、0xC000-0xC7FF relative minus"
            }
        },
        "0xD8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥度設定", "en":"Degree of drying setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/level_A0-8" },
                    { "$ref":"#/definitions/level_C0-8" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            },
            "note":{
                "ja":"0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
                "en":"0xA0-0xA7 relative plus、0xC0-0xC7 relative minus"
            }
        },
        "0xDB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯残り時間", "en":"Remaining washing time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xDC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥残り時間", "en":"Remaining drying time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xDF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ経過時間", "en":"Elapsed time on the ON timer"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"つけおき行程時間設定値", "en":"Presoaking time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/level_A000-60" },
                    { "$ref":"#/definitions/level_C000-60" },
                    { "$ref":"#/definitions/state_AUTO-FFFF" }
                ]
            },
            "note":{
                "ja":"0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
                "en":"0xA000-0xA03B relative plus、0xC000-0xC03B relative minus"
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥遷移状態", "en":"Current stage of washer and dryer cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"洗い", "en":"washing"}},
                    {"edt":"0x42", "state":{"ja":"すすぎ", "en":"rinsing"}},
                    {"edt":"0x43", "state":{"ja":"脱水", "en":"spin drying"}},
                    {"edt":"0x44", "state":{"ja":"一時停止", "en":"suspended"}},
                    {"edt":"0x45", "state":{"ja":"洗濯完了", "en":"washing completed"}},
                    {"edt":"0x51", "state":{"ja":"洗濯／乾燥（ソフトキープなし）完了", "en":"washing/drying (without wrinkling minimization) completed"}},
                    {"edt":"0x52", "state":{"ja":"乾燥", "en":"drying"}},
                    {"edt":"0x53", "state":{"ja":"ソフトキープ", "en":"wrinkling minimization"}},
                    {"edt":"0x54", "state":{"ja":"乾燥（ソフトキープあり）完了", "en":"drying (with wrinkling minimization) completed"}},
                    {"edt":"0x61", "state":{"ja":"運転前待機中", "en":"standing by to start"}},
                    {"edt":"0x71", "state":{"ja":"第１すすぎ", "en":"1st rinsing"}},
                    {"edt":"0x72", "state":{"ja":"第２すすぎ", "en":"2nd rinsing"}},
                    {"edt":"0x73", "state":{"ja":"第３すすぎ", "en":"3rd rinsing"}},
                    {"edt":"0x74", "state":{"ja":"第４すすぎ", "en":"4th rinsing"}},
                    {"edt":"0x75", "state":{"ja":"第５すすぎ", "en":"5th rinsing"}},
                    {"edt":"0x76", "state":{"ja":"第６すすぎ", "en":"6th rinsing"}},
                    {"edt":"0x77", "state":{"ja":"第７すすぎ", "en":"7th rinsing"}},
                    {"edt":"0x78", "state":{"ja":"第８すすぎ", "en":"8th rinsing"}},
                    {"edt":"0x81", "state":{"ja":"第１脱水", "en":"1st spin drying"}},
                    {"edt":"0x82", "state":{"ja":"第２脱水", "en":"2nd spin drying"}},
                    {"edt":"0x83", "state":{"ja":"第３脱水", "en":"3rd spin drying"}},
                    {"edt":"0x84", "state":{"ja":"第４脱水", "en":"4th spin drying"}},
                    {"edt":"0x85", "state":{"ja":"第５脱水", "en":"5th spin drying"}},
                    {"edt":"0x86", "state":{"ja":"第６脱水", "en":"6th spin drying"}},
                    {"edt":"0x87", "state":{"ja":"第７脱水", "en":"7th spin drying"}},
                    {"edt":"0x88", "state":{"ja":"第８脱水", "en":"8th spin drying"}},
                    {"edt":"0x91", "state":{"ja":"プリヒート脱水", "en":"Preheat spin drying"}}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水量設定1", "en":"Water volume setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-127", "unit":"L" },
                    { "$ref":"#/definitions/level_A0-32" },
                    { "$ref":"#/definitions/level_C0-32" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            },
            "note":{
                "ja":"0xA0-0xBF プラス相対指定、0xC0-0xDF マイナス相対指定",
                "en":"0xA0-0xBF relative plus、0xC0-0xDF relative minus"
            }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水量設定2", "en":"Water volume setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/level_A0-8" },
                    { "$ref":"#/definitions/level_C0-8" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            },
            "note":{
                "ja":"0xA0-0xA7 プラス相対指定、0xC0-0xC7 マイナス相対指定",
                "en":"0xA0-0xA7 relative plus、0xC0-0xC7 relative minus"
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗い時間設定値", "en":"Washing time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/level_A000-60" },
                    { "$ref":"#/definitions/level_C000-60" },
                    { "$ref":"#/definitions/state_AUTO-FFFF" }
                ]
            },
            "note":{
                "ja":"0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
                "en":"0xA000-0xA03B relative plus、0xC000-0xC03B relative minus"
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"すすぎ回数設定値", "en":"Number of times of rinsing setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-8" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"すすぎモード設定", "en":"Rinsing process setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xE8":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"脱水時間設定値", "en":"Spin drying time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-59", "unit":"minutes" },
                    { "$ref":"#/definitions/level_A0-32" },
                    { "$ref":"#/definitions/level_C0-32" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            },
            "note":{
                "ja":"0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
                "en":"0xA000-0xA03B relative plus、0xC000-0xC03B relative minus"
            }
        },
        "0xE9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥時間設定値", "en":"Drying time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/level_A000-60" },
                    { "$ref":"#/definitions/level_C000-60" },
                    { "$ref":"#/definitions/state_AUTO-FFFF" }
                ]
            },
            "note":{
                "ja":"0xA000-0xA03B プラス相対指定、0xC000-0xC03B マイナス相対指定",
                "en":"0xA000-0xA03B relative plus、0xC000-0xC03B relative minus"
            }
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗い温水設定値", "en":"Warm water setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0xFE", "state":{"ja":"温水不使用", "en":"No hot water"}},
                            {"edt":"0xFF", "state":{"ja":"自動", "en":"Automatic"}}
                        ]
                    }
                ]
            }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂水設定", "en":"Bathtub water recycle setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"風呂水給水なし", "en":"Bathtub water not used"}},
                    {"edt":"0x41", "state":{"ja":"洗いのみ", "en":"Washing only"}},
                    {"edt":"0x42", "state":{"ja":"すすぎのみ", "en":"Rinsing only(excluding the final rinsing)"}},
                    {"edt":"0x43", "state":{"ja":"全すすぎ", "en":"All rinsing processes"}},
                    {"edt":"0x44", "state":{"ja":"洗い＋すすぎ（除く最終すすぎ）", "en":"Washing + rinsing(excluding the final rinsing)"}},
                    {"edt":"0x45", "state":{"ja":"洗い＋全すすぎ", "en":"Washing + all rinsing processes"}}
                ]
            }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ソフトキープ設定", "en":"Wrinkling minimization setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥残り時間", "en":"Time remaining to complete washer and dryer cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    {   "type":"time", "size":2 },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[{"edt":"0xFFFF", "state":{"ja":"残り時間不明","en":"Unknown"}}]
                    }            
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"運転中扉・蓋ロック設定", "en":"Door/cover lock    setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xEF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥行程情報", "en":"Washer and dryer cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_24" }
        }
    }
},
"0x03D4":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"業務用ショーケース向け室外機", "en":"Commercial show case outdoor unit"},
    "elProperties":{
        "0xAA":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"特殊状態", "en":"Exceptional status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"通常", "en":"Normal"}},
                    {"edt":"0x41", "state":{"ja":"除霜", "en":"Defrosting"}}
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"運転モード設定", "en":"Operation mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"冷却", "en":"Cooling"}},
                    {"edt":"0x42", "state":{"ja":"非冷", "en":"Non-cooling"}}
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"外気温度計測値", "en":"Measured value of outdoor air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-127-125Celsius" }
        },
        "0xCA":{
            "oneOf":[
                {
                    "validRelease":{"from":"F", "to":"H"},
                    "propertyName":{"ja":"グループ情報", "en":"Group information"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                {
                    "validRelease":{"from":"I", "to":"latest"},
                    "propertyName":{"ja":"グループ情報", "en":"Group information"},
                    "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                }
            ]
        },
        "0xE2":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"コンプレッサ動作状態", "en":"Group information"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        }
    }
},
"0x03D5":{
    "validRelease":{"from":"M", "to":"latest"},
    "className":{"ja":"食器洗い乾燥機", "en":"Dishwasher and dryer"},
    "elProperties":{
          "0x90":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-4142" }
        },
        "0x91":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定値", "en":"ON timer setting(time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0x92":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定値", "en":"ON timer setting(relative time)"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "type":"time", "size":2 }
        },
        "0xB0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"扉・蓋開閉設定", "en":"Door/cover open/close setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_OPEN-CLOSE-4142" }
        },
        "0xB1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"扉・蓋ロック設定", "en":"Door/cover lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/state_LOCK-UNLOCK-4142" }
        },
        "0xB2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"運転状態設定", "en":"Operation status setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"運転開始・再開/運転中", "en":"Start/restart(ed) or in progress"}},
                    {"edt":"0x42", "state":{"ja":"運転一時停止", "en":"Operation suspended"}},
                    {"edt":"0x43", "state":{"ja":"運転停止", "en":"Operation stopped"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄方法設定", "en":"Dish-washing method setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x40", "state":{"ja":"洗浄運転切", "en":"Dish-washing operation OFF"}},
                    {"edt":"0x41", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x42", "state":{"ja":"静音", "en":"Silent"}},
                    {"edt":"0x43", "state":{"ja":"汚れ大", "en":"Heavily stained"}},
                    {"edt":"0x44", "state":{"ja":"しつこい汚れ", "en":"Hard-to-remove stains"}},
                    {"edt":"0x45", "state":{"ja":"ソフト", "en":"Soft"}},
                    {"edt":"0x46", "state":{"ja":"汚れ少", "en":"Lightly stained"}},
                    {"edt":"0x47", "state":{"ja":"少量短時間", "en":"Quick wash of small amount of laundry"}},
                    {"edt":"0x48", "state":{"ja":"すすぎのみ", "en":"Rinsing only"}},
                    {"edt":"0x49", "state":{"ja":"除菌", "en":"Disinfection"}},
                    {"edt":"0x4F", "state":{"ja":"お手入れ", "en":"Maintenance"}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥方法設定", "en":"Drying cycle setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x80", "state":{"ja":"乾燥運転切", "en":"Drying operation OFF"}},
                    {"edt":"0x81", "state":{"ja":"最弱", "en":"Very low"}},
                    {"edt":"0x82", "state":{"ja":"弱", "en":"Low"}},
                    {"edt":"0x83", "state":{"ja":"標準", "en":"Standard"}},
                    {"edt":"0x84", "state":{"ja":"ソフト", "en":"Soft"}},
                    {"edt":"0x85", "state":{"ja":"強", "en":"High"}},
                    {"edt":"0x86", "state":{"ja":"最強", "en":"Very high"}},
                    {"edt":"0x87", "state":{"ja":"時間指定", "en":"User definition of drying time"}},
                    {"edt":"0x88", "state":{"ja":"乾燥のみ", "en":"Drying only"}},
                    {"edt":"0x8F", "state":{"ja":"庫内乾燥", "en":"Drying inside"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"保管方法設定", "en":"Storing method setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0xC0", "state":{"ja":"保管運転切", "en":"Storing operation OFF"}},
                    {"edt":"0xC1", "state":{"ja":"送風", "en":"Blowing"}},
                    {"edt":"0xC2", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0xC3", "state":{"ja":"除菌", "en":"Disinfection"}}
                ]
            }
        },
        "0xD3":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄方法設定可能情報", "en":"Dish-washing method setting acceptable information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD4":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥方法設定可能情報", "en":"Drying cycle setting acceptable information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD5":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"保管方法設定可能情報", "en":"Storing method setting acceptable information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xD6":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"予洗い時間設定値", "en":"Prewashing time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_AUTO-FFFF" },
                    { "$ref":"#/definitions/level_A001-8" },
                    { "$ref":"#/definitions/level_C001-8" }
                ]
            }
        },
        "0xD7":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"予洗い最高水温設定値", "en":"Highest water temperature setting for prewashing"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_NoHotWater-FE" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xD8":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"本洗い時間設定値", "en":"Washing time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_AUTO-FFFF" },
                    { "$ref":"#/definitions/level_A001-8" },
                    { "$ref":"#/definitions/level_C001-8" }
                ]
            }
        },
        "0xD9":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"本洗い最高水温設定値", "en":"Highest water temperature setting for washing"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_NoHotWater-FE" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xDA":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"すすぎ回数設定値", "en":"Number of times of rinsing setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-8" },
                    { "$ref":"#/definitions/state_AUTO-FF" }
                ]
            }
        },
        "0xDB":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"すすぎモード設定", "en":"Rinsing mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_4" }
        },
        "0xDC":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"熱水すすぎ最高水温設定値", "en":"Highest water temperature setting for hot water rinsing"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    { "$ref":"#/definitions/state_NoHotWater-FE" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xDD":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄水量設定", "en":"Dish-washing water volume setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xDE":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄水圧設定", "en":"Dish-washing water pressure setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xDF":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄度設定", "en":"Dish-washing level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥時間設定値", "en":"Drying time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_AUTO-FFFF" },
                    { "$ref":"#/definitions/level_A001-8" },
                    { "$ref":"#/definitions/level_C001-8" }
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"熱風乾燥最高気温設定値", "en":"Highest air temperature setting for hot air drying"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-150Celsius" },
                    { "$ref":"#/definitions/state_NoHotWater-FE" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥風量設定", "en":"Drying air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥度設定", "en":"Drying level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-16" },
                    { "$ref":"#/definitions/state_AUTO-FF" },
                    { "$ref":"#/definitions/level_A1-8" },
                    { "$ref":"#/definitions/level_C1-8" }
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"保管時間設定値", "en":"Storing time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xE5":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"運転設定情報", "en":"Operation setting information"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_27" }
        },
        "0xE6":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"運転遷移状態", "en":"Operation transition status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x10", "state":{"ja":"運転開始前", "en":"Before starting operation"}},
                    {"edt":"0x11", "state":{"ja":"運転前", "en":"Before operation"}},
                    {"edt":"0x14", "state":{"ja":"ON タイマ待機中", "en":"ON timer standing by"}},
                    {"edt":"0x30", "state":{"ja":"洗浄中", "en":"Dish-washing ongoing"}},
                    {"edt":"0x31", "state":{"ja":"予洗い中", "en":"Prewashing ongoing"}},
                    {"edt":"0x34", "state":{"ja":"本洗い中", "en":"Washing ongoing"}},
                    {"edt":"0x37", "state":{"ja":"すすぎ中", "en":"Rinsing ongoing"}},
                    {"edt":"0x3F", "state":{"ja":"洗浄一時停止", "en":"Dish-washing suspended"}},
                    {"edt":"0x50", "state":{"ja":"乾燥中", "en":"Drying ongoing"}},
                    {"edt":"0x51", "state":{"ja":"熱風乾燥中", "en":"Hot air drying ongoing"}},
                    {"edt":"0x54", "state":{"ja":"風乾燥中", "en":"Air drying ongoing"}},
                    {"edt":"0x5F", "state":{"ja":"乾燥一時停止", "en":"Drying suspended"}},
                    {"edt":"0x70", "state":{"ja":"保管中", "en":"Storing ongoing"}},
                    {"edt":"0x71", "state":{"ja":"送風中", "en":"Blowing ongoing"}},
                    {"edt":"0x74", "state":{"ja":"除湿中", "en":"Dehumidification ongoing"}},
                    {"edt":"0x77", "state":{"ja":"除菌中", "en":"Disinfection ongoing"}},
                    {"edt":"0x7F", "state":{"ja":"保管一時停止", "en":"Storing suspended"}},
                    {"edt":"0x90", "state":{"ja":"運転完了", "en":"Operation completed"}},
                    {"edt":"0xB1", "state":{"ja":"第１すすぎ", "en":"1st rinsing"}},
                    {"edt":"0xB2", "state":{"ja":"第２すすぎ", "en":"2nd rinsing"}},
                    {"edt":"0xB3", "state":{"ja":"第３すすぎ", "en":"3rd rinsing"}},
                    {"edt":"0xB4", "state":{"ja":"第４すすぎ", "en":"4th rinsing"}},
                    {"edt":"0xB5", "state":{"ja":"第５すすぎ", "en":"5th rinsing"}},
                    {"edt":"0xB6", "state":{"ja":"第６すすぎ", "en":"6th rinsing"}},
                    {"edt":"0xB7", "state":{"ja":"第７すすぎ", "en":"7th rinsing"}},
                    {"edt":"0xB8", "state":{"ja":"第８すすぎ", "en":"8th rinsing"}},
                    {"edt":"0xFF", "state":{"ja":"状態不明", "en":"Unknown status"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"ON タイマ残り時間", "en":"Remaining time on the ON timer"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xE8":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"予洗い残り時間", "en":"Remaining time of prewashing"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xE9":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"本洗い残り時間", "en":"Remaining time of washing"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xEA":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"すすぎ残り時間", "en":"Remaining time for rinsing"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xEB":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗浄残り時間", "en":"Remaining time of dish-washing"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xEC":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"乾燥残り時間", "en":"Remaining drying time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xED":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"洗乾残り時間", "en":"Remaining time of washing and drying"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "type":"time", "size":2 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        },
        "0xEE":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"保管経過時間", "en":"Storing elapsed time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xEF":{
            "validRelease":{"from":"M", "to":"latest"},
            "propertyName":{"ja":"使用水量", "en":"Used water volume"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-65534", "unit":"L", "multipleOf":0.01 },
                    { "$ref":"#/definitions/state_Undefined-FFFF" }
                ]
            }
        }
    }
},
"0x0401":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"体重計", "en":"Weighing machine"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"体重計測値", "en":"Measured value of body weight"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"kg", "multipleOf":0.1 }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"体脂肪計測値", "en":"Measured value of body fat"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-1000", "unit":"%", "multipleOf":0.1 }
        }
    }
},
"0x05FA":{
    "validRelease":{"from":"H", "to":"latest"},
    "className":{"ja":"並列処理併用型電力制御", "en":"Parallel processing combination-type power control"},
    "elProperties":{
        "0xC0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"電力逸脱情報", "en":"Power deviation information"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xC1":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"削減電力情報", "en":"Power reduction information"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xC2":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"送信インターバル", "en":"Transmission interval"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"notApplicable"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xC3":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"定格消費電力スレショルド", "en":"Rated power consumption threshold"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        }
    }
},
"0x05FB":{
    "validRelease":{"from":"G", "to":"latest"},
    "className":{"ja":"DRイベントコントローラ", "en":"DR event controller"},
    "elProperties":{
        "0xD0":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"事業者ID", "en":"Business ID"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-65533" }
        },
        "0xD1":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"DR プログラムタイプ", "en":"DR program type"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"CPP", "en":"CPP"}},
                    {"edt":"0x31", "state":{"ja":"PTR", "en":"PTR"}},
                    {"edt":"0x32", "state":{"ja":"電力使用制限", "en":"Power use limit"}},
                    {"edt":"0x33", "state":{"ja":"発電電力制限", "en":"Power generation limit"}},
                    {"edt":"0x34", "state":{"ja":"でんき予報", "en":"Electricity forecast"}},
                    {"edt":"0x35", "state":{"ja":"DLC", "en":"DLC"}},
                    {"edt":"0x36", "state":{"ja":"レベル指定", "en":"Level designation"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"プログラムID", "en":"Program ID"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-253" },
                    {
                      "type":"state",
                      "size":1,
                      "enum":[
                          {"edt":"0xFE", "state":{"ja":"未設定", "en":"Undefined"}}
                      ]
                    }
                ]
            }
        },
        "0xD3":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"現在有効イベント情報", "en":"Current valid event information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-165" }
        },
        "0xD4":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"次有効イベント情報", "en":"Next valid event information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-165" }
        },
        "0xD5":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"将来イベント情報通知IDリスト", "en":"Future event information notification ID list"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-101" }
        },
        "0xD6":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"過去イベント情報通知IDリスト", "en":"Past event information notification ID list"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-101" }
        },
        "0xD7":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"最新受信イベント通知ID", "en":"Newest received event notification ID"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-99" },
                    {
                      "type":"state",
                      "size":1,
                      "enum":[
                          {"edt":"0xFE", "state":{"ja":"無し", "en":"None"}}
                      ]
                    }
                ]
            }
        },
        "0xD8":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"最過去受信イベント通知ID", "en":"Oldest received event notification ID"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-99" },
                    {
                      "type":"state",
                      "size":1,
                      "enum":[
                          {"edt":"0xFE", "state":{"ja":"無し", "en":"None"}}
                      ]
                    }
                ]
            }
        },
        "0xD9":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"通知ID 指定", "en":"Notification ID designation"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99" }
        },
        "0xDA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"イベント情報ID指定", "en":"Event information ID designation"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_10" }
        },
        "0xDB":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"対象機器情報リスト", "en":"Target device information list"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-231" }
        },
        "0xE0":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"イベント情報", "en":"Event information"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-165" }
        },
        "0xE1":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"確認・OPT 情報", "en":"Confirm/opt information"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_14" }
        },
        "0xE2":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"確認・OPT 情報ステータス", "en":"Confirm/opt information status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        }
    }
},
"0x05FD":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"スイッチ (JEM_A/HA端子対応)", "en":"Switch (supporting JEM-A/HA terminals)"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"接続機器", "en":"Connected device"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_12" }
        }
    }
},
"0x05FF":{
    "validRelease":{"from":"G", "to":"latest"},
    "className":{"ja":"コントローラ", "en":"Controller"},
    "elProperties":{
        "0xC0":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"コントローラID", "en":"Controller ID"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-40" }
        },
        "0xC1":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理台数", "en":"Number of devices controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533" }
        },
        "0xC2":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"インデックス", "en":"Index"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533" }
        },
        "0xC3":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"機器ID", "en":"Device ID"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-40" }
        },
        "0xC4":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"機種", "en":"Device type"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xC5":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"名称", "en":"Name"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"raw",
                "minSize":1,
                "maxSize":64
            }
        },
        "0xC6":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"接続状態", "en":"Connection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"接続中", "en":"Connected"}},
                    {"edt":"0x42", "state":{"ja":"離脱中", "en":"Disconnected"}},
                    {"edt":"0x43", "state":{"ja":"未登録", "en":"Not registered"}},
                    {"edt":"0x44", "state":{"ja":"削除", "en":"Deleted"}}
                ]
            }
        },
        "0xC7":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器事業者コード", "en":"Business code of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_3" }
        },
        "0xC8":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器商品コード", "en":"Product code of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-12" }
        },
        "0xC9":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器製造年月日", "en":"Manufacture date of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"date-time", "size":4 }
        },
        "0xCA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器登録情報更新年月日", "en":"Registerd information renewal date of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "type":"date-time", "size":4 }
        },
        "0xCB":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器登録情報更新バージョン情報", "en":"Registerd information renewal version information of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533" }
        },
        "0xCC":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"管理対象機器設置場所", "en":"Place to install device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xCD":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"管理対象機器異常発生状態", "en":"Fault status of device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1" }
        },
        "0xCE":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"管理対象機器Setプロパティマップ", "en":"Set property map for device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" }
        },
        "0xCF":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"管理対象機器Getプロパティマップ", "en":"Get property map for device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" }
        },
        "0xE0":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"設置住所", "en":"Address of installation location"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"raw",
                "minSize":1,
                "maxSize":255
            }
        }
    }
},
"0x0601":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"ディスプレイ", "en":"Display"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"表示制御設定", "en":"Display control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"表示", "en":"Displaying enabled"}},
                    {"edt":"0x31", "state":{"ja":"非表示", "en":"Displaying disabled"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"文字列設定受付可能状態", "en":"Character string setting acceptance status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"Ready", "en":"Ready"}},
                    {"edt":"0x31", "state":{"ja":"Busy", "en":"Busy"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"表示可能文字コード", "en":"Supported character codes"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"伝達文字列設定", "en":"Character string to present to the user"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-247" }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"受付け伝達文字列長", "en":"Length of character string accepted"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"length",
                        "element":{ "$ref":"#/definitions/number_0-244" }
                    },
                    {
                        "name":"reserved",
                        "element":{
                          "type":"state",
                          "size":1,
                          "enum":[
                              {"edt":"0x00", "state":{"ja":"reserved", "en":"reserved"}}
                          ]
                        }
                    }
                ]              
            }
        }
    }
},
"0x0602":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"テレビ", "en":"Television"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"表示制御設定", "en":"Display control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"表示", "en":"Displaying enabled"}},
                    {"edt":"0x31", "state":{"ja":"非表示", "en":"Displaying disabled"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"文字列設定受付可能状態", "en":"Character string setting acceptance status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"Ready", "en":"Ready"}},
                    {"edt":"0x31", "state":{"ja":"Busy", "en":"Busy"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"表示可能文字コード", "en":"Supported character codes"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"伝達文字列設定", "en":"Character string to present to the user"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-247" }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"受付け伝達文字列長", "en":"Length of character string accepted"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"length",
                        "element":{ "$ref":"#/definitions/number_0-244" }
                    },
                    {
                        "name":"reserved",
                        "element":{
                          "type":"state",
                          "size":1,
                          "enum":[
                              {"edt":"0x00", "state":{"ja":"reserved", "en":"reserved"}}
                          ]
                        }
                    }
                ]              
            }
        }
    }
},
"0x0603":{
    "validRelease":{"from":"E", "to":"latest"},
    "className":{"ja":"オーディオ", "en":"Audio"},
    "elProperties":{
        "0xB8":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"音量設定値", "en":"Volume setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xB9":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"ミュート設定", "en":"Mute setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF-3031" }
        },
        "0xBC":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"入力ソース設定", "en":"Input source setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        }
    }
},
"0x0604":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"ネットワークカメラ", "en":"Network camera"},
    "elProperties":{
        "0xC0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"静止画撮影設定受付可能状態", "en":"Still image photography setting acceptance status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"Ready", "en":"Ready"}},
                    {"edt":"0x31", "state":{"ja":"Busy", "en":"Busy"}}
                ]
            }
        },
        "0xC1":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"静止画撮影設定", "en":"Still image photography setting"},
            "accessRule":{"get":"notApplicable", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x30", "state":{"ja":"撮影", "en":"Shoot"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"転送設定", "en":"Transfer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_1" }
        }
    }
}
    }
}