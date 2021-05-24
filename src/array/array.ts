// arrayのテスト
export default function arraySample(): void {
  // シンプルな型定義
  const colors: string[] = ['red', 'blue']
  colors.push('green')
  // colors.push(123) -> numberなのでエラー
  console.log('Array array sample 1:', colors)

  const even: Array<number> = [2, 4, 6]
  even.push(8)
  // even.push('10') -> stringなのでエラー
  console.log('Array array sample 2:', even)

  // 合併型
  const ids: (string | number)[] = ['ABC', 123]
  ids.push('DEF')
  ids.push(456)
  // ids.push(true) -> boolなのでエラー
  console.log('Array array sample 3:', ids)

  // 配列の型推論
  // 本来は以下のようにも書ける
  // const generateSomeArray = (): (string | number)[] => {
  const generateSomeArray = () => {
    const _someArray = [] // この時点ではany[]
    _someArray.push(123) // この時点ではnumber[]
    _someArray.push('ABC') // この時点では(string | number)[]
    return _someArray
  }

  const someArray = generateSomeArray()
  someArray.push(456)
  // someArray.push(true) -> boolなのでエラー
  console.log('Array array sample 4:', someArray)

  // イミュータブルな配列を作る
  const commands: readonly string[] = ['git add', 'git commit', 'git push']
  // commands.push('git feach') // -> エラー(push関数自体が存在しないことになる)
  // commands[2] = 'git pull' // -> エラー
  console.log('Array array sample 5:', commands)
}
