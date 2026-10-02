// let const var & direct = not define const/let/vat
const userId = 10001; // iski value ik bar set hone ke bd change nahi karskte
let userName = "Zahid";
let passWord = "*****";
var roman = "var use nahi karte q ke globally pore scope me chlta rehta hai";
var english = "Prefer not to use var because of issue in block scope and functional scope";
badpractice = "declaration of varible not good whenever follow this style"

console.log(userId);
console.log(userName);
console.log(passWord);

console.table([userId,userName,passWord,roman,english,badpractice]);