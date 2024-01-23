const result = document.querySelector("#result");



function numCount(max = 10) {
    let value =0;
    for (let i = 0; i <  max; i++){
        let el = `<li>${i}</li>`;
        result.insertAdjacentHTML("beforeend", el);
        value += i;
    }
    console.log(value)
    // 計算結果など画面に表示しないもの、他の処理に転用させたいものをかく
    return value;
}

// 戻り値は関数の実行を変数、定数に格納することができる。
//　戻り値は関数が実行されない限り取得はできない。
let value = numCount();
alert(value)