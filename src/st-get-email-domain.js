import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain( email) {
  let domain = email.substring(email.lastIndexOf('@')+1)
  return domain
}

console.log(getEmailDomain( '.unusual.com@usual.com'));