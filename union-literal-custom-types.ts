/**
 * UNION TYPES
 * exp: The input 1 and 2 can be of type number or type string
 *
 * LITERAL TYPES
 * exp: The resultConversion must be "as-number" or "as-text"
 */

/*
 * CUSTOM TYPES
 */
type Combinable = number | string
type ResultConversion = "as-number" | "as-text"

const combine = (input1: Combinable, input2: Combinable, resultConversion: ResultConversion) => {
  let result
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resultConversion === "as-number") {
    return parseFloat(result)
  } else {
    return result.toString()
  }
}

const combinedAges = combine(30, 26, "as-number")
console.log(combinedAges)

const combinedStringAges = combine("30", "26", "as-number")
console.log(combinedStringAges)

const combinedNames = combine("Max", "Ann", "as-text")
console.log(combinedNames)
