# elDdViewer 設計メモ

2019.07.03

## Abstract
　elDdViewerは「ECHONET Lite機器オブジェクト詳細規定」と同等の内容をブラウザーで表示するアプリケーションである。HTML5（HTML/CSS/JavaScript）で構成されているので、オフラインのWebブラウザー上で動作する。  
　「ECHONET Lite機器オブジェクト詳細規定」のデータはJSONで記述され、JavascriptのファイルelDeviceDescription.jsとして読み込まれる。現時点で35機種Release K対応である。対応機器を追加したり、最新のReleaseに対応するには、JSONデータをupdateしてから、DeviceDescription.jsをupdateする。なお、JSON dataのversionはV3.1.0である。JSON dataの記述フォーマットが修正された場合には、elDdViererの修正が必要になる。

## How to Launch
HTMLフォルダ内のindex.htmlをChromeなどのWebブラウザーで開く

## Frameworks
以下のFrameworksを利用している。  
jQueryは基本的にVue.jsが利用している。HTML内で一部jQueryを直接利用している。

- Vue.js
- Bootstrap
- jQuery

## Files
- elDdViewer.js: メインのJavaScriptプログラム
- elDeviceDescription.js: JSONデータを読み込むためのプログラム
- index.html: メインのHTMLファイル
- lib: Vue.js, Bootstrap, jQueryのフォルダ
- note.html: 備考を表示するためのHTMLファイル
- parseJSON.js: オリジナルのJSONデータをもとに、指定された機器オブジェクト・リリースのJSONデータを作成する。definitionsの処理もおこなう。
- test.js: parseJSON.jsのテストファイル

