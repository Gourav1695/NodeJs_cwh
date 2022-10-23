const express = require('express')
const app = express()
const port = 3001

app.get('/',(req, res)=>{
    res.send('Hello World!')
})

app.get('/about',(req, res)=>{
    res.send('this is an about page made by gourav kumar shaw at learning express node')

})
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)

})
