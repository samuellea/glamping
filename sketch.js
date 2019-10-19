let keywords = ['b'];

let filterTerms = ['b', 'c'];

let res = filterTerms.every(elem => keywords.indexOf(elem) > -1);
console.log(res);