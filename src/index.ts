// // インポート
// import World from './world'

// // index.htmlの#rootのDOMを取得
// const root = document.getElementById('root')
// // インスタンスの初期化
// const world = new World('Hello TypeScript!')
// // メソッドの実行
// world.sayHello(root)

// // 04. 基本の型定義とアノテーション
// import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/'

// primitiveSample()
// console.log('/*----------*/')
// notExistSample()
// console.log('/*----------*/')
// anySample()
// console.log('/*----------*/')
// unknownSample()

// // 05. 関数のパラメーターと戻り値に型をつける
// import {
//   logMessage,
//   logMessage2,
//   logMessage3,
//   logMessage4,
//   alwaysThronError,
//   logMessage6,
//   logMessage7,
// } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('Hello Typescript!')
// logMessage2('Hello Typescript!')
// logMessage3('Hello Typescript!')
// logMessage4('Hello Typescript!')
// // alwaysThronError('Hello Typescript!')
// logMessage6('Hello Typescript!')
// logMessage7('Hello Typescript!')
// isUserSignedIn('ABC', 'yamada katsumi')
// isUserSignedIn('DEF')
// isUserSignedIn2('ABC')
// isUserSignedIn2('DEF')
// const sum = sumProductsPrice(100, 200, 300, 400, 500)
// console.log('Function parameters sample 5:', sum)

// 06. 型エイリアス(type)でオブジェクトの型定義
import objectSample from './object/object'
import typeAliasSample from './object/alias'

objectSample()
typeAliasSample()
