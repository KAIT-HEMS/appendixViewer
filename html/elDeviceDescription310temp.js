const jsonData = {
    "metaData":{
        "date":"2019-05-10",
        "release":"K",
        "version":"3.1.0"
    },
    "definitions":{
        "number_1-60":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":60
        },
        "number_0-252":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":252
        },
        "number_1-252":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":252
        },
        "number_0-255":{
            "type":"number",
            "format":"uint8",
            "minimum":0,
            "maximum":255
        },
        "number_1-255":{
            "type":"number",
            "format":"uint8",
            "minimum":1,
            "maximum":255
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
        "number_0-4294967293":{
            "type":"number",
            "format":"uint32",
            "minimum":0,
            "maximum":4294967293
        },
        "state_ON-OFF":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0x30", "state":{"ja":"ON", "en":"ON"}},
                {"edt":"0x31", "state":{"ja":"OFF", "en":"OFF"}}
            ]
        },
        "state_Undefined":{
            "type":"state",
            "size":1,
            "enum":[
                {"edt":"0xFD", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
            ]
        },
        "level_31-8":{
            "type":"level",
            "base":"0x31",
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
        "raw_40":{
            "type":"raw",
            "minSize":40,
            "maxSize":40
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
        "raw_1-40":{
            "type":"raw",
            "minSize":1,
            "maxSize":40
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
    "nodeProfile":{
        "0x0EF0":{
            "validRelease":{"from":"A","to":"latest"},
            "className":{"ja":"ノードプロファイル", "en":"Node Profile"},
            "elProperties":{
                "0x80":{
                    "validRelease":{"from":"A", "to":"latest"},
                    "propertyName":{"ja":"動作状態", "en":"Operation status"},
                    "accessRule":{"get":"required", "set":"optional", "inf":"required"},
                    "data":{ "$ref":"#/definitions/state_ON-OFF" }
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
                    "data":{ "$ref":"#/definitions/raw_1-17" },
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
                    "data":{ "$ref":"#/definitions/raw_1-12" }
                },
                "0x8D":{
                    "validRelease":{"from":"A", "to":"latest"},
                    "propertyName":{"ja":"製造番号", "en":"Production number"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1-12" }
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
                        "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
                    }
                },
                "0x9E":{
                    "validRelease":{"from":"A", "to":"latest"},
                    "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1-17" },
                    "note":{
                        "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                        "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
                    }
                },
                "0x9F":{
                    "validRelease":{"from":"A", "to":"latest"},
                    "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1-17" },
                    "note":{
                        "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                        "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
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
                    "data":{
                        "type":"number",
                        "format":"uint16",
                        "minimum":0,
                        "maximum":255
                    },
                    "note":{
                        "ja":"ノードプロファイルクラスを含む",
                        "en":"including node profile class"
                    }
                },
                "0xD5":{
                    "validRelease":{"from":"A", "to":"latest"},
                    "propertyName":{"ja":"インスタンスリスト通知", "en":"Instance list notification"},
                    "accessRule":{"get":"notApplicable", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"numberOfinstances",
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":0,
                                    "maximum":84
                                }
                            },
                            {
                                "name":"instanceList",
                                "element":{
                                    "type":"array",
                                    "itemSize":3,
                                    "maxItems":84,
                                    "items":{
                                        "type":"raw",
                                        "minSize":3,
                                        "maxSize":3
                                    }
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
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":0,
                                    "maximum":84
                                }
                            },
                            {
                                "name":"instanceList",
                                "element":{
                                    "type":"array",
                                    "itemSize":3,
                                    "maxItems":84,
                                    "items":{
                                        "type":"raw",
                                        "minSize":3,
                                        "maxSize":3
                                    }
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
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":0,
                                    "maximum":8
                                }
                            },
                            {
                                "name":"classList",
                                "element":{
                                    "type":"array",
                                    "itemSize":2,
                                    "maxItems":16,
                                    "items":{
                                        "type":"raw",
                                        "minSize":2,
                                        "maxSize":2
                                    }
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
        }
    },
    "superClass":{
        "0x80":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"動作状態", "en":"Operation status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF" }
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
                        "en":"bimap(eg. 0x00:undefined(initial data), 0x08:living)"
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
                        "en":"1byte bimap(eg. 0x00:undefined(initial data), 0x08:living) or 17 bytes data starting from 0x01"
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
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
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
            "data":{ "$ref":"#/definitions/raw_1-12" }
        },
        "0x8D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造番号", "en":"Production number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-12" }
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
                    "validRelease":{"from":"A", "to":"B"},
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
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
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
                        "element":{
                            "type":"number",
                            "format":"uint32"
                        }
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
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        }
    },
    "devices":{
"0x0000":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"スーパークラス", "en":"Super Class"},
    "elProperties":{
        "0x80":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"動作状態", "en":"Operation status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF" }
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
                        "en":"bimap(eg. 0x00:undefined(initial data), 0x08:living)"
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
                        "en":"1byte bimap(eg. 0x00:undefined(initial data), 0x08:living) or 17 bytes data starting from 0x01"
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
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
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
            "data":{ "$ref":"#/definitions/raw_1-12" }
        },
        "0x8D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造番号", "en":"Production number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-12" }
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
                    "validRelease":{"from":"A", "to":"B"},
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
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"W" }
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
                        "element":{
                            "type":"number",
                            "format":"uint32"
                        }
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
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        }
    }
},
"0x0EF0":{
    "validRelease":{"from":"A","to":"latest"},
    "className":{"ja":"ノードプロファイル", "en":"Node Profile"},
    "elProperties":{
        "0x80":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"動作状態", "en":"Operation status"},
            "accessRule":{"get":"required", "set":"optional", "inf":"required"},
            "data":{ "$ref":"#/definitions/state_ON-OFF" }
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
            "data":{ "$ref":"#/definitions/raw_1-17" },
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
            "data":{ "$ref":"#/definitions/raw_1-12" }
        },
        "0x8D":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"製造番号", "en":"Production number"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-12" }
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
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9E":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Setプロパティマップ", "en":"Set property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
            }
        },
        "0x9F":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"Getプロパティマップ", "en":"Get property map"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"１バイト目は個数。プロパティ数が15個以下の場合は列挙、16個以上の場合はbitmap",
                "en":"1st byte is count of property. If the count is less than 16, enumrate. Else, bitmap."
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
            "data":{
                "type":"number",
                "format":"uint16",
                "minimum":0,
                "maximum":255
            },
            "note":{
                "ja":"ノードプロファイルクラスを含む",
                "en":"including node profile class"
            }
        },
        "0xD5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"インスタンスリスト通知", "en":"Instance list notification"},
            "accessRule":{"get":"notApplicable", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"numberOfinstances",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":84
                        }
                    },
                    {
                        "name":"instanceList",
                        "element":{
                            "type":"array",
                            "itemSize":3,
                            "maxItems":84,
                            "items":{
                                "type":"raw",
                                "minSize":3,
                                "maxSize":3
                            }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":84
                        }
                    },
                    {
                        "name":"instanceList",
                        "element":{
                            "type":"array",
                            "itemSize":3,
                            "maxItems":84,
                            "items":{
                                "type":"raw",
                                "minSize":3,
                                "maxSize":3
                            }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":8
                        }
                    },
                    {
                        "name":"classList",
                        "element":{
                            "type":"array",
                            "itemSize":2,
                            "maxItems":16,
                            "items":{
                                "type":"raw",
                                "minSize":2,
                                "maxSize":2
                            }
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
"0x000D":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"照度センサ", "en":"Illuminance Sensor"},
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
"0x0011":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"温度センサ", "en":"Temperature Sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度計測値", "en":"Temperature value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"int16",
                "unit":"Celsius",
                "minimum":-2732,
                "maximum":32766,
                "multipleOf":0.1
            }
        }
    }
},
"0x0012":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"湿度センサ", "en":"Humidity Sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"湿度計測値", "en":"Humidity value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        }
    }
},
"0x0022":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電力量センサ", "en":"Electric Power Sensor"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値", "en":"Integral electric energy"},
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
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測履歴情報", "en":"Integral electric energy measurement log"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"array",
                "itemSize":4,
                "minItems":48,
                "maxItems":48,
                "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"実効電圧値計測値", "en":"Effective voltage value"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"V" }
        }
    }
},
"0x002D":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"気圧センサ", "en":"Air Pressure Sensor"},
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
    "className":{"ja":"家庭用エアコン", "en":"Home Air Conditioner"},
    "elProperties":{
        "0x8F":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"節電動作設定", "en":"Power-saving operation setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"節電動作中", "en":"Power Saving"}},
                    {"edt":"0x42", "state":{"ja":"通常動作中", "en":"No Power Saving"}}
                ]
            }
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定", "en":"OFF timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                                ]
                            }            
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                                ]
                            }            
                        ]
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
                    {"edt":"0x41", "state":{"ja":"Auto", "en":"Auto"}},
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
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                    {"edt":"0x42", "state":{"ja":"冷房", "en":"Cooling"}},
                    {"edt":"0x43", "state":{"ja":"暖房", "en":"Heating"}},
                    {"edt":"0x44", "state":{"ja":"除湿", "en":"Dehumidification"}},
                    {"edt":"0x45", "state":{"ja":"送風", "en":"Circulation"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度自動設定", "en":"Automatic temperature control setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"Auto", "en":"Auto"}},
                    {"edt":"0x42", "state":{"ja":"非Auto", "en":"Non Auto"}}
                ]
            }
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
                    { "$ref":"#/definitions/state_Undefined" }
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
                    { "$ref":"#/definitions/state_Undefined" }
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
                    { "$ref":"#/definitions/state_Undefined" }
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
                    { "$ref":"#/definitions/state_Undefined" }
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x7E", "state":{"ja":"計測不能","en":"Not Applicable"}, "readOnly":true}
                                ]
                            }
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x7E", "state":{"ja":"計測不能","en":"Not Applicable"}, "readOnly":true}
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "0xBC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ユーザリモコン温度設定値", "en":"Set temperature value of user remote control"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    { "$ref":"#/definitions/state_Undefined" }
                ]
            }
        },
        "0xBD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"吹き出し温度計測値", "en":"Measured cooled air temperature"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"相対温度設定値", "en":"Relative temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"number",
                        "format":"int8",
                        "unit":"Celsius",
                        "minimum":-127,
                        "maximum":125,
                        "multipleOf":0.1
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Ventilation air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                                {"edt":1, "state":{"ja":"Auto", "en":"Auto"}}
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
                    {"edt":"0x42", "state":{"ja":"結露抑制", "en":"Condensation suppresor function"}},
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
                    "propertyName":{"ja":"強制サーモモード設定", "en":"Thermostat setting overide function"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x40", "state":{"ja":"通常設定", "en":"Normal setting"}},
                            {"edt":"0x41", "state":{"ja":"強制サーモON", "en":"Thermostat setting overide function ON"}},
                            {"edt":"0x42", "state":{"ja":"強制サーモOFF", "en":"Thermostat setting overide function OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"強制サーモモード設定", "en":"Thermostat setting overide function"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x40", "state":{"ja":"通常設定", "en":"Normal setting"}},
                            {"edt":"0x41", "state":{"ja":"強制サーモON", "en":"Thermostat setting overide function ON"}},
                            {"edt":"0x42", "state":{"ja":"強制サーモOFF", "en":"Thermostat setting overide function OFF"}}
                        ]
                    }
                }
            ]
        },
        "0xCF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気清浄モード設定", "en":"Air purification mode setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"空気清浄ON", "en":"Air purification ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"ブザー", "en":"Buzzer"},
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
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
    "className":{"ja":"換気扇", "en":"Ventilation Fan"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
                ]
            }
        },
        "0xBF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気自動設定", "en":"Ventilation Auto setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                    {"edt":"0x42", "state":{"ja":"非自動", "en":"Non Auto"}}
                ]
            }
        }
    }
},
"0x0135":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"空気清浄器", "en":"Air Cleaner"},
    "elProperties":{
        "0xA0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風量設定", "en":"Air flow rate setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
                ]
            }
        },
        "0xC0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"空気汚れ検知状態", "en":"Air pollution detection status"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                    {"edt":"0x42", "state":{"ja":"無", "en":"NO"}}
                ]
            }
        },
        "0xC1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"煙検知状態", "en":"Smoke detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                    {"edt":"0x42", "state":{"ja":"無", "en":"NO"}}
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"光触媒動作設定", "en":"Optical catalyst operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"フィルター交換通知状態", "en":"Filter change notice"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                    {"edt":"0x42", "state":{"ja":"無", "en":"NO"}}
                ]
            }
        }
    }
},
"0x0260":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電動ブラインド・日よけ", "en":"Electric Blind"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x90":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0xC2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"風検知状態", "en":"Wind detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"風有", "en":"Wind"}},
                    {"edt":"0x42", "state":{"ja":"風無", "en":"No wind"}}
                ]
            }
        },
        "0xC3":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"日差し検知状態", "en":"Sunlight detection status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"日差し有", "en":"Sunlight"}},
                    {"edt":"0x42", "state":{"ja":"日差し無", "en":"No sunlight"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開（張出し）速度設定", "en":"Opening(extention) speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉（収納）速度設定", "en":"Closing(retraction) speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"second",
                "minimum":0,
                "maximum":253
            }
        },
        "0xD4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"自動動作設定", "en":"Automatic operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xE0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{
                        "ja":"開閉設定",
                        "en":"Open/close setting"
                    },
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                            {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"開閉（張出し／収納）動作設定",
                        "en":"Open/close(extension/retraction) setting"
                    },
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                            {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}},
                            {"edt":"0x43", "state":{"ja":"停止", "en":"stop"}}
                        ]
                    }
                }
            ]
        },
        "0xE1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                }
            ]
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ブラインド角度設定値", "en":"Shade angle setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"degree",
                "minimum":0,
                "maximum":180
            }
        },
        "0xE3":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{
                        "ja":"ブラインド開閉速度設定",
                        "en":"Blind open/close speed setting"
                    },
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                            {"edt":"0x42", "state":{"ja":"中", "en":"Middle"}},
                            {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{
                        "ja":"開閉（張出し／収納）速度設定",
                        "en":"Open/close(extension/retraction) speed setting"
                    },
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                            {"edt":"0x42", "state":{"ja":"中", "en":"Middle"}},
                            {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                        ]
                    }
                }
            ]
        },
        "0xE5":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"電気錠設定", "en":"Electric lock setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
                ]
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}},
                    {"edt":"0x44", "state":{"ja":"無し", "en":"None"}}
                ]
            }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉（収納）速度設定", "en":"One-time closing(retraction) speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}},
                    {"edt":"0x44", "state":{"ja":"無し", "en":"None"}}
                ]
            }
        }
    }
},
"0x0263":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電動雨戸・シャッター", "en":"Electric Rain Door"},
    "elProperties":{
        "0x89":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"異常内容", "en":"Fault description"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{ "$ref":"#/definitions/raw_2" }
        },
        "0x90":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0xD0":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"開速度設定", "en":"Opening speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                ]
            }
        },
        "0xD1":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"閉速度設定", "en":"Closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                ]
            }
        },
        "0xD2":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"動作時間設定値", "en":"Operation time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"second",
                "minimum":0,
                "maximum":253
            }
        },
        "0xE0":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開閉設定１", "en":"Open/close setting 1"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                            {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}},
                            {"edt":"0x43", "state":{"ja":"停止", "en":"stop"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開閉動作設定", "en":"Open/Close setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                            {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}},
                            {"edt":"0x43", "state":{"ja":"停止", "en":"stop"}}
                        ]
                    }
                }
            ]
        },
        "0xE1":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/level_31-8" }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"開度レベル設定", "en":"Degree-of-opening level"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-100%" }
                }
            ]
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ブラインド角度設定値", "en":"Shade angle setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"degree",
                "minimum":0,
                "maximum":180
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"開閉速度設定", "en":"Open/close speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Middle"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}}
                ]
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"C"},
            "propertyName":{"ja":"開閉設定2", "en":"Open/Close setting2"},
            "accessRule":{"get":"required_c", "set":"required_c", "inf":"required_c"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
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
            "propertyName":{"ja":"選択開度動作設定", "en":"Selective opening operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開度レベル設定位置開", "en":"Degree-of-setting position: Open"}},
                    {"edt":"0x42", "state":{"ja":"動作時間設定値開", "en":"Operation time setting value: Open"}},
                    {"edt":"0x43", "state":{"ja":"動作時間設定値閉", "en":"Operation time setting value: Close"}},
                    {"edt":"0x44", "state":{"ja":"ローカル設定位置", "en":"Local setting position"}},
                    {"edt":"0x45", "state":{"ja":"スリット開度設定", "en":"Local setting position"}}
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
                    {"edt":"0x43", "state":{"ja":"開動作中", "en":"Open"}},
                    {"edt":"0x44", "state":{"ja":"閉動作中", "en":"Closed"}},
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}},
                    {"edt":"0x44", "state":{"ja":"無し", "en":"None"}}
                ]
            }
        },
        "0xEF":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"ワンタイム閉速度設定", "en":"One-time closing speed setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"低", "en":"Low"}},
                    {"edt":"0x42", "state":{"ja":"中", "en":"Medium"}},
                    {"edt":"0x43", "state":{"ja":"高", "en":"High"}},
                    {"edt":"0x44", "state":{"ja":"無し", "en":"None"}}
                ]
            }
        }
    }
},
"0x026B":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気温水器", "en":"Electric WaterHeater"},
    "elProperties":{
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"Auto", "en":"Auto"}},
                    {"edt":"0x42", "state":{"ja":"非Auto", "en":"Non-Auto"}}
                ]
            }
        },
        "0xB2":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"H"},
                    "propertyName":{"ja":"沸き上げ中状態", "en":"Water heater status"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"沸き上げ中", "en":"Heating"}},
                            {"edt":"0x42", "state":{"ja":"非沸き上げ中", "en":"Not Heating"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"H", "to":"latest"},
                    "propertyName":{"ja":"沸き上げ中状態", "en":"Water heater status"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"沸き上げ中", "en":"Heating"}},
                            {"edt":"0x42", "state":{"ja":"非沸き上げ中", "en":"Not Heating"}}
                        ]
                    }
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
                    { "$ref":"#/definitions/state_Undefined" }
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
            "data":{
                "type":"time",
                "size":2
            }
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
                    "accessRule":{"get":"optional", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"許可", "en":"Permitted"}},
                            {"edt":"0x42", "state":{"ja":"禁止", "en":"Not Permitted"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"昼間沸き増し許可設定", "en":"Daytime reheating permission setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"許可", "en":"Permitted"}},
                            {"edt":"0x42", "state":{"ja":"禁止", "en":"Not Permitted"}}
                        ]
                    }
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
            "validRelease":{"from":"D", "to":"latest"},
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"給湯中", "en":"Supplying"}},
                    {"edt":"0x42", "state":{"ja":"非給湯中", "en":"Not Supplying"}}
                ]
            }
        },
        "0xC4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"風呂保温運転相対時間設定値", "en":"Relative time setting for keeping bath temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1,
                "maximum":2
            }
        },
        "0xCA":{
            "validRelease":{"from":"I", "to":"latest"},
            "propertyName":{"ja":"昼間沸き上げシフト時刻１", "en":"Daytime heating shift time 1"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"number",
                        "format":"uint8",
                        "minimum":9,
                        "maximum":17
                    },
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
                    {
                        "type":"number",
                        "format":"uint8",
                            "minimum":10,
                            "maximum":17
                    },
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
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定４", "en":"Bath water volume setting4"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" }
        },
        "0xD5":{
            "validRelease":{"from":"D", "to":"latest"},
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
            "data":{ "$ref":"#/definitions/state_ON-OFF" }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":12
                        }
                    },
                    {
                        "name":"day",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":31
                        }
                    },
                    {
                        "name":"hour",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":23
                        }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動入", "en":"Auto mode ON"}},
                    {"edt":"0x42", "state":{"ja":"自動解除", "en":"Auto mode OFF"}}
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"D", "to":"latest"},
            "propertyName":{"ja":"手動風呂追い焚き動作設定", "en":"Manual bath reheating operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"追い焚き入", "en":"Bath re-heating ON"}},
                    {"edt":"0x42", "state":{"ja":"追い焚き切", "en":"Bath re-heating OFF"}}
                ]
            }
        },
        "0xE5":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"風呂足し湯動作設定", "en":"Manual bath hot water addition function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"入", "en":"On"}},
                            {"edt":"0x42", "state":{"ja":"切", "en":"Off"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"手動風呂足し湯動作設定", "en":"Manual bath hot water addition function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"入", "en":"On"}},
                            {"edt":"0x42", "state":{"ja":"切", "en":"Off"}}
                        ]
                    }
                }
            ]
        },
        "0xE6":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"C"},
                    "propertyName":{"ja":"風呂ぬるめ動作設定", "en":"Manual lukewarm water temperature lowering function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"入", "en":"On"}},
                            {"edt":"0x42", "state":{"ja":"切", "en":"Off"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"手動風呂ぬるめ動作設定", "en":"Manual lukewarm water temperature lowering function setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"入", "en":"On"}},
                            {"edt":"0x42", "state":{"ja":"切", "en":"Off"}}
                        ]
                    }
                }
            ]
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定１", "en":"Bath water volume setting1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"L",
                "minimum":0,
                "maximum":253
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"浴室優先入", "en":"Priority bath ON"}},
                    {"edt":"0x42", "state":{"ja":"浴室優先切", "en":"Priority bath OFF"}}
                ]
            }
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
"0x026F":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電気錠", "en":"Electric Key"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"施錠設定1", "en":"Lock setting1"},
            "accessRule":{"get":"required", "set":"required", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"施錠設定2", "en":"Lock setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
                ]
            }
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドアガード施錠状態", "en":"Lock status of door guard"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"施錠", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"解錠", "en":"Unlock"}}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"扉開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"入", "en":"On"}},
                    {"edt":"0x42", "state":{"ja":"切", "en":"Off"}}
                ]
            }
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
    "className":{"ja":"瞬間式給湯器", "en":"Instantaneous Water Heater"},
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xD0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯器燃焼状態", "en":"Hot water heating status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"燃焼状態有", "en":"Heating"}},
                    {"edt":"0x42", "state":{"ja":"燃焼状態無", "en":"Not Heating"}}
                ]
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"給湯保温動作", "en":"Hot water warmer operation"}},
                    {"edt":"0x42", "state":{"ja":"給湯保温動作解除", "en":"Hot water warmer operation resetting"}}
                ]
            }
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
            "data":{ "$ref":"#/definitions/state_ON-OFF" }
        },
        "0xDA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"自動運転時間設定値", "en":"Duration of Automatic operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"time"
                    },
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
                    {
                        "type":"time"
                    },
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"燃焼状態有", "en":"Heating"}},
                    {"edt":"0x42", "state":{"ja":"燃焼状態無", "en":"Not Heating"}}
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂自動モード設定", "en":"Bath Auto mode setting"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"自動入", "en":"Auto mode ON"}},
                    {"edt":"0x42", "state":{"ja":"自動解除", "en":"Auto mode OFF"}}
                ]
            }
        },
        "0xE4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂追い炊き動作設定", "en":"Bath additional boil-up operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"追い炊き入", "en":"Additional boil-up ON"}},
                    {"edt":"0x42", "state":{"ja":"追い炊き切", "en":"Additional boil-up OFF"}}
                ]
            }
        },
        "0xE5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂足し湯動作設定", "en":"Bath hot water adding operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"足し湯入", "en":"Hot water addition ON"}},
                    {"edt":"0x42", "state":{"ja":"足し湯切", "en":"Hot water addition OFF"}}
                ]
            }
        },
        "0xE6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂ぬるめ動作設定", "en":"Bath water temperature lowering operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ぬるめ入", "en":"Hot water temperature lowering ON"}},
                    {"edt":"0x42", "state":{"ja":"ぬるめ切", "en":"Hot water temperature lowering OFF"}}
                ]
            }
        },
        "0xE7":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定1", "en":"Bath hot water volume setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"L",
                "minimum":0,
                "maximum":253
            }
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
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"浴室優先入", "en":"Bathroom priority ON"}},
                            {"edt":"0x42", "state":{"ja":"浴室優先切", "en":"Bathroom priority OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"E", "to":"latest"},
                    "propertyName":{"ja":"浴室優先設定", "en":"Bathroom priority setting"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"浴室優先入", "en":"Bathroom priority ON"}},
                            {"edt":"0x42", "state":{"ja":"浴室優先切", "en":"Bathroom priority OFF"}}
                        ]
                    }
                }
            ]
        },
        "0xEA":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"シャワー給湯状態", "en":"Shower hot water supply status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"シャワー給湯状態有", "en":"Shower hot water supply ON"}},
                    {"edt":"0x42", "state":{"ja":"シャワー給湯状態無", "en":"Shower hot water supply OFF"}}
                ]
            }
        },
        "0xEB":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"台所給湯状態", "en":"Kitchen hot water supply status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"台所給湯状態有", "en":"Kitchen hot water supply ON"}},
                    {"edt":"0x42", "state":{"ja":"台所給湯状態無", "en":"Kitchen hot water supply OFF"}}
                ]
            }
        },
        "0xEC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯保温ONタイマ予約設定", "en":"Hot water warmer ON timer reservation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"予約入", "en":"Reservation ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Reservation OFF"}}
                ]
            }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"給湯保温ONタイマ時刻設定値", "en":"Set value of hot water warmer ON timer time"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time"
            }
        },
        "0xEE":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"風呂湯量設定3", "en":"Bath hot water volume setting 3"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"L" }
        },
        "0xEF":{
            "validRelease":{"from":"G", "to":"latest"},
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
    "className":{"ja":"浴室暖房乾燥機", "en":"Bathroom Heater and Dryer"},
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定", "en":"OFF timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
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
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"換気運転設定", "en":"Ventilation operation setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/level_31-8" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                        ]
                    }            
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                                    {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                                ]
                            }            
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
                            {
                                "type":"state",
                                "size":1,
                                "enum":[
                                    {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                                    {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                                ]
                            }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                        ]
                    }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                        ]
                    }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x42", "state":{"ja":"標準", "en":"Standard"}}
                        ]
                    }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"あり", "en":"Detected"}},
                    {"edt":"0x42", "state":{"ja":"なし", "en":"Not detected"}}
                ]
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
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
                    {"edt":"0x00", "state":{"ja":"予約切", "en":"OFF"}}
                ]
            }
        }
    }
},
"0x0279":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"住宅用太陽光発電", "en":"PV Power Generation"},
    "elProperties":{
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
                            {"edt":"0x02", "state":{"ja":"系統連系（逆潮流不可）", "en":"System-interconnected type(reverse power flow not acceptable)"}}
                        ]
                    }
                }
            ]
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
    "className":{"ja":"冷温水熱源機", "en":"Hot Water Heat Source"},
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定", "en":"OFF timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
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
            "propertyName":{"ja":"水温設定1", "en":"waterTemperature1"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-100Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x71", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }
                ]
            },
            "note":{"ja":"EPC=0xE1または0xE2のどちらかの実装が必須", "en":"Either EPC=0xE1 or 0xE2 is required"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"水温設定2", "en":"waterTemperature2"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"level",
                        "base":"0x21",
                        "maximum":15
                    },
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":15
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
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
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
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
    "className":{"ja":"床暖房", "en":"Floor Heater"},
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x95":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ時刻設定", "en":"OFF timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定1", "en":"Temperature1"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_0-50Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }
                ]
            },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"温度設定2", "en":"Temperature2"},
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":15
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"自動", "en":"Auto"}}
                        ]
                    }            
                ]
            },
            "note":{"ja":"EPC=0xE0または0xE1のどちらかの実装が必須", "en":"Either EPC=0xE0 or 0xE1 is required"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"室内温度計測値", "en":"Measured room temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
                ]
            }
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"床温度計測値", "en":"Measured floor temperature"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_-127-125Celsius" },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x7E", "state":{"ja":"不明", "en":"Undefined"}, "readOnly":true}
                        ]
                    }
                ]
            },
            "note":{
                "ja":"Release AからBまでは値域が0〜50",
                "en":"The range of the value is from 0 to 50 between Release A and B."
            }
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
"0x027C":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"燃料電池", "en":"Fuel Cell"},
    "elProperties":{
        "0x90":{
            "validRelease":{"from":"A", "to":"C"},
            "propertyName":{"ja":"ONタイマ予約設定", "en":"ON timer setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"時刻予約、相対時間予約共に入",
                     "en":"Both the time- and relative time-based reservation functions are ON"}},
                    {"edt":"0x42", "state":{"ja":"予約切", "en":"Both reservation functions are OFF"}},
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"C"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
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
                    "data":{
                        "type":"number",
                        "format":"uint16",
                        "unit":"W",
                        "minimum":0,
                        "maximum":65533
                    }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"定格発電出力", "en":"Rated power generation output"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "type":"number",
                        "format":"uint16",
                        "unit":"W",
                        "minimum":0,
                        "maximum":65533
                    }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
        },
        "0xCA":{
            "oneOf":[
                {
                    "validRelease":{"from":"A", "to":"B"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"動作", "en":"ON"}},
                            {"edt":"0x42", "state":{"ja":"停止", "en":"OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"C", "to":"C"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"notApplicable"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"動作", "en":"ON"}},
                            {"edt":"0x42", "state":{"ja":"停止", "en":"OFF"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"発電動作設定", "en":"Power generation setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"動作", "en":"ON"}},
                            {"edt":"0x42", "state":{"ja":"停止", "en":"OFF"}}
                        ]
                    }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
                    "propertyName":{"ja":"給湯温度設定値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                {
                    "validRelease":{"from":"J", "to":"latest"},
                    "propertyName":{"ja":"発電要請時刻設定", "en":"Power generation request time setting"},
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"object",
                        "properties":[
                            {
                                "name":"start",
                                "element":{
                                    "type":"time"
                                }
                            },
                            {
                                "name":"end",
                                "element":{
                                    "type":"time"
                                }
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
            "propertyName":{"ja":"追い焚き設定", "en":""},
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
    "className":{"ja":"蓄電池", "en":"Storage Battery"},
    "elProperties":{
        "0x83":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"識別番号", "en":"Identification number"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_1-17" },
            "note":{
                "ja":"1バイト目は0xFE。2〜4バイト目はメーカコード。残りは機器毎のユニーク値",
                "en":"1st data is 0xFE. 2nd to 4th data is manufacture code. The rest should be unique to each device."
            }
        },
        "0x97":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"現在時刻設定", "en":"Current time setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x98":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"現在年月日設定", "en":"Current date setting"},
            "accessRule":{"get":"required", "set":"optional", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            }
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
            "propertyName":{"ja":"充電可能容量", "en":"AC chargeable capacity"},
            "validRelease":{"from":"H", "to":"latest"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA3":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"放電可能容量", "en":"AC dischargeable capacity"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA4":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"充電可能量", "en":"AC chargeable electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xA5":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"放電可能量", "en":"AC dischargeable electric energy"},
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
            "propertyName":{"ja":"AC充電下限設定", "en":"AC discharge lower limit setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        },
        "0xA8":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC積算充電電力量計測値<br>", "en":"AC measured cumulative charging electric energy"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"kWh", "multipleOf":0.001 }
        },
        "0xA9":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"AC積算放電電力量計測値<br>", "en":"AC measured cumulative discharging electric energy"},
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
                            {"edt":"0x00000000", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
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
                            {"edt":"0x00000000", "state":{"ja":"未設定","en":"Undefined"}, "readOnly":true}
                        ]
                    }
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
                    "propertyName":{"ja":"最小最大充電電力値<br>", "en":"Min/Max charging electric power"},
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
                    "propertyName":{"ja":"最小最大充電電力値<br>", "en":"Min/Max charging electric power"},
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
                    "propertyName":{"ja":"最小最大放電電力値<br>", "en":"Min/Max discharging electric power"},
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
                    "propertyName":{"ja":"最小最大放電電力値<br>", "en":"Min/Max discharging electric power"},
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
            "propertyName":{"ja":"再連携許可設定", "en":"Re-interconnection permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"許可", "en":"Permitted"}},
                    {"edt":"0x42", "state":{"ja":"禁止", "en":"Prohibited"}}
                ]
            }
        },
        "0xCD":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"運転許可設定", "en":"Operation permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"許可", "en":"Permitted"}},
                    {"edt":"0x42", "state":{"ja":"禁止", "en":"Prohibited"}}
                ]
            }
        },
        "0xCE":{
            "validRelease":{"from":"H", "to":"latest"},
            "propertyName":{"ja":"自立運転許可設定", "en":"Independent operation permission setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"許可", "en":"Permitted"}},
                    {"edt":"0x42", "state":{"ja":"禁止", "en":"Prohibited"}}
                ]
            }
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
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x48", "state":{"ja":"再起動", "en":"restart"}},
                            {"edt":"0x49", "state":{"ja":"実行容量再計算処理", "en":"capacityRecalculation"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"V", "multipleOf":0.1 }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
                            {"edt":"0x46", "state":{"ja":"自動", "en":"Auto"}},
                            {"edt":"0x48", "state":{"ja":"再起動", "en":"restart"}},
                            {"edt":"0x49", "state":{"ja":"実行容量再計算処理", "en":"capacityRecalculation"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
            "data":{ "$ref":"#/definitions/number_-999999999-999999999", "unit":"Wh" }
        },
        "0xE1":{
            "propertyName":{"ja":"充放電量設定値2", "en":"Charging/discharging amount setting 2"},
            "validRelease":{"from":"A", "to":"latest"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_-32767-32766", "unit":"Ah", "multipleOf":0.1 }
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
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xE8":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電量設定値1", "en":"Discharging amount setting 1"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"Wh" }
        },
        "0xE9":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"充電量設定値2", "en":"Charging amount setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
        },
        "0xEA":{
            "validRelease":{"from":"B", "to":"latest"},
            "propertyName":{"ja":"放電量設定値2", "en":"Discharging amount setting 2"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-32766", "unit":"Ah", "multipleOf":0.1 }
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
            "className":{"ja":"電気自動車充放電システム", "en":"EV Charger Discharger system"},
            "elProperties":{
                "0xC0":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能容量値１", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC1":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能容量値２", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xC2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量１", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量２", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xC4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"V2H使用可能残容量３", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xC5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格充電能力", "en":"xxx"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC6":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格放電能力", "en":"xxx"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xC7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充放電可否状態", "en":"xxx"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xC8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大充電電力値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_8" }
                },
                "0xC9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大放電電力値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_8" }
                },
                "0xCA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大充電電流値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xCB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"最小最大放電電流値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD0":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"使用容量値１", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD1":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"使用容量値２", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"定格電圧", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電力計測値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電流計測値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"瞬時充放電電圧計測値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xD6":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算放電電力量計測値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算放電電力量リセット設定", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xD8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算充電電力量計測値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xD9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"積算充電電力量リセット設定", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xDA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"運転モード設定", "en":"xxx"},
                    "accessRule":{"get":"required", "set":"required", "inf":"required"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xDB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"系統連携状態", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE2":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量１", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE3":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量２", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xE4":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"電池残容量３", "en":"xxx"},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE5":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"劣化状態", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_1" }
                },
                "0xE7":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電量設定値１", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE8":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電量設定値１", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xE9":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電量設定値２", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEA":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電量設定値２", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEB":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電電力設定値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xEC":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電電力設定値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_4" }
                },
                "0xED":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"充電電流設定値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                },
                "0xEE":{
                    "validRelease":{"from":"B", "to":"C"},
                    "propertyName":{"ja":"放電電流設定値", "en":"xxx"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_2" }
                }
            }
        },
        {
            "validRelease":{"from":"D", "to":"latest"},
            "className":{"ja":"電気自動車充放電器", "en":"EV Charger Discharger"},
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
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                        ]
                    }
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
                    "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                        ]
                    }
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
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":0,
                                    "maximum":24
                                }
                            },
                            {
                                "name":"iDs",
                                "element":{
                                    "type":"array",
                                    "itemSize":1,
                                    "maxItems":24,
                                    "items":{
                                        "type":"number",
                                        "format":"uint8"
                                    }
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
                    "validRelease":{"from":"D", "to":"latest"},
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
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"Ah", "multipleOf":0.1 }
                },
                "0xEE":{
                    "validRelease":{"from":"D", "to":"latest"},
                    "propertyName":{"ja":"放電電流設定値", "en":"Discharging current setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/number_0-65533", "unit":"Ah", "multipleOf":0.1 }
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
"0x0280":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"電力量メータ", "en":"watt-hour meter"},
    "elProperties":{
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値", "en":"Cumalative amounts of electric energy measurement value"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-99999999", "unit":"kWh", "coefficient":["0xE2"] },
            "note":{"ja":"0xE2の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE2"}
        },
        "0xE2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算電力量単位", "en":"Cumalative amounts of electric energy unit"},
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
            "propertyName":{"ja":"積算電力量計測値履歴１", "en":"Cumalative amounts of electric energy measurement log 1"},
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
                    {"edt":"0x33", "state":{"ja":"個人", "en":"Indivisual"}}
                ]
            }
        },
        "0xE0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算水流量計測値", "en":"Measured cumalative amount of flowing water"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "coefficient":["0xE1"] },
            "note":{"ja":"0xE1の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE1"}
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"積算水流量計測値単位", "en":"Unit for measured cumalative amounts of flowing water"},
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
                "items":{ "$ref":"#/definitions/number_0-999999999", "unit":"m3", "coefficient":["0xE1"] }
            },
            "note":{"ja":"0xE1の値を乗算する必要あり", "en":"It is necessary to mutiply the value of 0xE1"}
        },
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"検針データ異常検知状態", "en":"Detection of abnormal value in metering data"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"有", "en":"YES"}},
                    {"edt":"0x42", "state":{"ja":"無", "en":"NO"}}
                ]
            }
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
            "propertyName":{"ja":"積算ガス消費量計測値", "en":"Cumalative amount of gas consumption measurement value"},
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
"0x0287":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"分電盤メータリング", "en":"Power Distribution Board"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"主幹定格容量", "en":"Master rated capacity"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"A",
                "minimum":0,
                "maximum":253
            }
        },
        "0xB1":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"計測チャンネル数（片方向）", "en":"Number of measurement channel(one direction)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-252" },
                    { "$ref":"#/definitions/state_Undefined" }
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測チャンネル範囲指定（片方向）",
                "en":"Channel range specification for cumulative amount of electric power consumption measurement(one direction)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
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
                "en":"Measured cumulative amount of electric power consumption(one direction)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測値リスト（片方向）", "en":"Measured instantaneous current list (simplex)"},
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":2,
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
                                                    "size":1,
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
                "en":"Channel range specification for instantaneous power consumption measurement (simplex)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xB7":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値リスト（片方向）", "en":"Measured instantaneous power consumption list (simplex)"},
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
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
                                    {
                                        "type":"number",
                                        "format":"int32",
                                        "unit":"W",
                                        "minimum":-2147483647,
                                        "maximum":2147483645
                                    },
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
            "propertyName":{"ja":"計測チャンネル数（双方向）", "en":"Number of measurement channels (duplex)"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    { "$ref":"#/definitions/number_1-252" },
                    { "$ref":"#/definitions/state_Undefined" }
                ]
            }
        },
        "0xB9":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{
                "ja":"積算電力量計測チャンネル範囲指定（双方向）",
                "en":"Channel range specification for cumulative amount of electric power consumption measurement (duplex)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBA":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"積算電力量計測値リスト（双方向）", "en":"Measured cumulative amount of electric power consumption list (duplex)"},
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":4,
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
                                                    "size":1,
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
                                                    "size":1,
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
                "en":"Channel range specification for instantaneous current measurement (duplex)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBC":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電流計測値リスト（双方向）", "en":"Measured instantaneous current list (duplex)"},
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"listOfData",
                        "element":{
                            "type":"array",
                            "itemSize":2,
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
                                                    "size":1,
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
                "en":"Channel range specification for instantaneous power consumption measurement (duplex)"
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    }
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"E", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値リスト（双方向）", "en":"Measured instantaneous power consumption list (duplex)"},
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
                                { "$ref":"#/definitions/state_Undefined" }
                            ]
                        }
                    },
                    {
                        "name":"range",
                        "element":{
                            "oneOf":[
                                { "$ref":"#/definitions/number_1-60" },
                                { "$ref":"#/definitions/state_Undefined" }
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
                                    {
                                        "type":"number",
                                        "format":"int32",
                                        "unit":"W",
                                        "minimum":-2147483647,
                                        "maximum":2147483645
                                    },
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
            "propertyName":{"ja":"積算電力量計測値（正方向）", "en":"Measured cumulative amount of electric energy (normal direction)"},
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
            "propertyName":{"ja":"積算電力量計測値（逆方向）", "en":"Measured cumulative amount of electric energy (reverse direction)"},
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
                        "element":{
                            "type":"number",
                            "format":"uint16",
                            "unit":"day",
                            "minimum":0,
                            "maximum":99
                        }
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
                        "element":{
                            "type":"number",
                            "format":"uint16",
                            "unit":"day",
                            "minimum":0,
                            "maximum":99
                        }
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
                "en":"Day of which the historical data of measured cumulative amounts of electric energy is to be retrieved"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"day",
                "minimum":0,
                "maximum":99
            },
            "note":{"ja":"Atomic operation with EPC=0xC3 and 0xC4", "en":"Atomic operation with EPC=0xC3 and 0xC4"}
        },
        "0xC6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"瞬時電力計測値", "en":"Measured instantaneous amounts of electric energy"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"number",
                        "format":"int32",
                        "unit":"W",
                        "minimum":-2147483647,
                        "maximum":2147483645
                },
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
            "propertyName":{"ja":"瞬時電圧計測値", "en":"Measured instantaneous voltage"},
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
            "className":{"ja":"スマート電力量メータ", "en":"Smart Electric Energy Meter"},
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
                    "validRelease":{"from":"A", "to":"E"},
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
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"定時積算電力量計測値（正方向）", "en":""},
                    "accessRule":{"get":"required_c", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_11" }
                },
                "0xEB":{
                    "validRelease":{"from":"A", "to":"E"},
                    "propertyName":{"ja":"定時積算電力量計測値（逆方向）", "en":""},
                    "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
                    "data":{ "$ref":"#/definitions/raw_11" }
                }
            }
        },
        {
            "validRelease":{"from":"F", "to":"latest"},
            "className":{"ja":"低圧スマート電力量メータ", "en":"Low Voltage Smart Electric Energy Meter"},
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
                    "data":{
                        "type":"number",
                        "format":"uint8",
                        "minimum":1,
                        "maximum":8
                    }
                },
                "0xE0":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"積算電力量計測値（正方向計測値）", "en":"Measured cumulative amount of electric energy (normal direction)"},
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
                                "element":{
                                    "type":"number",
                                    "format":"uint16",
                                    "unit":"day",
                                    "minimum":0,
                                    "maximum":99
                                }
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
                        "en":"Measured cumulative amount of electric energy (reverse direction)"
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
                                "element":{
                                    "type":"number",
                                    "format":"uint16",
                                    "unit":"day",
                                    "minimum":0,
                                    "maximum":99
                                }
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
                        "ja":"積算履歴収集日１",
                        "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved 1"
                    },
                    "accessRule":{"get":"required", "set":"required", "inf":"optional"},
                    "data":{
                        "type":"number",
                        "format":"uint8",
                        "unit":"day",
                        "minimum":0,
                        "maximum":99
                    },
                    "note":{"ja":"Atomic operation with EPC=0xE2 and 0xE4", "en":"Atomic operation with EPC=0xE2 and 0xE4"}
                },
                "0xE7":{
                    "validRelease":{"from":"F", "to":"latest"},
                    "propertyName":{"ja":"瞬時電力計測値", "en":"Measured instantaneous electric energy"},
                    "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
                    "data":{
                        "oneOf":[
                            {
                                "type":"number",
                                "format":"int32",
                                "unit":"W",
                                "minimum":-2147483647,
                                "maximum":2147483645
                            },
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
                        "en":"Cumulative amounts of electric energy measured at fixed time (normal direction)"
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
                        "en":"Cumulative amounts of electric energy measured at fixed time (reverse direction)"
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
                                "element":{
                                    "type":"date-time",
                                    "size":6
                                }
                            },
                            {
                                "name":"numberOfDataSet",
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":1,
                                    "maximum":12
                                }
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
                                "element":{
                                    "type":"number",
                                    "format":"uint8",
                                    "minimum":1,
                                    "maximum":12
                                }
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
"0x028A":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"高圧スマート電力量メータ", "en":"High Voltage Smart Electric Energy Meter"},
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
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1,
                "maximum":8
            }
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
                        "element":{
                            "type":"number",
                            "format":"uint16",
                            "unit":"day"
                        }
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
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
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
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
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
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
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
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1,
                "maximum":8
            }
        },
        "0xCD":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"力測積算無効電力量（遅れ）単位",
                "en":"Unit of measurement data of cumulative amaount of reactive electric power consumption(lag)"
            },
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
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
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "atomic":"0xE1",
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"day",
                        "element":{
                            "type":"number",
                            "format":"uint16",
                            "unit":"day"
                        }
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
            "data":{
                "type":"number",
                "format":"uint32",
                "minimum":0,
                "maximum":999999
            }
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
            "propertyName":{"ja":"確定日", "en":"Fixed Date"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"day",
                "minimum":1,
                "maximum":31
            }
        },
        "0xE1":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"積算履歴収集日",
                "en":"Day for which the historical data of measured cumulative amounts of electric energy is to be retrieved"
            },
            "accessRule":{"get":"required", "set":"required", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "unit":"day",
                "minimum":0,
                "maximum":99
            },
            "note":{"ja":"0:当日", "en":"0:current day"}
        },
        "0xE2":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"積算有効電力量計測値", "en":"Measured cumulative amounts of active electric energy"},
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
        "0xE5":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{
                "ja":"積算有効電力量有効桁数",
                "en":"Number of effective digits for cumulative amount of active electric energy"
            },
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1,
                "maximum":8
            }
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
                        "element":{
                            "type":"number",
                            "format":"uint16",
                            "unit":"day",
                            "minimum":0,
                            "maximum":99
                        }
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
"0x0290":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"一般照明", "en":"General Lighting"},
    "elProperties":{
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
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                            {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                            {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                            {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}}
                        ]
                    }
                },
                {
                    "validRelease":{"from":"C", "to":"latest"},
                    "propertyName":{"ja":"光色設定", "en":"Light color setting"},
                    "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
                    "data":{
                        "type":"state",
                        "size":1,
                        "enum":[
                            {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                            {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                            {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                            {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}},
                            {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
                        ]
                    }
                }
            ]
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"照度レベル段数設定", "en":"Brightness level step setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"光色レベル段数設定", "en":"Light color step setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":255
                        }
                    },
                    {
                        "name":"color",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":255
                        }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":255
                        }
                    },
                    {
                        "name":"color",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":255
                        }
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
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
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
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
        },
        "0xBB":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時光色設定", "en":"Light color setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                    {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                    {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                    {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
                ]
            }
        },
        "0xBC":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"通常灯モード時光色レベル段数設定", "en":"Light color level step setting for main lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
        },
        "0xBD":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時光色設定", "en":"Light color setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"電球色", "en":"Incandescent lamp color"}},
                    {"edt":"0x42", "state":{"ja":"白色", "en":"White"}},
                    {"edt":"0x43", "state":{"ja":"昼白色", "en":"Daylight white"}},
                    {"edt":"0x44", "state":{"ja":"昼光色", "en":"Daylight color"}},
                    {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
                ]
            }
        },
        "0xBE":{
            "validRelease":{"from":"C", "to":"latest"},
            "propertyName":{"ja":"常夜灯モード時光色レベル段数設定", "en":"Light color level step setting for night lighting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"number",
                "format":"uint8",
                "minimum":1
            }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"green",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"blue",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    }
                ]
            }
        }
    }
},
"0x0291":{
    "validRelease":{"from":"F", "to":"latest"},
    "className":{"ja":"単機能照明", "en":"Mono Functional Lighting"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"F", "to":"latest"},
            "propertyName":{"ja":"照度レベル設定", "en":"Illuminance Level"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_0-100%" }
        }
    }
},
"0x02A1":{
    "validRelease":{"from":"G", "to":"latest"},
    "className":{"ja":"電気自動車充電器", "en":"EV Charger Discharger"},
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
            "validRelease":{"from":"G", "to":"latest"},
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
            "data":{
                "type":"number",
                "format":"uint16",
                "unit":"V",
                "minimum":0,
                "maximum":32766
            }
        },
        "0xD3":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"瞬時充放電電力計測値", "en":"Measured instantaneous charging/discharging electric energy"},
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x00", "state":{"ja":"リセット", "en":"Reset"}}
                ]
            }
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
                    {"edt":"0x40", "state":{"ja":"その他", "en":"other"}}
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":24
                        }
                    },
                    {
                        "name":"ids",
                        "element":{
                            "type":"array",
                            "itemSize":1,
                            "maxItems":24,
                            "items":{
                                "type":"number",
                                "format":"uint8"
                            }
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
            "data":{ "$ref":"#/definitions/number_0-65533", "unit":"Ah", "multipleOf":0.1 }
        }
    }
},
"0x03B7":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"冷凍冷蔵庫", "en":"refrigerator"},
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"運転中", "en":"in progress"}},
                    {"edt":"0x42", "state":{"ja":"停止中", "en":"stopped"}}
                ]
            }
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xA9":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室加湿動作設定", "en":"Vegetable compartment humidification function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xAD":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"脱臭動作設定", "en":"Deodorization function setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ON", "en":"ON"}},
                    {"edt":"0x42", "state":{"ja":"OFF", "en":"OFF"}}
                ]
            }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"required", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
        },
        "0xB1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開放警告状態", "en":"Door open warning"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"required"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"警告有", "en":"Warning"}},
                    {"edt":"0x42", "state":{"ja":"警告無", "en":"No warning"}}
                ]
            }
        },
        "0xB2":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷蔵室ドア開閉状態", "en":"Refrigerator compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
        },
        "0xB3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"冷凍室ドア開閉状態", "en":"Freezer compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
        },
        "0xB4":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"氷温室ドア開閉状態", "en":"Ice compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
        },
        "0xB5":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"野菜室ドア開閉状態", "en":"Vegetable compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
        },
        "0xB6":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"切換室ドア開閉状態", "en":"Multi-refrigerating mode compartment door status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":1,
                            "maximum":255
                        }
                    },
                    {
                        "name":"level",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
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
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"freezer",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"ice",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"vegetable",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
                    },
                    {
                        "name":"multi",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "minimum":0,
                            "maximum":255
                        }
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
            "propertyName":{"ja":"切換室温度レベル設定", "en":"Multi-refrigera- ting mode compartment temperature level setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{ "$ref":"#/definitions/number_1-255" },
            "note":{"ja":"最大値はEPC=0xE0の値", "en":"maximum value is at EPC=0xE0"}
        }
    }
},
"0x03B8":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"オーブンレンジ", "en":"Combination Microwave Oven"},
    "elProperties":{
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
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
                    {"edt":"0x43", "state":{"ja":"完了報知中", "en":"Reporting complettion of heating cycle"}},
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
                    {
                        "type":"number",
                        "format":"uint8",
                        "minimum":0,
                        "maximum":254
                    },
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
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":5
                    },
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
                    {
                        "type":"number",
                        "format":"int16",
                        "unit":"Celsius",
                        "minimum":-2732,
                        "maximum":32766,
                        "multipleOf":0.1
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[
                            {"edt":"0x8001", "state":{"ja":"自動設定", "en":"Auto"}},
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
                    {
                        "type":"number",
                        "format":"int16",
                        "unit":"Celsius",
                        "minimum":-2732,
                        "maximum":32766,
                        "multipleOf":0.1
                    },
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
            "accessRule":{"get":"notApplicable", "set":"optional", "inf":"optional"},
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
    "className":{"ja":"クッキングヒータ", "en":"Cooking Heater"},
    "elProperties":{
        "0x96":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"OFFタイマ相対時間設定", "en":"OFF timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
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
        "0xE3":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"加熱温度設定値", "en":"Heating temperature setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"object",
                "properties":[
                    {
                        "name":"leftStove",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "unit":"Celsius",
                            "minimum":50,
                            "maximum":250
                        }
                    },
                    {
                        "name":"rightStove",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "unit":"Celsius",
                            "minimum":50,
                            "maximum":250
                        }
                    },
                    {
                        "name":"farSideStove",
                        "element":{
                            "type":"number",
                            "format":"uint8",
                            "unit":"Celsius",
                            "minimum":50,
                            "maximum":250
                        }
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
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4007", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}}
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
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4007", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}}
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
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4007", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}}
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
                                {
                                    "type":"state",
                                    "size":2,
                                    "enum":[
                                        {"edt":"0x4002", "state":{"ja":"とろ火", "en":"Very low flame"}},
                                        {"edt":"0x4004", "state":{"ja":"弱火", "en":"Low flame"}},
                                        {"edt":"0x4006", "state":{"ja":"中火", "en":"Medium flame"}},
                                        {"edt":"0x4007", "state":{"ja":"強火", "en":"High flame"}},
                                        {"edt":"0x400A", "state":{"ja":"ハイパワー", "en":"High power"}}
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            "note":{"ja":"0x3000-0x3010はレベル値", "en":"0x3000-0x3010 is level value"}
        }
    }
},
"0x03D3":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"洗濯乾燥機", "en":"Washer and Dryer"},
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
                    {"edt":"0x43", "state":{"ja":"時刻予約のみ入", "en":"Time--based reservation functions is ON"}},
                    {"edt":"0x44", "state":{"ja":"相対時間予約のみ入", "en":"Relative time--based reservation functions is ON"}}
                ]
            }
        },
        "0x91":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ時刻設定", "en":"ON timer time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0x92":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ相対時間設定", "en":"ON timer relative time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xB0":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ドア開閉状態", "en":"Door open/close status"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"開", "en":"open"}},
                    {"edt":"0x42", "state":{"ja":"閉", "en":"Close"}}
                ]
            }
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
                    {"edt":"0xAC", "state":{"ja":"時間指定", "en":"user difinition of drying time"}},
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
                    {"edt":"0xAC", "state":{"ja":"時間指定", "en":"user difinition of drying time"}},
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
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":16
                    },
                    {
                        "type":"level",
                        "base":"0xA0",
                        "maximum":8
                    },
                    {
                        "type":"level",
                        "base":"0xC0",
                        "maximum":8
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"number",
                        "format":"uint16",
                        "unit":"rpm",
                        "minimum":0,
                        "maximum":4095
                    },
                    {
                        "type":"level",
                        "base":"0xA000",
                        "maximum":2048
                    },
                    {
                        "type":"level",
                        "base":"0xC000",
                        "maximum":2048
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[{"edt":"0xF7FF", "state":{"ja":"自動", "en":"Auto"}}]
                    }
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
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":16
                    },
                    {
                        "type":"level",
                        "base":"0xA0",
                        "maximum":8
                    },
                    {
                        "type":"level",
                        "base":"0xC0",
                        "maximum":8
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xDC":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"乾燥残り時間", "en":"Remaining drying time"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xDF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"ONタイマ経過時間", "en":"Elapsed time on the ON timer"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"time",
                "size":2
            }
        },
        "0xE1":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"つけおき行程時間設定値", "en":"Presoaking time setting"},
            "accessRule":{"get":"optional", "set":"optional", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"time"
                    },
                    {
                        "type":"level",
                        "base":"0xA000",
                        "maximum":60
                    },
                    {
                        "type":"level",
                        "base":"0xC000",
                        "maximum":60
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[{"edt":"0xFFFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"number",
                        "format":"uint8",
                        "unit":"L",
                        "minimum":0,
                        "maximum":127
                    },
                    {
                        "type":"level",
                        "base":"0xA0",
                        "maximum":32
                    },
                    {
                        "type":"level",
                        "base":"0xC0",
                        "maximum":32
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"level",
                        "base":"0x31",
                        "maximum":16
                    },
                    {
                        "type":"level",
                        "base":"0xA0",
                        "maximum":8
                    },
                    {
                        "type":"level",
                        "base":"0xC0",
                        "maximum":8
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"time"
                    },
                    {
                        "type":"level",
                        "base":"0xA000",
                        "maximum":60
                    },
                    {
                        "type":"level",
                        "base":"0xC000",
                        "maximum":60
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[{"edt":"0xFFFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"number",
                        "format":"uint8",
                        "minimum":0,
                        "maximum":8
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"number",
                        "format":"uint8",
                        "unit":"minutes",
                        "minimum":0,
                        "maximum":59
                    },
                    {
                        "type":"level",
                        "base":"0xA0",
                        "maximum":32
                    },
                    {
                        "type":"level",
                        "base":"0xC0",
                        "maximum":32
                    },
                    {
                        "type":"state",
                        "size":1,
                        "enum":[{"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                    {
                        "type":"time"
                    },
                    {
                        "type":"level",
                        "base":"0xA000",
                        "maximum":60
                    },
                    {
                        "type":"level",
                        "base":"0xC000",
                        "maximum":60
                    },
                    {
                        "type":"state",
                        "size":2,
                        "enum":[{"edt":"0xFFFF", "state":{"ja":"自動", "en":"Auto"}}]
                    }            
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
                            {"edt":"0xFF", "state":{"ja":"自動", "en":"Auto"}}
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"入り", "en":"Wrinkling minimization function ON"}},
                    {"edt":"0x42", "state":{"ja":"切り", "en":"Wrinkling minimization function OFF"}}
                ]
            }
        },
        "0xED":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥残り時間", "en":"Time remaining to complete washer and dryer cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "oneOf":[
                    {
                        "type":"time"
                    },
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
            "data":{
                "type":"state",
                "size":1,
                "enum":[
                    {"edt":"0x41", "state":{"ja":"ロック", "en":"Lock"}},
                    {"edt":"0x42", "state":{"ja":"アンロック", "en":"Unlock"}}
                ]
            }
        },
        "0xEF":{
            "validRelease":{"from":"A", "to":"latest"},
            "propertyName":{"ja":"洗濯乾燥行程情報", "en":"Washer and dryer cycle"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{ "$ref":"#/definitions/raw_24" }
        }
    }
},
"0x05FD":{
    "validRelease":{"from":"A", "to":"latest"},
    "className":{"ja":"スイッチ", "en":"Switch"},
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
            "data":{
                "type":"date-time",
                "size":4
            }
        },
        "0xCA":{
            "validRelease":{"from":"G", "to":"latest"},
            "propertyName":{"ja":"管理対象機器登録情報更新年月日", "en":"Registerd information renewal date of the device to be controlled"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"date-time",
                "size":4
            }
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
            "propertyName":{"ja":"管理対象機器以上発生状態", "en":"Fault status of device to be controlled"},
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
            "propertyName":{"ja":"設置場所", "en":"Address of installation location"},
            "accessRule":{"get":"optional", "set":"notApplicable", "inf":"optional"},
            "data":{
                "type":"raw",
                "minSize":1,
                "maxSize":255
            }
        }
    }
}
    }
}