const http = require('http');
const fs = require('fs');

const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const errorPage = fs.readFileSync('error.html');

// request handler function
const server = http.createServer((req,res)=>{

    if(req.url ==='/about'){
        // res.end('the about page')
        res.end(aboutPage);
    }else if(req.url ==='/contact'){
        // res.end('the contact page')
        res.end(contactPage)
    }else if(req.url ==='/'){
        // res.end('the home page')
        res.end(homePage);
    }else {
        res.writeHead(404)
        // res.end('page not found');
       res.end(errorPage); 
    }
})

server.listen(3000);