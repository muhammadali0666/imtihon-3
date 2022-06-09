// 1-masala
let arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(Number(prompt("Raqam kiriting:")));
}
function sum(arr) {
  let sum = 0;
  arr.forEach((e) => {
    sum += e;
  });
  return sum;
}

console.log(sum(arr));

// 2-masala
let music = ["Jazz", "Blues"];
console.log(music);

music.push("Rock-n-roll");
console.log(music);

music[1] = "Classicis";
console.log(music);

music.shift();
console.log(music);

music.unshift("Rap");
music.unshift("Reggae");
console.log(music);

// 3-masala

let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

function sumSalaries(salaries) {
  let value = Object.values(salaries);
  console.log(value);
  let coin = 0;

  for (let salary of value) {
    coin += salary;
  }
  return coin;
}
console.log(sumSalaries(salaries));

// 4-masala

let val = [9, 2, 3, 4, 5];
let juftArr = [];
let toqArr = [];

function calcSum(val) {
  for (let i of val) {
    if (val[i] % 2 != 0) {
      toqArr.push(val[i]);
    }
    if (val[i] % 2 == 0) {
      juftArr.push([val[i]]);
    }
  }
  return `${toqArr}, ${juftArr}`;
}
console.log(calcSum(val));
// 4 chi natija chiqmadi
