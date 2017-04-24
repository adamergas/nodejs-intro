var fs = require('fs');

fs.readFile(process.argv[2],'utf8',function callback(err,data){
    if(err){
        console.log("something went wrong");
    }else{
        console.log(data.split("\n").length-1);
    }
});