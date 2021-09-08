// SSH 接続している EC2 用

const express = require('express')
const app = express()
const port = process.env.PORT || 5000
var logger = require('morgan')
app.use(logger('tiny'))
app.get('/**', (req, res) => {
  res.send(`Message: SSH EC2 から 起動 <br> Path: ${req.url} <br> Time: ${Date.now() / 1000}`)
})
app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at ${port}`)
})
