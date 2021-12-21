export default function primitiveSample() {
  const name = "マック"
  console.log("@@@@", typeof name, name)

  const age = 26
  console.log("@@@@@@@", typeof age, age)

  const isSingle = true
  console.log("@@@@@@", typeof isSingle, isSingle)

  const isOver: boolean = age > 20
  console.log("@@@@@@@@@@", typeof isOver, isOver)
}
