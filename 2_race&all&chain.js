//promise
let runPromise = (someone, timer, success = true) => {
  console.log(`${someone} 開始跑開始`);
  return new Promise((resolve, reject) => {
    // 傳入 resolve 與 reject，表示資料成功與失敗
    if (success) {
      setTimeout(function () {
        // 3 秒時間後，透過 resolve 來表示完成
        resolve(`${someone} 跑 ${timer / 1000} 秒時間(fulfilled)`);
      }, timer);
    } else {
      // 回傳失敗
      reject(new Error(`${someone} 跌倒失敗(rejected)`));
    }
  });
};

// Race 
//比賽誰最快
Promise.race([runPromise("小明", 3000), runPromise("漂亮阿姨", 2500)])
  .then((data) => {
    // 僅會回傳一個最快完成的 resolve 或 reject
    console.log("race", data); // 漂亮阿姨 跑 2.5 秒時間(fulfilled) <- 因為漂亮阿姨跑得快
  })
  .catch((err) => {
    // 失敗訊息 (立即)
    console.log(err);
  });

// All 在全部完成後統一回傳陣列
//大家一起跑且都要成功
// Promise.all([runPromise('小明', 3000), runPromise('漂亮阿姨', 2500)]).then((data) => {
//   // 在全部完成後統一回傳陣列，不過如果 all() 其中有事件 reject，那麼此 promise 也均視為失敗 (catch)。
//   console.log("race", data); // ["小明 跑 3 秒時間(fulfilled)", "漂亮阿姨 跑 2.5 秒時間(fulfilled)"]
// }).catch(err => {
//   // 失敗訊息 (立即)
//   console.log(err)
// });

//.then的使用
//接力賽
runPromise("小明", 3000)
  .then((mingString) => {
    console.log(mingString); // 小明 跑 3 秒時間(fulfilled)
    return runPromise("漂亮阿姨", 2500);
  })
  .then((autieString) => {
    console.log(autieString); // 漂亮阿姨 跑 2.5 秒時間(fulfilled)
    return runPromise("杰倫", 2000);
  })
  .then((jayString) => {
    console.log(jayString); // 杰倫 跑 2 秒時間(fulfilled)
  });