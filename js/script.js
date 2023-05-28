'use strict'

//========================================================================================================================================================

// const lines = 5
// let result = ''

// for (let i = 0; i <= lines; i++) {
//    for (let j = 0; j < lines - i; j++) {
//       result += ' '
//    }

//    for (let k = 0; k < 2 * i + 1; k++) {
//       result += '*'
//    }

//    result += '\n'
// }

// console.log(result)

//========================================================================================================================================================

// function calculateVolumeAndArea(number) {
//    let result = ''

//    if (typeof number === 'number' && number > 0 && Number.isInteger(number)) {
//       const volume = number * number * number
//       const area = number * number * 6

//       result = `Объем куба: ${volume}, площадь всей поверхности: ${area}`
//    } else result = 'При вычислении произошла ошибка'

//    return result
// }

//========================================================================================================================================================

// function getCoupeNumber(number) {
//    let result = ''

//    if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
//       result = 'Ошибка. Проверьте правильность введенного номера места'
//    } else if (number === 0 || number > 36) {
//       result = 'Таких мест в вагоне не существует'
//    } else {
//       result = Math.ceil(number / 4)
//    }
//    return result
// }

//========================================================================================================================================================

// function getTimeFromMinutes(initMinutes) {
//    let result = ''

//    if (typeof initMinutes !== 'number' || initMinutes < 0 || !Number.isInteger(initMinutes)) {
//       result = 'Ошибка, проверьте данные'
//    } else {
//       let hours = Math.floor(initMinutes / 60)
//       let minutes = initMinutes - hours * 60

//       switch (hours) {
//          case 0:
//          case 5:
//          case 6:
//          case 7:
//          case 8:
//          case 9:
//          case 10:
//             hours = hours + ' часов'
//             break
//          case 1:
//             hours = hours + ' час'
//             break
//          default:
//             hours = hours + ' часа'
//             break
//       }

//       result = `Это ${hours} и ${minutes} минут`
//    }
//    return result
// }

//========================================================================================================================================================

// function findMaxNumber() {
//    if (
//       arguments.length < 4 ||
//       typeof arguments[0] !== 'number' ||
//       typeof arguments[1] !== 'number' ||
//       typeof arguments[2] !== 'number' ||
//       typeof arguments[3] !== 'number'
//    ) {
//       return 0
//    } else {
//       return Math.max(...arguments)
//    }
// }

//========================================================================================================================================================

// function fib(number) {
//    if (typeof number !== 'number' || number <= 0) {
//       return ''
//    } else {
//       let result = ''
//       let first = 0
//       let second = 1

//       for (let i = 0; i < number; i++) {
//          if (i + 1 === number) {
//             result += `${first}`
//          } else {
//             result += `${first} `
//          }

//          let third = first + second
//          first = second
//          second = third
//       }
//       return result
//    }
// }

//========================================================================================================================================================

// const personalPlanPeter = {
//    name: 'Peter',
//    age: '29',
//    skills: {
//       languages: ['ru', 'eng'],
//       programmingLangs: {
//          js: '20%',
//          php: '10%',
//       },
//       exp: '1 month',
//    },
//    showAgeAndLangs(object) {
//       const {
//          age,
//          skills: { languages },
//       } = object

//       let result = ''
//       result += `Мне ${age} и я владею языками:`

//       languages.forEach((element) => {
//          result += ` ${element.toUpperCase()}`
//       })

//       return result
//    },
// }
// personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// function showExperience({ skills: { exp } }) {
//    return exp
// }

// showExperience(personalPlanPeter)

// function showProgrammingLangs({ skills: { programmingLangs } }) {
//    let result = ''
//    for (const lang in programmingLangs) {
//       result += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`
//    }
//    return result
// }

// console.log(showProgrammingLangs(personalPlanPeter))

//========================================================================================================================================================

// const arr = ['Peter', 'Ann', 'Alex', 'Linda']

// function showFamily(array) {
//    let str = 'Семья состоит из:'

//    if (array.length > 0) {
//       array.forEach((el) => {
//          str += ` ${el}`
//       })
//    } else return 'Семья пуста'

//    return str
// }

// console.log(showFamily(arr))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']

// function standardizeStrings(arr) {
//    arr.forEach((element) => {
//       console.log(element.toLowerCase())
//    })
// }

// standardizeStrings(favoriteCities)

//========================================================================================================================================================

// const someString = 'This is some strange string'

// function reverse(str) {
//    if (typeof str != 'string') {
//       return 'Ошибка!'
//    } else {
//       const arr = str.split('').reverse().join('')
//       return arr
//    }
// }

// function reverse2(str) {
//    let res = ''
//    if (typeof str === 'string') {
//       for (let i = str.length - 1; i >= 0; i--) {
//          res += `${str[i]}`
//       }
//       console.log(res)
//    } else res = 'Ошибка!'
//    return res
// }
// reverse(someString)
// reverse2(someString)

//========================================================================================================================================================

// const baseCurrencies = ['USD', 'EUR']
// const additionalCurrencies = ['UAH', 'RUB', 'CNY']

// function availableCurr(arr, missingCurr) {
//    const avalaibleCurr = arr.filter((el) => el != missingCurr)
//    let res = ''

//    if (!arr.length) res = 'Нет доступных валют'
//    else {
//       res = 'Доступные валюты:\n'
//       avalaibleCurr.forEach((element) => {
//          res += `${element}\n`
//       })
//    }
//    return res
// }

// const totalCurrencies = [...baseCurrencies, ...additionalCurrencies]

// availableCurr(totalCurrencies, 'EUR')

//========================================================================================================================================================

// const shoppingMallData = {
//    shops: [
//       {
//          width: 10,
//          length: 5,
//       },
//       {
//          width: 15,
//          length: 7,
//       },
//       {
//          width: 20,
//          length: 5,
//       },
//       {
//          width: 8,
//          length: 10,
//       },
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000,
// }

// function isBudgetEnough(data) {
//    const { shops, height, moneyPer1m3, budget } = data

//    const shopsArea = shops.reduce((prevArea, shop) => {
//       return (prevArea += shop.width * shop.length)
//    }, 0)

//    const totalVolume = shopsArea * height

//    return totalVolume * moneyPer1m3 > budget ? 'Бюджета недостаточно' : 'Бюджета достаточно'
// }

// console.log(isBudgetEnough(shoppingMallData))

//========================================================================================================================================================

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']

// function sortStudentsByGroups(arr) {
//    const copy = [...arr]
//    const sortedArr = copy.sort()

//    const res = []
//    let str = 'Оставшиеся студенты:'

//    for (let i = 0; i <= students.length / 3; i++) {
//       if (sortedArr.length === 0) {
//          str += ' -'
//          res.push(str)
//       } else if (sortedArr.length < 3) {
//          sortedArr.forEach((el, index) => {
//             if (index === sortedArr.length - 1) {
//                str += ` ${el}`
//             } else str += ` ${el},`
//          })
//          res.push(str)
//       } else {
//          res.push(sortedArr.splice(0, 3))
//       }
//    }
//    return res
// }

// console.log(sortStudentsByGroups(students))

//========================================================================================================================================================

// function pow(x, n) {
//    if (n === 0) {
//       return 0
//    }
//    if (n === 1) {
//       return x
//    } else {
//       return pow(x, n - 1) * x
//    }
// }

// console.log(pow(2, 4))

// function factorial(n) {
//    if (!Number.isInteger(n) || typeof n !== 'number') {
//       return 'Введите целое число'
//    } else if (n <= 0) {
//       return 1
//    } else {
//       return factorial(n - 1) * n
//    }
// }

// console.log(factorial(5))

//========================================================================================================================================================

// function amountOfPages(summary) {
//    let str = ''
//    let lastValue

//    for (let i = 1; i <= summary; i++) {
//       if (str.length < summary) {
//          lastValue = i
//          str += i
//       } else break
//    }

//    return lastValue
// }

// console.log(amountOfPages(185))

//========================================================================================================================================================

// const str = 'The quick brown fox jumps over the lazy dog'

// function isPangram(string) {
//    const set = new Set()

//    for (let i = 0; i < string.length; i++) {
//       if (string[i] !== ' ') {
//          if (set.has(string[i].toLowerCase())) {
//             continue
//          } else {
//             set.add(string[i].toLowerCase())
//          }
//       }
//    }

//    return set.size === 26
// }

// console.log(isPangram(str))

//========================================================================================================================================================

// const arr = [[[[[[[[[]]]]]]]]]

// function deepCount(a) {
//    let counter = 0

//    for (let i = 0; i < a.length; i++) {
//       if (Array.isArray(a[i])) {
//          counter++
//          counter += deepCount(a[i])
//       } else {
//          counter++
//       }
//    }

//    return counter
// }

// console.log(deepCount(arr))

//========================================================================================================================================================

// const arr = [
//    { value: 1 },
//    { value: 2 },
//    5,
//    6,
//    7,
//    'test',
//    'test2',
//    'test3',
//    'test4',
//    false,
//    null,
//    undefined,
//    [123],
//    [456],
// ]

// const res = arr.reduce((resObj, el) => {
//    if (typeof el === 'object') {
//       if (Array.isArray(el)) {
//          if (resObj.has('Array')) {
//             resObj.set('Array', [...resObj.get('Array'), el])
//          } else resObj.set('Array', [el])
//       } else if (!el) {
//          if (resObj.has('null')) {
//             resObj.set('null', [...resObj.get('null'), el])
//          } else resObj.set('null', [el])
//       } else {
//          if (resObj.has('object')) {
//             resObj.set('object', [...resObj.get('object'), el])
//          } else resObj.set('object', [el])
//       }
//    } else {
//       if (resObj.has(typeof el)) {
//          resObj.set(typeof el, [...resObj.get(typeof el), el])
//       } else resObj.set(typeof el, [el])
//    }

//    return resObj
// }, new Map())

// const obj = Object.fromEntries(res.entries())
// console.log(obj)

//========================================================================================================================================================

// new Promise((resolve, reject) => {
//    setTimeout(() => {
//       const response = {
//          value: 100,
//       }

//       if (response) {
//          resolve(response)
//       } else {
//          reject(new Error('Some error'))
//       }
//    }, 3000)
// })
//    .then((response) => {
//       console.log(response)
//    })
//    .catch((error) => {
//       console.log(error.message)
//    })

//========================================================================================================================================================
