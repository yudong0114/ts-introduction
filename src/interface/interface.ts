// interfaceのテスト
// interfaceを宣言
interface Bread {
  calories: number
}
// 同名のinterfaceを宣言 -> マージされる
interface Bread {
  type: string
}
// Breadを使用 -> 「calories」と「type」の2つが必要
const francePan: Bread = {
  calories: 300,
  type: 'hard',
}

// 型エイリアスで表現
type MaboDofu = {
  calories: number
  spicyLevel: number
}
type Rice = {
  calories: number
  gram: number
}
// MaboDofuとRiceの型をMaboDonに掛け合わせる
type MaboDon = MaboDofu & Rice // 交差型(intersection)
// MaboDonを使用 -> 「calories」と「spicyLevel」と「gram」の3つが必要
const maboDon: MaboDon = {
  calories: 1000,
  spicyLevel: 10,
  gram: 350,
}

// interfaceの継承
// interfaceを宣言
interface Book {
  page: number
  title: string
}
// Bookを継承
interface Magazine extends Book {
  cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
}
// Magazineを使用
const jump: Magazine = {
  page: 300,
  title: '週刊少年ジャンプ',
  cycle: 'weekly',
}

// Type AliasをInterfaceに継承
// Type Alias宣言
type BookType = {
  page: number
  title: string
}
// Type AliasをInterfaceに継承
interface HandBook extends BookType {
  theme: string
}
// HandBookを使用
const mapple: HandBook = {
  page: 100,
  title: 'まっぷる',
  theme: '旅行',
}

// implementsを使ってclassに型を実装する
class Comic implements Book {
  // プロパティの定義(interfaceで宣言した型はここに作用)
  page: number
  title: string
  // コンストラクタ
  constructor(page: number, title: string, private publishYear: string) {
    this.page = page
    this.title = title
  }
  // ゲッタのメソッド作成
  getPublishYear() {
    return this.title + 'が発売されたのは' + this.publishYear + '年です。'
  }
}
// インスタンスの初期化
const popularComic = new Comic(200, '鬼滅の刃', '2016')
console.log(popularComic.getPublishYear())
