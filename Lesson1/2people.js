const peoples = ['Sudeep', 'Shrestha', 'Tej', 'Bahadur', 'Shrestha']
const ages = [25,26,27,28,29]
    
console.log('this is without exports.',peoples);

// to emit or send or export data module.exports is used and in another it is not mandaroty to write the same variable as this page.
module.exports = peoples; // to send or export single data
module.exports = {peoples, ages}; // to send or export multiple data