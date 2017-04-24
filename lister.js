
module.exports = function(dir, ext, callback){
    var fs = require("fs");
    var path = require("path");
    var data = [];
    
    fs.readdir(dir,function(err,list){
        if(err){
            return callback(err);
        }
        for(var i = 0; i < list.length; i++){
            if(path.extname(list[i]) == "."+ext){
                data.push(list[i]);
            }
        }
        callback(null, data);
    });    
}