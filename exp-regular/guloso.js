// guloso - casa com o máximo possível
// não guloso - casa com o mínimo possível

const { html } = require('./base');

const str1 = 'oi abbbbdss show';

console.log(str1.match(/ab*/g));  // [ 'abbbb' ]
console.log(str1.match(/ab*?/g)); // [ 'a' ]
console.log(str1.match(/ab+/g)); // [ 'abbbb' ]
console.log(str1.match(/ab+?/g)); // [ 'ab' ]
console.log(str1.match(/ab?/g)); // [ 'ab' ]
console.log(str1.match(/ab??/g)); // [ 'a' ]
console.log(str1.match(/ab{1,3}/g)); // [ 'abbb' ]
console.log(str1.match(/ab{1,3}?/g)); // [ 'ab' ]
console.log(str1.match(/.*/g)); // [ 'oi abbbbdss show', '' ]
console.log(str1.match(/.*w/g)); // [ 'oi abbbbdss show' ]
console.log(str1.match(/.*?/g)); // [ '', '', '', '', '', '', '',  '', '', '', '', '', '', '', '', '', '' ]
console.log(str1.match(/.+/g)); // [ 'oi abbbbdss show' ]
console.log(str1.match(/.+?/g)); // [ 'o', 'i', ' ', 'a', 'b', 'b', 'b', 'b', 'd', 's', 's', ' ', 's', 'h', 'o', 'w' ]

 
console.log(html);
// console.log(html.match(/<.+>/g));
// console.log(html.match(/<.+?>/g));
// console.log(html.match(/<.+?>.+?/g));