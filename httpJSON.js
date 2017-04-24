var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
    if(request.method !== 'GET') { return response.end('server only receives GET requests.'); }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var ask = url.parse(request.url, true);
    var date = new Date(ask.query.iso);
    
    if(ask.pathname === '/api/parsetime'){
        response.end("{\"hour\":"+date.getHours()+",\"minute\":"+date.getMinutes()+",\"second\":"+date.getSeconds()+"}");
    }
    if(ask.pathname === '/api/unixtime'){
        response.end("{\"unixtime\":"+date.getTime()+"}");
    }
    
});

server.listen(process.argv[2]);