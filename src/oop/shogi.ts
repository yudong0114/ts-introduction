// 将棋の盤
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// 先手 or 後手
type Player = 'first' | 'second'

// 駒の位置を示すクラス
class Position {
  // 初期化
  constructor(private suji: Suji, private dan: Dan) {}

  // メソッド
  /**
   * パラメーターに渡された位置と現在の位置を比較するメソッド
   *
   * @param position
   * @param player
   */
  distanceFrom(position: Position, player: Player) {
    // 先手の場合
    if (player === 'first') {
      return {
        // Math.abs： 絶対値を返すように
        suji: Math.abs(position.suji - this.suji),
        dan: Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
    // 後手の場合
    else {
      return {
        // Math.abs： 絶対値を返すように
        suji: Math.abs(position.suji - this.suji),
        // 段(縦の位置)は正負反転
        dan: -Math.abs(Number(position.dan) - Number(this.dan)),
      }
    }
  }
}

// 抽象化クラス：駒を現すクラス(直接インスタンス化は不可)
abstract class Piece {
  // プロパティ
  // Positionクラスの型をプロパティに指定
  // Pieceクラスとサブクラスでアクセス可能
  protected position: Position

  // 初期化
  constructor(private readonly player: Player, suji: Suji, dan: Dan) {
    this.position = new Position(suji, dan)
  }

  // メソッド
  /**
   * 駒の移動用のメソッド
   *
   * @param position 駒の移動位置
   */
  moveTo(position: Position) {
    this.position = position
  }

  /**
   * 移動できるかどうかを判定するメソッド
   * 駒ごとでしかここは判定できないため、abstractとし、
   * 具体的な中身はサブクラス(Oshoクラス)で処理を記載
   *
   * @param position 駒の移動位置
   * @param player 先手か後手か
   */
  abstract canMoveTo(position: Position, player: Player): boolean
}

// 王将の駒を現すクラス
class Osho extends Piece {
  // メソッド
  /**
   * 移動できるかどうかを判定するメソッド(本体)
   * 王将のcanMoveToメソッドを具体的に実装する
   *
   * @param position 駒の移動位置
   * @param player 先手か後手か
   * @returns
   */
  canMoveTo(position: Position, player: Player): boolean {
    // 移動位置を求める
    const distance = this.position.distanceFrom(position, player)
    // 王将のルール：条件式が合っていればtrue
    return distance.suji < 2 && distance.dan < 2
  }
}

// 歩の駒を現すクラス
class Fu extends Piece {
  // メソッド
  /**
   * 移動できるかどうかを判定するメソッド(本体)
   * 歩のcanMoveToメソッドを具体的に実装する
   *
   * @param position 駒の移動位置
   * @param player 先手か後手か
   * @returns
   */
  canMoveTo(position: Position, player: Player): boolean {
    // 移動位置を求める
    const distance = this.position.distanceFrom(position, player)
    // 歩のルール：条件式が合っていればtrue
    return distance.suji === 0 && distance.dan === 1
  }
}

// 成金の駒を現すクラス
class Narikin extends Fu {
  // メソッド
  /**
   * 移動できるかどうかを判定するメソッド(本体)
   * 成金のcanMoveToメソッドを具体的に実装する
   *
   * @param position 駒の移動位置
   * @param player 先手か後手か
   * @returns
   */
  canMoveTo(position: Position, player: Player): boolean {
    // 移動位置を求める
    const distance = this.position.distanceFrom(position, player)
    // 成金のルール：条件式が合っていればtrue
    return (
      distance.suji < 2 &&
      distance.dan < 2 &&
      // 成金のルール(追加)：左後方と右後方には進めない
      distance.suji !== 0 &&
      distance.dan === -1
    )
  }
}

// 駒の生成&初期化
class Game {
  // プロパティ
  // 駒の生成
  private pieces = Game.makePieces()

  // メソッド
  /**
   * 駒の配置
   *
   * @returns 特定の駒のインスタンスを生成
   */
  private static makePieces() {
    return [
      // 先手
      new Osho('first', 5, '1'),
      new Fu('first', 1, '3'),
      new Fu('first', 2, '3'),
      new Fu('first', 3, '3'),
      new Fu('first', 4, '3'),
      new Fu('first', 5, '3'),
      new Fu('first', 6, '3'),
      new Fu('first', 7, '3'),
      new Fu('first', 8, '3'),
      new Fu('first', 9, '3'),
      // 後手
      new Osho('second', 5, '9'),
      new Fu('second', 1, '6'),
      new Fu('second', 2, '6'),
      new Fu('second', 3, '6'),
      new Fu('second', 4, '6'),
      new Fu('second', 5, '6'),
      new Fu('second', 6, '6'),
      new Fu('second', 7, '6'),
      new Fu('second', 8, '6'),
      new Fu('second', 9, '6'),
    ]
  }
}

new Game()
