'use strict';
// es6 module syntax
// import { hoursToMin } from './helper';
// commonJs inmport/export
const { hoursToMin } = require('./helper');
console.log('app.js');

const name = 'James';

const fullName = `${name} Bond`;

console.log('fullName ===', fullName);

// paversti 12 valandu i minutes app.js

console.log(hoursToMin(12));
