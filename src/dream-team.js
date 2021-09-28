import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
      if(!Array.isArray(members)) return false;
      let newArr = members.filter(i=>typeof(i) === 'string');
      let title = newArr.map(i=>{
      let reg = /\S/g;
      let b = i.match(reg)
      return b[0].toUpperCase()
     });
     title.sort()
     return title.join('')
    
  
}


