/**
 * Created by XiaoTong on 2017/7/31.
 */
var fs = require('fs');


//创建文件
fs.createWriteStream('./exercise/1.txt');


//open: 异步打开文件 参数1:路径   参数2:选项
//'r' - 以读取模式打开文件,如果文件不存在则发生异常
//'r+' - 以读写模式打开文件,如果文件不存在则发生异常
//rs+' - 以同步读写模式打开文件,命令操作系统绕过本地文件系统缓存
fs.open('./exercise/1.txt',"r",function () {

});



//utimes: 改变指定的路径所指向的文件的文件时间戳
// 参数1:路径  参数2:修改时间   参数3:访问时间
fs.utimes('./exercise/1.txt',atime,mtime,function (err) {
    if(err){
        throw err;
    }
    console.log('time update');
});



//watchFile:每隔一個固定的时间去检查文件是否改动

//fs.watchFile(filename, [options], listener)
var path = require('path');
var file1 = path.resolve('./exercise/1.txt');
//文件或目录监视
//1.当第一次创建监视器的时候，如果文件不存在，监视器毁掉函数会触发一次
fs.watchFile(file1, {
    interval: 20
}, function(curr, prev) {
    if (Date.parse(prev.ctime) == 0) {
        console.log('文件被创建');
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('文件被删除');
    } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
        console.log('文件有修改');
    }
});


//unwatchFile:停止监视
fs.unwatchFile('./exercise',watchFile);




//link: 创建硬链接
fs.link('./exercise/1.txt','./exercise/01',function (error) {
    if(!error){
         console.log("成功");
     }else {
         console.error(error);
     }
});


