// // 1.以下の関数をアロー関数に直して
// // ２　アロー関数をしようして、与えられた数の配列を全て２倍のする関数を書いて
// // ３　アロー関数を使用して、渡されたテキストを大文字になおす関すを書いて
// function multiplay(a,b) {
//     return a * b;
// }

// // １
// const multiplay = (a,b) => {
//     return a * b;
// }

// // //２
// const multiplay = numbers => numbers.map(number => number*2);

// // // 3
// const converToUppercase = text => text.toUpperCase();

// // // アロー関数問題
// // // １、二つの数値を引数として受け取り、それらを足し合わせるアロー関数’add'を作成しなさい
// const add = (a, b) => a + b;

// // // 与えられた数の配列を全て２ばいにするアロー関数’doubleArray'を作成してください
// const doubleArray = numbers =>number.map(number => number*2);

// // // テキストを引数として受け取り、そのテキストを大文字に変換するアロー関数’とUpperCase'を作成してください
// const toUpperCase = (text) => text.toUpperCase();

// // // アロー関数をしようして、与えられた数が偶数か奇数かを判定する関数’isEven'を作成しろ
// const isEven = numbers => numbers % 2 === 0;

// // アロー関数をしようして、与えられた文字列が怪文かどうか判定する関数’isPailddrome’を作成しろ
// const isPalidrome = str => str === str.split('').reverse().join('');
// // str.split(''): 文字列を配列に変換します。,

// // .reverse(): 配列を逆順にします。

// // .join(''): 逆順になった配列を文字列に戻します。

// // str === ...: 元の文字列 str と、逆順になった文字列が等しいか比較します。もし等しいならば、元の文字列が回文であると判断します。

// // アロー関数をしようして、指定された数の階乗を計算する関数’factorial'を作成してください
// const factorial = n => n === 0 ? 1 : n *factorial(n - 1);
// このアロー関数は、指定された数 n の階乗（factorial）を計算します。階乗は、その数自体と1より小さいすべての正の整数との積です。例えば、5の階乗は 5 * 4 * 3 * 2 * 1 = 120 です。

// 三項演算子：　条件 ? 真の場合の値 : 偽の場合の値;
const result = (10*20 > 3 % 90) ? "Yes" : "No";
console.log(result); // 出力: "Yes"
