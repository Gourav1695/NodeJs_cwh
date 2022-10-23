
// const {Console}=require('console');
const http = require('http');
const port = process.env.PORT ||3000;

const server =http.createServer((req,res)=>{
    res.statusCode =200;
    res.setHeader('Content-Type','text/html')
    console.log(req.url);
    // console.log(req);
   
    if(req.url=='/'){
        res.statusCode =200;
    res.end('<h1>This is Gourav Kumar Shaw</h1><p>Hey this is the way to write in server!!</p>');}
    else if(req.url=='/about'){
        res.statusCode =200;
        res.end('<h1>This is Gourav Kumar Shaw</h1><p>Hey this is the way to write in server!!</p>');
        
    }
    else   {
        res.gourav();
        res.statusCode =404;
        res.end('<h1>Not found</h1><p>Hey this page was not found on this server</p>');
        }
})

server.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});