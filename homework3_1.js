

// задание 1
// let item = 2;
// for (i = 1; i <= 10; i++) {
//     item = 2**i;
// }
// console.log(item)

// задание 1*
// let item = 2;
// function checkStp(i) {
// while ( i <= 10) {
//     item = 2**i;
//     i++;  
// }
// console.log(item)
// }
// checkStp(5);

//задание 2
// let x = ":)";
// let str = "";
// for (let i = 0; i < 5; i++) 
//   console.log(str = str + x);

// Задание 2*
// let x = "";
// let stroka;
// let numberOfRows;
// function printSmile(stroka, numberOfRows) {
//     for (let i = 0; i < numberOfRows; i++) 
//       console.log(x = x+stroka);
// }
// printSmile(":)", 10)

//задание 3 
// function getWordStructure(word)
//    {
//      let arr_vowel_list = 'aeiouAEIOU'.split(''); 
//      let count = 0;
//      let count1 = 0;
//      word.split('').forEach(function(e){
//      if(arr_vowel_list.indexOf(e) !== -1){
//      count++;
//     } else if(arr_vowel_list.indexOf(e) === -1){
//        count1++;
//       } 
//     });
//      console.log("Слово " + (word) + " состоит из " + (count) + " гласных и " + (count1) + " согласных букв");
//    }
// getWordStructure("mother")

// задание 4
function palindrome(str) { 
  let re = /[\W_]/g; 
  let lowRegStr = str.toLowerCase().replace(re, ''); 
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  if (reverseStr === lowRegStr) {
    console.log(true);
  } else {
    console.log(false);
  } } 
  palindrome("A man, a plan, a canal. Panama");
