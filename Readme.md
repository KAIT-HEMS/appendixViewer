# appendixViewer: ECHONET Lite Appendix Viewer

2020.08.20  

## Abstract

appendixViewerは「APPENDIX ECHONET機器オブジェクト詳細規定」と同等の内容をブラウザーで表示するアプリケーションである。  
appendixViewer is a viewer software to display equivalent information of Appendix Detailed requirements for ECHONET Device objects.

## Requirements

Web Browser  

## Installation

ファイルをダウンロードする。  
Download the files.

## Launch

htmlフォルダ内のindex.htmlをChromeなどのWeb Browserで開く。
Open index.html in html folder with a web browser such as Chrome.

## Release Note

Date      |Version |Desctiption
:---------|:------:|:-----------
2019.07.03|1.0.0   | 1st release
2019.07.12|1.0.1   | Device DescriptionをV3.1.2にupdate
2020.02.04|2020-02-04| Device DescriptionをV3.1.5r4に変更<br>データタイプがobjectの場合に備考欄に*が表示されないというバグを修正
2020.08.20|2020-08-20| Device DescriptionをV3.1.6r3に変更<br>起動時に、瞬間的に{{ }} が表示される現象への対応
2020.11.02|2020-11-02| Device DescriptionをV3.1.7に変更<br>値域が time の場合、値域表示を修正。<br>値域が date-time の場合、値域表示を修正。<br>値域が数値の場合、16進数表記を追加<br>値域が数値の場合、単位の係数を乗算した値を表記<br>値域がbitmapの場合、"bitmap" にアンダーラインを付加して、リンクがあることを表示）<br>データ型が array の場合の表示を修正。
