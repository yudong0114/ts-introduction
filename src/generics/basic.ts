// ジェネリック型のテスト
export default function genericsBasicSample(): void {
  // ジェネリック型を使わない場合(String版)
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 1:', stringReduce(['This ', 'is ', 'a ', 'pen.'], ''))

  // ジェネリック型を使わない場合(Number版)
  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 2:', numberReduce([100, 200, 300], 0))

  // ジェネリック型を使う場合
  // 型を定義
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  // ジェネリック型を使う場合(String版)
  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 3:', genericStringReduce(['This ', 'is ', 'a ', 'penpen.'], ''))

  // ジェネリック型を使う場合(Number版)
  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }
  console.log('Generics basic sample 4:', genericNumberReduce([100, 200, 300], 0))

  // いろいろなジェネリック型の定義方法
  // 完全な呼び出しシグネチャ（個々のシグネチャにジェネリック型を割り当てる）
  type GenericReduce2 = {
    <T>(array: T[], initialValue: T): T
    <U>(array: U[], initialValue: U): U
  }

  //呼び出しシグネチャの省略記法
  type GenericReduce3<T> = (array: T[], initialValue: T) => T
  type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
