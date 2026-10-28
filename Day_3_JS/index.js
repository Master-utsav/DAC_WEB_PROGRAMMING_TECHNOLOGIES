
console.log('--- SECTION A ---')

// 1. Write a JS program to perform subtraction of two numbers
function subtractTwoNumbers (a, b) {
  return a - b
}
console.log('Section A Q1 (Subtraction 15 - 5):', subtractTwoNumbers(15, 5))

// 2. Write a JS program to perform multiplication of three numbers
function multiplyThreeNumbers (a, b, c) {
  return a * b * c
}
console.log(
  'Section A Q2 (Multiplication 2 * 3 * 4):',
  multiplyThreeNumbers(2, 3, 4)
)


console.log('\n--- SECTION B ---')

// 1. Write a program to find given number is even or odd.
function checkEvenOdd (num) {
  if (num % 2 === 0) {
    return `${num} is Even`
  } else {
    return `${num} is Odd`
  }
}
console.log('Section B Q1:', checkEvenOdd(7))

// 2. Write a program to find the greater number out of three numbers.
function findGreatest (a, b, c) {
  if (a >= b && a >= c) {
    return a
  } else if (b >= a && b >= c) {
    return b
  } else {
    return c
  }
}
console.log(
  'Section B Q2 (Greatest among 12, 45, 29):',
  findGreatest(12, 45, 29)
)

// 3. Write a program to print the day of week.
function getDayOfWeek (dayNum) {
  switch (dayNum) {
    case 1:
      return 'Sunday'
    case 2:
      return 'Monday'
    case 3:
      return 'Tuesday'
    case 4:
      return 'Wednesday'
    case 5:
      return 'Thursday'
    case 6:
      return 'Friday'
    case 7:
      return 'Saturday'
    default:
      return 'Invalid day number (Enter 1-7)'
  }
}
console.log('Section B Q3 (Day 3):', getDayOfWeek(3))

// 4. (COMPULSORY) Implement a calculator using if-else ladder (Take two numbers from prompt and operator from prompt)
function compulsoryCalculator () {
  alert('--- Section B Ques 4 (COMPULSORY): Calculator ---')
  let num1 = parseFloat(prompt('Calculator: Enter first number:'))
  let num2 = parseFloat(prompt('Calculator: Enter second number:'))
  let opr = prompt('Calculator: Enter operator (+, -, *, /):')

  let result
  if (opr === '+') {
    result = num1 + num2
  } else if (opr === '-') {
    result = num1 - num2
  } else if (opr === '*') {
    result = num1 * num2
  } else if (opr === '/') {
    if (num2 !== 0) {
      result = num1 / num2
    } else {
      result = 'Error: Division by zero'
    }
  } else {
    result = 'Invalid operator!'
  }

  console.log(`Section B Q4 Result: ${num1} ${opr} ${num2} = ${result}`)
  alert(`Calculator Result: ${num1} ${opr} ${num2} = ${result}`)
}
// Run Section B Compulsory Question
compulsoryCalculator()


console.log('\n--- SECTION C ---')

// 1. Write a program to check given string ends with "t" or not
function checkEndsWithT (str) {
  return str.endsWith('t') || str.endsWith('T')
}
console.log(
  "Section C Q1 ('JavaScript' ends with 't'):",
  checkEndsWithT('JavaScript')
)
console.log("Section C Q1 ('Python' ends with 't'):", checkEndsWithT('Python'))

// 2. Write a code to accept name of fruits from user and show in list
function displayFruitsList () {
  let fruitsInput = prompt(
    'Section C Q2: Enter fruit names separated by commas (e.g., Apple, Banana, Mango):'
  )
  if (fruitsInput) {
    let fruitsArr = fruitsInput.split(',')
    let ul = document.getElementById('fruit-list')
    if (ul) {
      ul.innerHTML = ''
      fruitsArr.forEach(fruit => {
        let li = document.createElement('li')
        li.textContent = fruit.trim()
        ul.appendChild(li)
      })
    }
  }
}
displayFruitsList()

console.log('\n--- SECTION D ---')
const numStrD = '1,2,3,4,5,6,7,8,9'

// 1. Fetch "1" and "5" from string and perform numerical addition
let arrD = numStrD.split(',')
let val1 = Number(arrD[0]) // "1"
let val5 = Number(arrD[4]) // "5"
console.log('Section D Q1 (1 + 5):', val1 + val5)

// 2. Fetch "2" and "8" from string and perform numerical multiplication
let val2 = Number(arrD[1]) // "2"
let val8 = Number(arrD[7]) // "8"
console.log('Section D Q2 (2 * 8):', val2 * val8)


console.log('\n--- SECTION E ---')

// 1. Write a code to print fibonacci series (1,1,2,3,5,8,13,21...) till 100.
function printFibonacciTill100 () {
  let fib = [1, 1]
  while (true) {
    let next = fib[fib.length - 1] + fib[fib.length - 2]
    if (next > 100) break
    fib.push(next)
  }
  console.log('Section E Q1 (Fibonacci series till 100):', fib.join(', '))
}
printFibonacciTill100()

// 2. Write a code to check the given string is palindrome or not. (abba)
function isPalindrome (str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  let reversedStr = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedStr
}
console.log("Section E Q2 ('abba' is palindrome):", isPalindrome('abba'))
console.log("Section E Q2 ('hello' is palindrome):", isPalindrome('hello'))


console.log('\n--- SECTION F ---')
const numStrF = '1,2,3,4,5,6,7,8,9'

// 1. Print only numbers not comma
let numbersOnly = numStrF.split(',').join(' ')
console.log('Section F Q1 (Numbers without commas):', numbersOnly)

// 2. Print all even numbers
let allNumArr = numStrF.split(',')
let evenNumbers = allNumArr.filter(n => Number(n) % 2 === 0)
console.log('Section F Q2 (Even numbers):', evenNumbers.join(', '))


console.log('\n--- SECTION G ---')

// 1. Write a code to take string input from user and remove duplicate words.
function removeDuplicatesFromPrompt () {
  let inputStr =
    prompt('Section G Q1: Enter a sentence with repeated words:') ||
    'hello world hello javascript world'
  let words = inputStr.split(/\s+/)
  let uniqueWords = [...new Set(words)]
  console.log('Section G Q1 (Original):', inputStr)
  console.log('Section G Q1 (Without duplicates):', uniqueWords.join(' '))
}
removeDuplicatesFromPrompt()

// 2. Write a code which accepts a sequence of comma separated five numbers and find the addition of all of them
function sumFiveCommaSeparatedNumbers () {
  let input = prompt(
    'Section G Q2: Enter 5 comma-separated numbers (e.g., 10,20,30,40,50):'
  )
  if (input) {
    let nums = input.split(',').map(n => Number(n.trim()))
    let sum = nums.reduce((acc, curr) => acc + curr, 0)
    console.log('Section G Q2 (Sum of 5 numbers):', sum)
  }
}
sumFiveCommaSeparatedNumbers()

// 3. Create a web page and take 3 employee details from prompt and show in table (Id, Name, Phone, Salary)
function getEmployeeDetailsAndRenderTable () {
  alert('--- Section G Ques 3: Employee Details Entry ---')
  let employees = []
  for (let i = 1; i <= 3; i++) {
    alert(`Enter details for Employee ${i}`)
    let id = prompt(`Employee ${i} ID:`)
    let name = prompt(`Employee ${i} Name:`)
    let phone = prompt(`Employee ${i} Phone:`)
    let salary = prompt(`Employee ${i} Salary:`)
    employees.push({ id, name, phone, salary })
  }

  let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                ${employees
                  .map(
                    emp => `
                    <tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.phone}</td>
                        <td>${emp.salary}</td>
                    </tr>
                `
                  )
                  .join('')}
            </tbody>
        </table>
    `

  document.getElementById('emp-table-container').innerHTML = tableHTML
}
getEmployeeDetailsAndRenderTable()

// 4. (COMPULSORY) Create a web page and take 3 Movies details from prompt and show in table (Movie Name, Price, Seat)
function getMovieDetailsAndRenderTable () {
  alert('--- Section G Ques 4 (COMPULSORY): Movie Details Entry ---')
  let movies = []
  for (let i = 1; i <= 3; i++) {
    alert(`Enter details for Movie ${i}`)
    let movieName = prompt(`Movie ${i} Name:`)
    let price = prompt(`Movie ${i} Price:`)
    let seat = prompt(`Movie ${i} Seat Number/Type:`)
    movies.push({ movieName, price, seat })
  }

  let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>Movie Name</th>
                    <th>Price</th>
                    <th>Seat</th>
                </tr>
            </thead>
            <tbody>
                ${movies
                  .map(
                    m => `
                    <tr>
                        <td>${m.movieName}</td>
                        <td>${m.price}</td>
                        <td>${m.seat}</td>
                    </tr>
                `
                  )
                  .join('')}
            </tbody>
        </table>
    `

  document.getElementById('movie-table-container').innerHTML = tableHTML
}

getMovieDetailsAndRenderTable()
