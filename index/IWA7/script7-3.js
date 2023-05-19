const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.210001'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(-1*leoBalance) + parseFloat(-1*sarahBalance)
const leo = console.log(`${leoName} ${leoSurname}(\Owed\ \R\ ${-1*leoBalance})`)
const sarah = console.log(`${sarahName}${sarahSurname} (\Owed\ \R\ ${-1*sarahBalance})`)
const total = "Total amount owed:R "

const result ='\n'+ divider + '\n' + total + owed + '\n' + divider;  
console.log(result)
