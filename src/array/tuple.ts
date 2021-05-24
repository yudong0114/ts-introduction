// tupleのテスト
export default function tupleSample(): void {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'OK']
  // response = [400, 'Bad Request', 'hogehoge'] // -> 2つが正しいのに3つのためエラー
  // response = ['400', 'Bad Request'] // -> 1つ目がnumberが正しいのにstringのためエラー
  console.log('Array tuple sample 1:', response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko']
  girlfriends.push('Misa')
  console.log('Array tuple sample 2:', girlfriends)
}
