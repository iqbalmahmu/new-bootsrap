<<<<<<< HEAD
// // let name = "foysal";

// // console.log(name);

// // var myAray = ["foysal", "md rad", "iqbal", "mahmud"];

// // console.log(myAray);
// // // change arry to string method.
// // var changeString = myAray.toString();

// // console.log(changeString);

// // // join method .

// // var join = myAray.join("+");

// // console.log(join);

// // myAray.push("thunder");

// // console.log(myAray);

// // myAray.pop();
// // console.log(myAray);

// // myAray.unshift("strong man");

// // console.log(myAray);

// // myAray.shift();

// // console.log(myAray);

// // myAray.splice(1, 0, "iqbalmahmud");

// // console.log(myAray);

// // //slice method.
// // myAray.slice(3);
// // console.log(myAray);

// // myAray.sort();

// // console.log(myAray);

// // myAray.reverse();
// // console.log(myAray);

// // var num = [2, 4, 9, 113, 655, 64];

// // function max(num) {
// //   return Math.max.apply(null, num);
// // }

// // var hold = max(num);

// // console.log(hold);

// let random = Math.random();

// console.log(random);

// var num1 = 5.766;

// var get = Math.round(53.53);

// console.log(get);

// var another = Math.ceil(num1);

// console.log(another);

// var y = Math.floor(num1);

// console.log(y);

// var all = [5, 6, 8, 9, 23, 4, 546, 34];

// var take = Math.max.apply(null, all);

// console.log(take);

// var low = Math.min.apply(null, all);

// console.log(low);

// let firstArry = ["name", "age", "ocupation", "hobby"];

// let secondArray = ["foysal", "tweenty-five", "web-developer", "codding"];

// let addUp = firstArry.concat(secondArray);

// console.log(addUp);

// addUp[4] = "iqbalmahmud";

// let change = addUp[4];

// console.log(change);

// console.log(addUp);

// var copy = firstArry.copyWithin(2, 1);

// console.log(copy);
var ages = [15, 17, 29, 23, 21, 35, 38];

function checkAdult(ages) {
  return ages >= 21;
}

var store = checkAdult(ages);

console.log(checkAdult(ages));

// var make =

//     ages.every(checkAdult);

//     console.log(make)

if (store === true) {
  console.log("u can inter the room");
} else {
  console.log("sorry paal u can not inter the room");
}

var b = ["dhte ", "the", "de", "eiek"];

var c = b.fill("all the name");

console.log(c);

var d = ages.find(checkAdult);

console.log(d);

var x = ages.filter(checkAdult);

console.log(x);

var f = ages.findIndex(checkAdult);
console.log(f);
=======
// const companises = [
//   {
//     name: "wrc",
//     catagory: "atumotive",
//     start: 2004,
//     end: "present",
//   },
//   {
//     name: "nagamotor",
//     catagory: "atomobile",
//     start: 2006,
//     end: "present",
//   },
//   {
//     name: "red-zon",
//     catagory: "atumotive",
//     start: 2003,
//     end: "present",
//   },
//   {
//     name: "nisan",
//     catagory: "car-wash",
//     start: 2004,
//     end: "present",
//   },
//   {
//     name: "ktm",
//     catagory: "body-painting",
//     start: 2005,
//     end: "present",
//   },
//   {
//     name: "other",
//     catagory: "atumotive",
//     start: 2004,
//     end: "present",
//   },
// ];

// const ages = [30, 39, 44, 48, 37, 51];

// companises.forEach(function (company) {
//   console.log(company.name);
// });

// ages.forEach(function (x) {
//   console.log(x);
// });

// let openBusness = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 35) {
//     openBusness.push(ages[i]);
//   }
// }

// console.log(openBusness);

// // using foreach
>>>>>>> test
