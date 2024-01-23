
// 関数
// function tweetable(text) {
//     return text.length <= 140;
// };

// 匿名（）無名関数

// const isTweetable = function(text) {
//     return text.length <= 140;
// };

// function alertTweetable(text) {
//     if (tweetable(text)) {
//         createModuleResolutionCache.log("you can tweet");
//     }
// };

// コールバック関数

// 構文
// function 高階関数(コールバック関数){
//     // 処理
//     コールバック関数();
// };

// function bring(food) {
//     if (手洗いが終えたら) {
//     // 食材を持ってきてもらう処理
//     }
// }

// function peer(food) {
//     if (手洗いが終えたら) {
//     // 食材を持ってきてもらう処理
//     }
// }

// function bring(food) {
//     if (手洗いが終えたら) {
//     // 食材を持ってきてもらう処理
//     }
// }


// 高階関数を使った場合の処理
// function washed(fn, food) {
//     if (/＊手洗いが終わったら かつ　宿題を終わったら＊/) {
//         fn();   //コールバック関数の処理
//     }
// }

// function bring(food) {
    
//     // 食材を持ってきてもらう処理
    
// }

// function peer(food) {
    
//     // 食材を持ってきてもらう処理
  
// }

// function cut(food) {
    
//     // 食材を持ってきてもらう処理
 
// }

// washed(peer,"人参");

// function unfollow () {
//     console,log("フォローを外しました");
// }

// function cancelTweet(){
//     console.log("ツイートをキャンセルしました");
// }

// function confirmed(fn) {
//     if(Window.confirm,("実行しますか？")) {
//         fn();
//     }
// }

// confirmed(cancelTweet);

// document eventlistner

// const btn = document.getElementById("button");

// btn.addEventListener("click", function() {
//     console.log("フォロー解除");
// });

const foods = ["人参","ジャガイモ","玉ねぎ"];

foods,forEach(function(food) {
    console.log(food);
})


