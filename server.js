const express = require('express')
const app = express()
const PORT = 3000
const CORS = require('cors')

app.use(CORS())

let picCheck = {
    "moe1.jpg":{},
    "moe2.jpg":{},
    "moe3.jpg":{},
    "moe4.jpg":{},
    "moe5.jpg":{},
    "moe6.jpg":{},
    "moe7.jpg":{},
    "moe8.jpg":{},
    "moe9.jpg":{},
    "moe10.jpg":{},

}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html') 
})

app.get('/api/:pic', (req,res)=>{
    const picName = req.params.pic
    if(picCheck[picName]){
        res.sendFile(__dirname + `/moePics/${picName}`)
    } else {
        res.send("Not found")
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})