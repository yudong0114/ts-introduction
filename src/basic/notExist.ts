// nullとundefinedのテスト
export default function notExistSample() {
  // nullのパターン
  let name = null
  // nullはなぜかobject型
  console.log('notExist sample 1:', typeof name, name)

  name = '太郎'
  // nullの場合(name === nullと同じ)
  if (!name) {
    console.log('notExist sample 2:', '名前はnullです！')
  }
  // nullではない場合
  else {
    console.log('notExist sample 3:', '名前は' + name)
  }

  // undefinedのパターン
  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  age = 25
  // nullの場合(name === undefinedと同じ)
  if (!age) {
    console.log('notExist sample 5:', '年齢はundefです！')
  }
  // nullではない場合
  else {
    console.log('notExist sample 6:', '年齢は' + age)
  }
}
