// sukurti funkcija kuri paveircia valandas i minutes

export function hoursToMin(hoursAmmount) {
  return hoursAmmount * 60;
}

const n1 = hoursToMin(10);
console.log(' n1 ===', n1);
// exportuot ir panaudot app.js
