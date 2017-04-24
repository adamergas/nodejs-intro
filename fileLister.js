var myModule = require('./lister.js');

myModule(process.argv[2],process.argv[3],function callback(err, data){
    if(err){
        return console.log(err);
    }
    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
})

