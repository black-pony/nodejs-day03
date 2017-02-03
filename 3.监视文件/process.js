process.stdin.on("data",function(data){
    console.log("用户输入了"+data.toString());
    //trim在这里的作用 --> 把回车字符去掉
    // console.log("用户输入了" + data.toString().trim());
});