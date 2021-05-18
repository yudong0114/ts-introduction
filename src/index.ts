// インポート
import World from './world'

// index.htmlの#rootのDOMを取得
const root = document.getElementById('root')
// インスタンスの初期化
const world = new World('Hello TypeScript!')
// メソッドの実行
world.sayHello(root)
