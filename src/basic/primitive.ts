// プリミティブ型のテスト
export default function primitiveSample() {
  // プリミティブ型：string(VSCode上でのESLintのエラーは型推論によるもの)
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
