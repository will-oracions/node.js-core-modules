//const url = require('url');

const myUrl = new URL('http://will-oracions.com/course?category=web&status=active'); 

console.log(myUrl.href);

console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

myUrl.searchParams.append('abc', '123');

console.log(myUrl.search);

console.log(myUrl.searchParams);


myUrl.searchParams.forEach((name, value) => console.log(name, ':', value));



