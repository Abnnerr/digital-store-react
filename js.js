// function removeExclamationMarks(s) {
//     let letras = ''
//     for (let i = 0; i < s.length; i++) {

//         if (s[i] != '!') {
//             letras += s[i]

//         }
//     }
//     return letras
// }
// console.log(removeExclamationMarks("Hello World!"));
// function squareSum(numbers){
//     let somar = 0
//     for (let i = 0; i < numbers.length; i++) {

//         somar += (numbers[i] ** 2)
//     }
//     return somar
// }
// console.log(squareSum([0, 3, 4, 5]))


// function disemvowel(str) {
//     let letras = ''
//     for (let i = 0; i < str.length; i++) {
//         // letras += str[i]

//         if((str[i] != 'a' && str[i] != 'A')&& (str[i] != 'e' && str[i] != 'E') && (str[i] != 'i' && str[i] != 'I') && (str[i] != 'o' && str[i] != 'O') && (str[i] != 'u' && str[i] != 'U')) {
//             letras += str[i]
//         }
//     }
//     return letras
// }
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))



// function getGrade(s1, s2, s3) {
//     let media = (s1 + s2 + s3) / 3

//     if (90 <= media && media <= 100) {
//         return 'A'
//     }
//     else if(80 <= media && media < 90){
//         return 'B'
//     }
//     else if (70 <= media && media< 80){
//         return 'C'
//     }
//     else if(60 <= media && media < 70) {
//         return 'D'
//     }
//     else if(0 <= media && media < 60) {
//         return 'F'
//     }
// }
// console.log(getGrade(70, 70, 100));



// function grow(x){
//     let numeros = 1

//     for (let i = 0; i < x.length; i++) {
//         numeros *= x[i]
//     }
//     return numeros
// }
// console.log(grow([1, 2, 3]));


// function invert(array) {
//     let lista = []
//     for (let i = 0; i < array.length; i++) {
//         // console.log(-array[i])
//         lista.push(-array[i])
//     } 
//     return lista
// }
// console.log(invert([1,-2,3,-4,5]));


// function check(a, x) {

//     for (let i = 0; i < a.length; i++) {

//         if (a[i] === x) {
//             return true
//         }
//     }
//     return false
// }
// console.log(check(['t', 'e', 's', 't'], 'w'));


// function doubleChar(str) {
//     let letras = ''
//     for (let i = 0; i < str.length; i++) {

//         letras += str[i] + str[i]

//     }
//     return letras
// }
// console.log(doubleChar("String"));




// function abbrevName(name) {
//     let inicial = `${name[0]}.`
//     for (let i = 0; i < name.length; i++) {

//         if (name[i] == ' ') {
//             inicial += (name[i+1])
//         }

//     }
//     return inicial.toUpperCase()
// }
// console.log(abbrevName('Jonas Abner'));



// function otherAngle(a, b) {
//     let angulo3 = (180 - (a+b))
//     return angulo3
// }
// console.log(otherAngle(30,60))



// function findAverage(array) {

//     if (array == 0) {
//         return 0
//     }
//     else {
//         let nums = 0;

//         for (let i = 0; i < array.length; i++) {
//             nums += array[i]

//         }

//         let media = (nums / (array.length))
//         return media
//     }

// }
// console.log(findAverage([1, 2, 3]));


function solution(string) {
    let resultado = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
            resultado += ' ' + string[i];
        } else {
            resultado += string[i];
        }
    }
    return resultado;
}

console.log(solution('camelCase'));


