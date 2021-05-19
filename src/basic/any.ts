// any型のテスト
export default function anySample() {
  let name: any = 'any型！！' // ここではstring型を代入
  console.log('any sample 1:', typeof name, name)

  name = 25 // ここではnumber型を代入
  console.log('any sample 2:', typeof name, name)
}
