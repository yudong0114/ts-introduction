// コールバック関数のテスト
export default function callbackSample() {
  // APIのURL
  const url = 'https://api.github.com/users/yudong0114'

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return (
      fetch(url)
        // 非同期処理が終わった後に実行する処理
        .then((res) => {
          // レスポンスのBodyをJSONで読み取った結果を返す
          res
            .json()
            .then((json) => {
              console.log('Asynchronous Callback Sample 1:', json)
              return json
            })
            // JSONメソッドでのエラー時
            .catch((error) => {
              console.error(error)
            })
        })
        // 非同期処理でエラーの場合
        .catch((error) => {
          console.error(error)
        })
    )
  }

  const profile = fetchProfile()
  console.log('Asynchronous Callback Sample 2:', profile)
}
