// objectのテスト
export default function objectSample() {
  // object型で型定義(エラー：Don't use `object` as a type. The `object` type is currently hard to use)
  // const a: object = {
  //   name: 'Taro',
  //   age: 25
  // }
  // a.name -> エラーになる

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2', country)

  // オプショナルとreadonly
  const profile: {
    age: number
    lastname: string
    readonly firstname: string
    gender?: string
  } = {
    age: 25,
    lastname: 'Yamada',
    firstname: 'Katsumi',
  }

  profile.gender = 'male'
  profile.lastname = 'Nagano'
  // profile.firstname = 'Makoto' -> readonlyのためエラー

  console.log('Object object sample 3', profile)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4', capitals)
}
