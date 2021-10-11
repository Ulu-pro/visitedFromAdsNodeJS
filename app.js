const express = require('express')
const fs = require('fs')
const fileName = './ads.json'
const ads = require(fileName)

const app = express()

app.get('/',(req,res)=>{
    let visitFrom = ''
    if ('tg' in req.query) {
        visitFrom = 'Telegram'
        ads.tg++
    } else if ('tw' in req.query) {
        visitFrom = 'Twitter'
        ads.tw++
    } else if ('fb' in req.query) {
        visitFrom = 'Facebook'
        ads.fb++
    } else if ('so' in req.query) {
        visitFrom = 'StackOverflow'
        ads.so++
    }
    fs.writeFile(fileName, JSON.stringify(ads), ()=>{})
    res.send(visitFrom?`Visited from: ${visitFrom}`:'Usually')
})

app.listen(port=3000,host='192.168.1.197',()=>{
    console.log(`http://${host}:${port}`)
})