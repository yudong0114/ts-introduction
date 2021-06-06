// async/awaitのテスト
export default async function promiseSample() {
  // APIのURL
  const url = 'https://api.github.com/users/yudong0114'

  // jsonの型定義
  type Profile = {
    login: string
    id: number
  }

  // 関数の型定義
  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = async () => {
    // fetchしてレスポンスがあるか
    const response = await fetch(url)
      // レスポンスがあれば、resを返す
      .then((res) => res)
      // レスポンスがなければ、nullを返す
      .catch((error) => {
        console.error(error)
        return null
      })

    // レスポンスがnullではないか
    if (!response) {
      return null
    }

    // jsonかたbosyの読み取り・リターン
    const json = await response
      .json()
      // jsonが取得できればjsonを返す
      .then((json: Profile) => {
        console.log('Asynchronous async/await Sample 1:', json)
        return json
      })
      // jsonが取得できなければ、nullを返す
      .catch((error) => {
        console.error(error)
        return null
      })

    // jsonの内容がnullではないか
    if (!json) {
      return null
    }

    // 問題なければjsonをリターンを返す
    return json
  }

  // APIのProfileを取得する関数を実行
  const profile = await fetchProfile()
  // Profileを取得できていれば、ログを出力酢r
  if (profile) {
    console.log('Asynchronous async/await Sample 2:', profile)
  }
}
