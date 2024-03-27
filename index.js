// Question 1
console.log("Question 1:")

// Transforming the given array of objects into an object using .reduce()
const data = [
  {key: "item", value: "Pencil"},
  {key: "price", value: 250},
  {key: "inStock", value: true}
]

const dataObj = data.reduce((accumulator, currentValue) => {
  accumulator[currentValue.key] = currentValue.value
  return accumulator
}, {})

console.log(dataObj)

// Question 2
console.log("\nQuestion 2:")

// Converting the given array of objects into an array of colors using .reduce()
const students = [
  {item: "Pen", color: "blue"},
  {item: "Pen", color: "black"},
  {item: "Pen", color: "red"}
]

const studentPenColors = students.reduce((acc, curr) => {
  acc.push(curr.color)
  return acc
}, [])

console.log(studentPenColors)

// Question 3
console.log("\nQuestion 3:")

// Converting the given array of objects into an array of cities using .reduce()
const countries = [
  { item: "Car", manufacturingCity: "New York" },
  { item: "Car", manufacturingCity: "Los Angeles" },
  { item: "Car", manufacturingCity: "Chicago" }
]

const cities = countries.reduce((acc, curr) => {
  acc.push(curr.manufacturingCity)
  return acc
},[])

console.log(cities)

// Question 4
console.log("\nQuestion 4:")

// array of objects into an array of fruits using .reduce()
const groceryItems = [
  { item: "Fruit", name: "Apple" },
  { item: "Fruit", name: "Banana" },
  { item: "Fruit", name: "Orange" }
]

const shoppedFruits = groceryItems.reduce((acc, curr) => {
  acc.push(curr.name)
  return acc
}, [])

console.log(shoppedFruits)

// Question 5
console.log("\nQuestion 5:")

// array of objects into an object using .reduce()
const details = [
  { key: "category", value: "Electronics" },
  { key: "rating", value: 4.5 },
  { key: "available", value: true }
]

const productData = details.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
}, {})

console.log(productData)