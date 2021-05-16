# 概要
* 日本一わかりやすいTypeScript入門

# 進捗
1. [概要](https://youtu.be/kd8VH10jXwc)
2. [tsconfigとWebpackの設定を理解して環境構築](https://youtu.be/qSHlXcSces8)

# 2.tsconfigとWebpackの設定を理解して環境構築

## 内容
  * node環境構築
  * npm initで初期化
  * パッケージのインストール
    * `--save-dev`：開発環境だけで使わないものにはこのオプション
    * `--save`：本番環境でも使う場合
  * TypeScript環境の構築
    * `$ npm i typescript -g`で`tsc`コマンドを使えるように設定
    * `$ tsc --init`で初期設定
  * Webpackの設定
    * `webpack.config.js`に設定記述(内容はファイルにコメントの記載)
  * tsconfigの設定
    * `tsconfig.json`に設定記述(内容はファイルにコメントの記載)
  * 実際に実行する(HTMLにjsから内容の表示)
    * ローカルでtsファイルをコンパイルし確認
      * `$ npm run start`
    * tsファイルをビルド
      * `$ npm run build`

## メモ
### Webpack
  * 依存関係を考慮しながら1つのJSファイルにまとめる(バンドル)
### TypeScript
  * コンパイラでTSをJSに変換
### ts-loader(パッケージ)
  * Webpackと連動してTSコンパイラを起動
### webpack-cli
  * コマンドラインでwebpackを使う
### webpack-dev-server
  * 開発環境でWebpackのビルド
  * 開発用Webサーバーの起動
  * ホットリロード