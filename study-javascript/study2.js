// // // 非同期処理
console.log("start");

// // // setTimeout関数：指定ミリごにタスクキューに登録
setTimeout(function cb(){
    console.log("farStep");
},2000);

console.log("end");

// // 応用
function myFunc(){
    console.log("farStep");
};

function main() {
    console.log("start");
    myFunc();
    console.log("end");
};

main();

// // 応用２

console.log("start");

setTimeout(function cb1(){
    console.log("far");
}, 2000);

setTimeout(function cb2 () {
    console.log("Step");
}, 2000);

console.log("end");

console.log("start");

// setTimeout関数の数秒が０であっても変わらない
setTimeout(function cb(){
    console.log("FarStep");
},0);
 
console.log("end");