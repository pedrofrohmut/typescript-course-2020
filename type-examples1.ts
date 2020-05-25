/**
 * TypeScript Types
 * - number: both integer and floats
 * - string: text values or char arrays
 * - boolean: True or False. But not "truthy" or "Falsy"
 * - object: a generic way to specify an object in typescript
 * - array: Any JS array with flexible types or stricted ones
 * - Tuple: (TS) Fixed lenth array. Usually length of 2
 * - enum: (TS) to enumerate constants
 * - any: any kind of value, to not specify one
 */

// TypeScript interface of an object assignment
interface Person {
  name: string
  age?: number
  hobbies: string[] // string array
  role: [number, string] // tuple
  role2: Role
}

// basic Enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

// enum can accept any kind of values
enum Role2 {
  ADMIN = "Admin",
  READ_ONLY = "ReadOnly",
  AUTHOR = "Author"
}

const person: Person = {
  name: "Pedro Frohmut",
  age: 31,
  hobbies: ["Fishing", "Camping"],
  role: [1, "author"],
  role2: Role.AUTHOR
}

const person2: Person = {
  name: "Camila",
  hobbies: ["Painting", "Play guitar"],
  role: [2, "singer"],
  role2: Role.ADMIN
}

console.log(person)
console.log(person2)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role2 === Role.ADMIN) console.log("Person is Admin")
if (person2.role2 === Role.ADMIN) console.log("Person2 is Admin")
