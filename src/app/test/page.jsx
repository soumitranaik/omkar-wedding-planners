"use client"
import { p } from 'motion/react-client'
import React from 'react'


const page = () => {
  return (
    <div>page</div>
  )
}

export default page
const reverse = (str) => {
    return str.split('').reverse().join('');
}
console.log(reverse('helo'))

const isPalindrome = (str) => {
    let reversed = str.split('').reverse().join('')
    return reversed === str;
}
console.log(isPalindrome('hesehs'))

const FIzzBuzz = () => {
    for (let i = 1; i<50; i++) {
        let output = '';
        if (i % 3 === 0) output += 'Fizz';
        if ( i % 5 ===0) output += 'Buzz';
        console.log(output || i)
    }
}

const highestNo = () =>{
    const array = [1,2,5,6,7]
    const max = Math.max(...array)
    console.log (max)
}
highestNo()

const Greet = () => {
    const names = ['A', 'C', 'R']
    names.forEach (name => {
       console.log(`Hello ${name}`)
    })
}
Greet()

const arr = [1,2,3,4,5]
const tripled = () => {
    arr.map(num => num*3)
}


