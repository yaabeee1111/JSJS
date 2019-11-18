var http = require("http");

//  node.js 載入模組

http.createServer(function(request, response) {
  console.log(request.url);
  if(request.url == '/'){
// 路由
    // 資料庫
    console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>index</h1>");
    response.end();
  }else if(request.url == '/search'){
     console.log("接收到網頁請求！");
    response.writeHead(200, {"Content-Type": "text/HTML"});
    response.write("<h1>search</h1>");
    response.end();
  }
}).listen(process.env.PORT ||3000);
console.log("Server已開啟port: 3000.");
