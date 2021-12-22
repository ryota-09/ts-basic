export default function typeAliasSample() {
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: "Tokyo",
    language: "Japanese",
    name: "Japan",
  }

  console.log("@@@@@@@@@@", japan)

  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  type Adventurer = Knight | Wizard
  type Paladin = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: "木の剣",
    swordSkill: "三連斬り",
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: "木の杖",
    magicSkill: "ファイアーボール",
  }

  console.log("@@@@@@@@@", adventurer1, adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: "銀の剣",
    swordSkill: "三連切り",
    magicSkill: "ファイアーボール",
  }

  console.log("@@@@@@@@@@@@@@@@@@@", paladin)
}
