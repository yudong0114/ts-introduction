// // インポート
// import World from './world'

// // index.htmlの#rootのDOMを取得
// const root = document.getElementById('root')
// // インスタンスの初期化
// const world = new World('Hello TypeScript!')
// // メソッドの実行
// world.sayHello(root)

// 03. 基本の型定義とアノテーション
import { primitiveSample, notExistSample, anySample, unknownSample } from './basic/'

primitiveSample()
console.log('/*----------*/')
notExistSample()
console.log('/*----------*/')
anySample()
console.log('/*----------*/')
unknownSample()
