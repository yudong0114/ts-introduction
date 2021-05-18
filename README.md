# 概要
* とらゼミの「日本一わかりやすいTypeScript入門」を学習

# 進捗
1. [概要](https://youtu.be/kd8VH10jXwc)
2. [tsconfigとWebpackの設定を理解して環境構築](https://youtu.be/qSHlXcSces8)
3. [ESLintとPrettierでコードの品質を高めよう](https://youtu.be/R35LJL6a-p0)

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

# 3.ESLintとPrettierでコードの品質を高めよう

## 内容
  * パッケージのインストール
  * prettierの設定
    * `printWidth`：1行にどれだけの文字を入れるか
    * `singleQuote`：シングルクォート使用時とかのバグチェック
    * `semi`：文末にセミコロンをつけるかどうか
  * ESLintの設定
    * `prettier`：`extends`に最後に記載
    * `parser`：`TypeScript`を解析するparserを指定
    * `parserOptions`：tsconfig.jsonの設定値を見るように
    * `root`：このファイルがルートというのを明示
  * `husky` + `ESLint`&`Prettier`でGitコミット(フックの設定をpackage.jsonに記載)
    * `$ git commit`を行う
    * `husky`実行
    * `pre-commit hook`実行
    * `lint-staged`呼び出し
    * `ESLint`と`Prettier`実行
    * `Git`にアップ

## メモ
### ESLint
  * JSの検証ツール、コーディングスタイルの一貫性を維
### Prettier
  * コードフォーマッター、プロジェクトごとにルールを設定し、コードを整形できる
### eslint-config-prettier
  * `eslint`と`prettier`を併用する際に設定を反映させる
### @typescript-eslint/eslint-plugin
  * ESLintでTypeScriptのチェックを行うプラグイン
### @typescript-eslint/parser
  * ESLintでTypeScriptを解析するプラグイン
### husky
  * Gitコマンドをフックに別のコマンドを実行させるためのパッケージ
### lint-staged
  * コミットしたファイルにlintを実行する
### パス指定の`**`
  * 階層もワイルドカードで指定できる
### VSCodeのESLintで.eslintrc.jsのエラーの対処
  * [参考サイト](https://wonwon-eater.com/ts-eslint-import-error/)
