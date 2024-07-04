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

//2-masala

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
function includesElement(arr, el) {
  let res = arr.includes(el);
  return res;
}
console.log(includesElement([4, 65, 6, 9, 5, 23, 4], 9));
