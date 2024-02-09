// to import data from the parent page to only log when there is no any exports code.
const show_people = require('./2people');

// here the parent page data can be imported when there is export code in parent page.
//this gives empty object when there is not exports code written
console.log('this is with exports.',show_people) // to import all together
console.log(show_people.peoples, show_people.ages) // to import seperately

// next case, just to access one array of data
const {peoples} = require('./2people')
console.log(peoples) //it only imports one array of data of people and does not bring ages

// to access multiple array of data
const {peoples,ages} = require('./2people')
console.log(peoples,ages) // whatever data is defined in import section it will import those data


//----------------------------------
const os =  require('os') // this os is built-in in node and os stands for operating system
// console.log(os) //it provides many associated functions
console.log(os.platform(), os.homedir())