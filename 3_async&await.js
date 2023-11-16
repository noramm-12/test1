//promise
function promiseFn(num, time = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num ? resolve(`${num}, 成功`) : reject("失敗");
    }, time);
  });
}

//1.then
// promiseFn(1)
//   .then((res) => {
//     console.log(res); // 1, 成功
//     return promiseFn(2); // 鏈接第二次的 Promise 方法
//   })
//   .then((res) => {
//     console.log(res); // 2, 成功
//   });

//改成async function
  // async function getData(){

  //   const data1=await promiseFn(1);
  //   const data2=await promiseFn(2);
  //   console.log(data1,data2);
  // }

//getData();


//2.處理例外
promiseFn(1)
  .then((res) => {
    console.log(res); // 1, 成功
    return promiseFn(2); // 鏈接第二次的 Promise 方法
  })
  .then((res) => {
    console.log(res); // 2, 成功
  })
  .catch((err) => {
    console.log(err);
  });

async function getData() {
  try {
    const data1 = await promiseFn(6);
    const data2 = await promiseFn(1);
    console.log(data1, data2);
    return data1;
  } catch (err) {
    console.log("catch", err);
  }
}

getData();

//3更進階
async function getData() {
    try{
        const data1 = await promiseFn(6);
        const data2 = await promiseFn(1);
        console.log(data1,data2)
        return data1;
    }
    catch(err){
        console.log('catch',err)
    }
  }

async function printData(){
  const print=await getData();
  console.log(print);
}

printData();
