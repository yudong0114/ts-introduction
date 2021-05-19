// unknown型のテスト
export default function unknownSample() {
  const maybeNumber: unknown = 10 // ここではnumber型を代入
  console.log('unknown sample 1:', typeof maybeNumber, maybeNumber)

  const isFoo = maybeNumber === 'foo' // 判定することは可能
  console.log('unknown sample 2:', typeof isFoo, isFoo)

  // エラー：unknown型なので数値同士(number)での足し算はできないため
  // const sum = maybeNumber + 10

  // 先にtypeofで型チェックした場合は足し算可能になる
  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknown sample 3:', typeof sum, sum)
  }
}
