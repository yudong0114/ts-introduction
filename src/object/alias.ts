// objectのテスト
export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    launguage: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    launguage: 'Japanese',
    name: 'Japan',
  }
  console.log('Object alias sample 1', japan)

  // Countryの再利用
  const america: Country = {
    capital: 'Washington, D.C.',
    launguage: 'English',
    name: 'United States of America',
  }
  console.log('Object alias sample 2', america)

  // 合併型(union)と交差型(intersection) ※RPGを例に
  // 騎士
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }
  // 魔法使い
  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 冒険者
  // 合併型： KnightまたはWizardの型を持つ
  type Adventurer = Knight | Wizard

  // 魔法剣士
  // 交差型： KnightかつWizardの型を持つ
  type Paladin = Knight & Wizard

  // Knight寄りの冒険者(合併型) ※注意点として合併型なのでここに「mp: 1234」も書くことが可能
  const adventure1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連切り',
  }

  // Wizard寄りの冒険者(合併型)
  const adventure2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  }

  console.log('Object alias sample 3', adventure1)
  console.log('Object alias sample 4', adventure2)

  // Paladinの魔法剣士(交差型)
  const paladin1: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '銀の剣',
    swordSkill: '三連切り',
    magicSkill: 'ファイアボール',
  }

  console.log('Object alias sample 5', paladin1)
}
