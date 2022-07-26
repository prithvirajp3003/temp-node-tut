const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url=='/')
    {
        res.end("Welcome to our home page")
    }
    if(req.url=='/about')
    {
        res.end("Welcome to about page")
    }
    res.end(
        `<h1>Oops!</h1>
        <p> we cant seem to find the oage you are looking for</p>
        <a href = "/">back home</a>`
    )
})

server.listen(5000)