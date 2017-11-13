const express = require('express')
const config = require('config')
const console = require('tracer').colorConsole();
var bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/test', (req, res) => {
    res.render('index', {title: 'test', message: 'test'})
})

app.all('/', (req, res) => {
    console.log(req.body)
    res.status(200).send('OK')
})

app.listen(config.port, () => {console.log('app started')})