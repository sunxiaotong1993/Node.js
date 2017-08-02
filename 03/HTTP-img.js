/**
 * Created by XiaoTong on 2017/8/2.
 */
var http =  require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');




var server = http.createServer(function (requset,response) {
    response.setHeader('Content-Type','image');
    var urlObj = url.parse(requset.url);
    var pathname = urlObj.pathname;

    if (pathname == '/cat.jpg'){
        var finalPath = path.join(__dirname,pathname);
        fs.readFile(finalPath,'binary',function (err,data) {
            response.write(data,'binary');
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.end('文件未找到')
    }

})

server.listen(8081);
