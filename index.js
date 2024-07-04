//2-qism

//3-qism. Masalalar
// 1-masala
// let arr = {
//   name: "Aziz",
//   age: 24,
//   job: "builder",
// };
// function objectkeys(arr) {
//   return arr;
// }
// console.log(objectkeys(Object.keys(arr)));

//2-masala
// let arr = {
//   name: "Asadbek",
//   age: 17,
//   phone: "+998931236547",
// };
// function objectvalues(arr) {
//   return arr;
// }
// console.log(objectvalues(Object.values(arr)));

//3-masala
// let arr = {
//   name: "Islom",
//   age: 12,
//   phone: "+998939856547",
// };
// function objectvalues(arr) {
//   return arr;
// }
// console.log(objectvalues(Object.entries(arr)));

//4-masala
// let arr = {
//   name: "Komil",
//   age: 37,
//   email: "komil@gmail.com",
// };
// function objectvalues(arr) {
//   return arr;
// }
// console.log(objectvalues(Object.freeze(arr)));
// arr.age = 25;
// console.log(arr);

//Massiv metodlariga oid masalalar.

//1-masala
// function sliceElement(arr) {
//   let res = arr.slice(2, 5);
//   return res;
// }
// console.log(sliceElement([1, 4, 6, 8, 3]));

// //2-masala
// function addElement(arr, number, number1) {
//   let res = arr.splice(1, 3, number);
//   return res;
// }
// console.log(addElement([12, 5, 3, 6, 48, 6], [25, 14]));

//3-masala
// function concatElement(arr1, arr2, arr3) {
//   let res = arr2.concat(arr3, arr1);
//   return res;
// }
// console.log(
//   concatElement([11, 15, 3, 5], [25, 36, 85, 14], [54, 6, 9, 2, 4, 8])
// );

//4-masala
// function indexElement(arr1, arr2) {
//   let res = arr1.indexOf(arr2);
//   return res ** 3;
// }
// console.log(indexElement([1, 2, 5, 7, 6, 8], 5));

//5-masala
// function indexElement(arr1, arr2) {
//   let res = arr1.lastIndexOf(arr2);
//   return res;
// }
// console.log(indexElement([3, 4, 5, 7, 9, 5, 3, 6, 7], 5));

//6-masala
// function concatAndIndexElement(arr1, arr2, el) {
//   let res = arr1.concat(arr2).indexOf(el);
//   if (res) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
//   return res;
// }
// console.log(concatAndIndexElement([5, 3, 6, 7, 6, 9], [6, 9, 7, 2, 3], 7));

//7-masala
// function includesElement(arr, el) {
//   let res = arr.includes(el);
//   return res;
// }
// console.log(includesElement([4, 65, 6, 9, 5, 23, 4], 9));

//8-masala
// function findOddElement(arr) {
//   let res = arr.forEach((element) => {
//     if (element > 100 && element < 999 && element % 2 == 1) {
//     }
//   });
//   return res;
// }
// console.log(findOddElement([1, 5, 66, 8, 997, 154]));

//9-masala
// function pairElement(arr) {
//   let res = arr.map(function (value) {
//     if (value % 2 == 1) {
//       return value ** 3;
//     } else if (value % 2 == 0) {
//       return value ** 2;
//     }
//   });
//   return res;
// }
// console.log(pairElement([1, 5, 4, 10, 2, 3, 6, 8, 9]));

//10-masala
// function lastString(arr) {
//   let res = arr.map(function (value) {
//     return value[value.length - 1];
//   });
//   return res;
// }
// console.log(lastString(["salom dunyo"]));

//11-masala
// function newMassiv(arr) {
//   let res = arr.filter((element) => {
//     return element.length <= 4;
//   });
//   return res;
// }
// console.log(newMassiv(["olma", "anor", "banan", "nok", "apelsin"]));

//12-masala
// let user = [
//   { name: "John", age: 5 },
//   { name: "Doe", age: 20 },
//   { name: "Alex", age: 50 },
// ];
// function findAge(arr) {
//   let res = arr.some((element) => {
//     return element.age > 18;
//   });
//   return res;
// }
// console.log(findAge(user));

//13-masala
// let Person = [
//   { name: "Azizjon", age: 45 },
//   { name: "Odiljon", age: 23 },
//   { name: "Kozimjon", age: 10 },
// ];
// function everyArray(arr) {
//   let res = arr.every((element) => {
//     return element.name.endsWith("jon");
//   });
//   return res;
// }
// console.log(everyArray(Person));

//14-masala
// function findFirstElement(arr) {
//   let res = arr.find((element) => {
//     return element > 100 && element < 999 && element % 5 == 0;
//   });
//   return res;
// }
// console.log(findFirstElement([154, 85, 695, 255, 142]));

//15-masala
// function findIndexElement(arr) {
//   let res = arr.findIndex((element) => {
//     return element.endsWith("bek");
//   });
//   return res;
// }
// console.log(findIndexElement(["Bobur", "Nodirbek"]));
