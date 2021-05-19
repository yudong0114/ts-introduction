// プリミティブ型のテスト
export default function primitiveSample() {
  // 型定義をした場合、VSCode上でのESLintのエラーが表示される(型推論についてのエラー)
  // コミットした場合、ESLintの影響で、
  // ・「型推論により、明示的な形定義のコードの削除」
  // ・「letで複数回使われていない場合constに置き換え」が行われる
  // let name: string = 'テスト 名前' -> const name = 'テスト 名前'

  // プリミティブ型：string
  const name = 'テスト 名前'
  // name = 123 -> numberなのでエラー
  console.log('primitive sample 1:', typeof name, name)

  // プリミティブ型：number
  const age = 25
  // age = '25' -> stringなのでエラー
  console.log('primitive sample 2:', typeof age, age)

  // プリミティブ型：boolean
  const isSingle = false
  // isSingle = 'false' -> stringなのでエラー
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  // プリミティブ型：[応用]判定式のboolean
  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
