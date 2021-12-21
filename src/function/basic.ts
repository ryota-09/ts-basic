export const logMessage = (message: string): void => {
  console.log("@@@@@@", message)
}

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}
