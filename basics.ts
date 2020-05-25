// Compile time error catchers
const add = (num1: number, num2: number, showResult: boolean, phrase?: string) => {
  // Runtime Error catchers
  if (typeof num1 !== "number") throw new Error("Num1 is not a number. Invalid Input")
  if (typeof num2 !== "number") throw new Error("Num2 is not a number. Invalid Input")
  const result = num1 + num2
  if (showResult) {
    if (phrase !== undefined) console.log(`${phrase} ${result}`)
    else console.log(`${result}`)
  }
  return result
}

const a = 5
const b = 2.8
const printResult = true
const phrase = "The result is:"

add(a, b, printResult, phrase)

const result = add(a, b, printResult)

console.log("A + B = ", result)
