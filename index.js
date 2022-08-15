const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end('hello node js');
    if(req.url ==='/about'){
        res.end('the about page')
    }else if(req.url ==='/contact'){
        res.end('the contact page')
    }else if(req.url ==='/'){
        res.end('the home page')
    }else {
        res.writeHead(404)
        res.end('page not found');
    }
})

server.listen(3000);