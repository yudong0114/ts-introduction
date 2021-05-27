// ジェネリック型(応用)のテスト
export default function genericsAdvancedSample(): void {
  // map関数のシグネチャ
  // T型の配列を、コールバック関数で処理し、U型に変換、そしてU型の配列で返す
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  // String型の配列をNumber型で返す(Mapのシグネチャを流用)
  const mapStringToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  // Number型の配列をString型で返す(Mapのシグネチャを流用)
  const mapNumbersToString: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const strings = mapNumbersToString([123, 456, 789], (item) => String(item))
  console.log('Generics advanced sample 2:', strings)
}
