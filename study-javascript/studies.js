// // function message() {
// //     console.log('こんにちは')
// // }

// // // message();

// // // 引数
// function message(userName) {
//     console.log(`こんにちは${userName}まん`)
// }

// message('gaku');

// function calculation(number1, number2){
//     // console.log(`${number1}fuck, ${number2}fucks`);
//     const plus = number1 + number2;
//     const minus = number1 - number2;
//     console.log(`${plus}duc, ${minus}ducks`);
// }

// calculation(10+2,3);

// // 定数、関数を代入する
// const myFunc = function message(userName) {
//     console.log(`こんにちは${userName}まん`)
// } 

// myFunc('gaku');

// // アロー関数
// // 無名関数
//  const myFuc2 = (userName) => {
//     console.log(`おはよう　俺の${userName}まん`)
// } 

// myFuc2("pusy");

// // return
// function plus(number1, number2){
//     return number1 + number2;
// }
// console.log(plus(5,2));

// function minus(number3,number4){
//     console.log(number3 - number4);
// }

// minus(10,plus(1,6));

// function myFunc4 (){
//     console.log(`myFunc4wojikkou`);
//     return;
// }
// myFunc4();

// // for
// for(let i = 1; i <= 10; i++){
//     console.log(i)
// }

// while
// let j = 1;
// while(j <5){
//     console.log(j);
//     j++;
// }

// forEach

// 配列
const members = ["max","reo","ruis"];

// console.log(members);
// console.log(members[2]);

// console.log(`こんにちは${members[1]}さん`);

members.forEach((e) => {
    console.log(`こんにちは${e}さん`)
});

