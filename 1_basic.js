
//promise
let mingRunPromise=(someone)=>{
    let ran=parseInt(Math.random()*2);
    return new Promise((resolve,reject)=>{
        if(ran){
            setTimeout(function(){
                resolve(`${someone}跑三秒成功`);
            },3000)
        }else{         
                //reject(new Error(`${someone}跌倒失敗`));
                reject((`${someone}跌倒失敗`));
        }
    })
}

//basic use
mingRunPromise('小明').then((data)=>{
    console.log('1'+data);
}).catch((err)=>{
    console.log('2'+err);
});

