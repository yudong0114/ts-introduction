// ※ファイル名を間違えるとエラーになります
// インポート(pathは初期で導入されているのでどこからでもrequire可能)
const path = require('path');

// webpackの設定
module.exports = {
  // entry：バンドルを行う起点
  entry: {
    bundle: './src/index.ts'
  },
  // output：どこに出力するか
  output: {
    path: path.join(__dirname, 'dist'),
    // [name] = bundle(entryのキーと同じになる)
    filename: '[name].js'
  },
  // resolve：名前解決(インポート/エクスポートなど)
  resolve: {
    // 以下ファイルの拡張子を省略可能に設定
    extensions: ['.ts', '.js']
  },
  // devServer：開発用のサーバーの設定
  devServer: {
    // 参照するディレクトリ
    contentBase: path.join(__dirname, 'dist'),
    // ローカルのdevサーバーを立ち上げた時に自動でブラウザを立ち上げる
    open: true
  },
  // module：適用するルール
  module: {
    rules: [
      {
        // ローダーにts-loaderを使用
        loader: 'ts-loader',
        // tsファイルに対してコンパイラを使用
        test: /\.ts$/
      }
    ]
  }
}