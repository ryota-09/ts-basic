export default function notExistSample() {
  const name = null
  console.log("@@@@@@@@", typeof name, name)

  if (name !== null) {
    console.log("nullじゃない")
  } else {
    console.log("nullです")
  }
}
