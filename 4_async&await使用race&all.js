
//promise
function promiseFn(num, time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num ? resolve(`${num}, 成功`) : reject("失敗");
    }, time);
  });
}

//1.Promise.all 平行執行，統一列出回應資訊
async function promiseAll(){
    try{
         const data=await Promise.all([promiseFn(1,3000),promiseFn()]);
         console.log(data);
    }
    catch(err){
        console.log('catch',err);
    }
   
}

//promiseAll();

//2.依序發出請求，統一列出回應資訊
const arrayData = [
  { num: 1, time: 500 },
  { num: 2, time: 3000 },
  { num: 3, time: 1500 },
  { num: 4, time: 1000 },
];

async function seriesFn(){
    const data=[];

    for(let i=0;i<arrayData.length;i++){
        const item=arrayData[i];
        data.push(await promiseFn(item.num,item.time));//await會照順序
        console.log(data);
        console.log(item.num,'執行完畢');
    }

    console.log('all',data);
}

seriesFn();

//3.平行執行，依序列出
async function parallelFn() {
  debugger;
  const data = arrayData.map(async (item) => {
    const res = await promiseFn(item.num, item.time); // 此行的 await 不會暫停函式運行
    //map 會在執行時就取得結果，此時 data 內的 promise 是尚未 resolve 的狀態，因此需要在後續使用 for...of 等待回應的內容。
    console.log('crazy'+res)
    return res;
  });
  console.log('all',data);

  for (const res of data) {
      console.log(await res);
      console.log(data)
  }
}
// parallelFn();