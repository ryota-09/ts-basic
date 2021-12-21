export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === "ABC") {
    console.log("@@@@@@@@", "サインイン", username)
    return true
  } else {
    console.log("@@@@@@@@@@", "サインインしていません")
    return false
  }
}

export const isUserSignedIn2 = (userId: string, username = "NO NAME"): boolean => {
  if (userId === "ABC") {
    console.log("@@@@@@@@", "サインイン", username)
    return true
  } else {
    console.log("@@@@@@@@@@", "サインインしていません")
    return false
  }
}

export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}

type LogMessage = (message: string) => void
export const logMessage2: LogMessage = (message) => {
  console.log("@@@@@@@@", message)
}
