
//fetch 與一般 AJAX 套件比較不同之處是在 JSON 回傳後，必須在使用 json() 的方法將資料輸出成 JSON 格式
//.then
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // 取得遠端資源，並透過 return 方式回傳鏈接
  .then((response) => response.json())
  // 接收 `response.json()` 轉換的結果
  .then((json) => console.log(json))
  .catch((err)=>console.log(err));

//async

async function fetchAPI(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json=await res.json();
        console.log(json);
    }
    catch(err){
        console.log(err)
    }
  
}

fetchAPI();

  (async () => {
    // 取得遠端資源
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // 使用 response.json() 將資源轉為 JSON 格式
    const json = await res.json();
    console.log(json);
  })();