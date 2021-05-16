// classの定義
export default class World {
  // 変数の定義
  message: string;
  // コンストラクタ
  constructor(message: string) {
    this.message = message;
  }

  /**
   * 指定の要素にテキスト(message)の内容を追加
   * @param elem テキストを追加する要素
   */
  public sayHello(elem: HTMLElement | null) {
    // elemの中身がある場合
    if (elem) {
      // 要素にテキストの追加
      elem.innerText = this.message;
    }
  }
}