// オプションパラメータを持つ関数のテスト
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: User is singed in! Username is ', username)
    return true
  } else {
    console.log('Function parameters sample 2: User is not singed in!')
    return false
  }
}

// デフォルトパラメータを持つ関数のテスト(コンパイル時に型推論によりusernameの型定義は空になります)
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: User is singed in! Username is ', username)
    return true
  } else {
    console.log('Function parameters sample 4: User is not singed in!')
    return false
  }
}

// レストパラメータを持つ関数のテスト
export const sumProductsPrice = (...productsPrice: number[]): number => {
  // reduceメソッド：配列の各要素に対して処理を実行(ここではコールバック関数として足し算の処理)し、単一の出力値を生成
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    console.log(prevTotal + '===' + productPrice)
    return (prevTotal += productPrice)
  }, 0)
}
