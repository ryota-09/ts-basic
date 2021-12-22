export default function objectSample() {
  const country: {
    language: string
    readonly name: string
    gender?: string
  } = {
    language: "japanese",
    name: "japan",
  }

  country.gender = "male"

  console.log("@@@@@@@", country)
}
