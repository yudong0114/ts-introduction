# 概要
* とらゼミの「日本一わかりやすいTypeScript入門」を学習

# 進捗
1. [概要](https://youtu.be/kd8VH10jXwc)
2. [tsconfigとWebpackの設定を理解して環境構築](https://youtu.be/qSHlXcSces8)
3. [ESLintとPrettierでコードの品質を高めよう](https://youtu.be/R35LJL6a-p0)
4. [基本の型定義とアノテーション](https://youtu.be/KQhyHHQrcic)
5. [関数のパラメーターと戻り値に型をつける](https://youtu.be/obdbskaarVQ)
6. [型エイリアス(type)でオブジェクトの型定義](https://youtu.be/2DoYdw-rvL0)
7. [積極的に使いたい配列・タプルの型定義](https://youtu.be/BUSlgsUWn4I)
8. [ジェネリック型を使いながらポリモーフィズムを理解する](https://youtu.be/5JYZzB7MMvo)

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



# 4.基本の型定義とアノテーション

## 内容
  * 型推論と明示的な形定義
    * TypeScriptは型を勝手に決める
      * `const name = 'string'` -> `string`型！
    * 明示的に型を書くこともできる
      * `const name: string = 'string'` -> `string`型！
  * プリミティブ型
    * 文字列`string`：`const name: string = 'string'`
    * 正数/負数`number`：`const age: number = 25`
    * 真偽直`boolean`：`const isOver20: boolean = true`
      * 判定式でも使える
  * 存在しないことを表現する
    * `null`：初期化されているけど(変数はあるけど)直が入っていない状態
    * `undefined`：初期化すらされていない
    * できる限り`undefined`を使う
  * TypeScriptはanyを回避する
    * `any`：なんの型でもいい -> なるべく使わない
    * `unknown`：どんな型になるのか不明
      * `unknown`は代入した直で型が変化



# 5.関数のパラメーターと戻り値に型をつける

## 内容
  * 関数で使われる型
    * `void`：return文を持たない関数の戻り値
    * `never`：戻ることのない関数の戻り値
  * オプションとデフォルト
    * `オプションパラメーター`
      * パラメータの最後に記述する(複数可)
      * オプショナルを示す`?`をつける
    * `デフォルトパラメーター`
      * パラメーターの順序関係なく記述可能
      * `=`で指定する(PHPに似てる)
  * 可変長引数に型をつける
    * `可変長引数`とは？
      * 関数の呼び出しの際に引数の数が自由
      * 型が安全ではない -> `×`
    * レストパラメーター
      * パラメーターに`...`を用いることで型定義可能
      * パラメーターの最後に1つだけ指定可能
  * 呼び出しシグネチャ
    * シグネチャ：`関数名`、`引数の数`、`データ型`、`戻り値の型`のことをいう
    * どのような関数なのか表現する型定義
    * 省略記法はアロー関数に似ている
    * 完全な記法はオブジェクトと似た形
    * Reactの関数コンポーネントとかでよく使う

# 6.型エイリアス(type)でオブジェクトの型定義

## 内容
  * object型には意味はない
    * object型はおべじぇctであることを伝えるだけ
    * オブジェクトリテラル記法を使おう
      * 構造を定義
      * 各プロパティに型
  * 特別なプロパティ
    * オプショナル(`?`)のついたプロパティはあってもなくてもOK
    * `readonly`のついたプロパティは上書きできない
  * オブジェクトの柔軟な型定義
    * インデックスシグネチャ
      * オブジェクトが複数のプロパティを持つ可能性を示す
      * keyはstringかnumberのみ
  * 型エイリアスで型定義を再利用
    * 型エイリアスとは
      * typeを使って、型に名前をつけて宣言できる
      * 同じ型を何度も定義する必要がない
      * 形に名前をつけることで変数の役割を明確化
  * 合併型(union)と交差型(intersection)
    * 合併型：型Aか型Bどちらかの型を持つ
    * 交差型：型Aと型B両方の型を持つ  
      ※「AとBに`共通する型ではない`」

# 7.積極的に使いたい配列・タプルの型定義

## 内容
  * 配列に秩序をもたらす型定義
    * 配列の要素として持つ値の型を定義できる
    * 型定義方法`T[]`と`Array<T>`は同じ
    * 合併型も使える(特別な理由がない限りは使わない方が良き)
  * 配列の型推論
    * アノテーションしなくても型推論される
  * 厳格な配列 = タプル
    * タプルは配列の各要素の数と型を定義できる
    * 可変長(レストパラメーター)も使える
  * イミュータブルな配列(`イミュータブル`：変更できない)
    * jsの配列はconstで宣言してもミュータブル(書き換え可)
    * `readonly`修飾子でイミュータブル(書き換え不可)な配列/タプルを使える

# 8.ジェネリック型を使いながらポリモーフィズムを理解する

## 内容
  * 型を抽象化するジェネリック型
    * 肩の種類は異なるが同じデータの構造を共通化させる
    * `ジェネリック型パラメーター`
      * 型をパラメーター化(後から日パラメーターを渡す)
      * `T` / `U` / `V` / `W`などがよく使われる
  * ジェネリックの宣言方法
    * 「呼び出しシグネチャの記法」と「ジェネリック型の割り当て範囲」によって異なる
  * 呼び出し側の共通化
    * `ポリモーフィズム`：色々な形に変化できること
    * ジェネリック型を用いると
      * 型を抽象化して共通化できる
      * 呼び出す時に具体的な型を渡す