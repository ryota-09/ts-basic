export default function tupleSample() {
  const response: [number, string] = [200, "OK"]
  //response = [400, 'red', 'blue']
  console.log("@@@@@@@@", response)

  const girlfrends: [string, ...string[]] = ["kana", "misa", "maiko", "sana"]
  girlfrends.push("reiko")
  console.log(girlfrends)
}
