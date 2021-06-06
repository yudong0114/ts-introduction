// Promise型のテスト
export default function promiseSample() {
  // APIのURL
  const url = 'https://api.github.com/users/yudong0114'

  // jsonの型定義
  type Profile = {
    login: string
    id: number
  }

  // 関数の型定義
  type FetchProfile = () => Promise<Profile | null>

  const fetchProfile: FetchProfile = () => {
    // resolve：解決、reject：エラー
    return new Promise((resolve, reject) => {
      return (
        fetch(url)
          // 非同期処理が終わった後に実行する処理
          .then((res) => {
            // レスポンスのBodyをJSONで読み取った結果を返す
            res
              .json()
              .then((json: Profile) => {
                console.log('Asynchronous Promise Sample 1:', json)
                resolve(json)
              })
              // JSONメソッドでのエラー時
              .catch((error) => {
                console.error(error)
                reject(null)
              })
          })
          // 非同期処理でエラーの場合
          .catch((error) => {
            console.error(error)
            reject(null)
          })
      )
    })
  }

  fetchProfile()
    .then((profile: Profile | null) => {
      // nullじゃなければプロフィールを返す
      if (profile) {
        console.log('Asynchronous Promise Sample 2:', profile)
      }
    })
    .catch(() => {
      console.error('error')
    })
}
