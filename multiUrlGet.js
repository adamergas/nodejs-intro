var http = require("http"),
    bl = require("bl"),
    counter = 0,
    container = ["","",""];
    
function getUrl(num){
    http.get(process.argv[num + 2], function(res){
        res.pipe(bl(function(err,data){
            if(err){ return console.error(err); }
            container[num] = data.toString();
            counter++;
            if(counter === 3){
               for(var i = 0; i < 3; i++){ console.log(container[i]); }
            }
        }));
    });
}

for(var j = 0; j < 3; j++){ getUrl(j); }