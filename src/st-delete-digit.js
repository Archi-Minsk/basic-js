import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let str = String(n);
   let arr= str.split('');
   let number = Math.min(...arr);
    let newArr= arr.filter(i=>i!=number);
    let num = newArr.join('')
    return +num
}
 


