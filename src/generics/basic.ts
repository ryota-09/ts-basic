export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("@@@@@@@@@@", stringReduce(["1", "2", "3", "4"], "ああああああ"))

  type genericReduce<T> = {
    (array: T[], initialValue: T): T
  }

  const genericStringReduce: genericReduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log("@@@こっちです", genericStringReduce(["1", "2", "3", "4"], "ああああああ"))
}
