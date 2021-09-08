const express = require('express')
const app = express()
const port = process.env.PORT || 3011
const logger = require('morgan')
const axios = require('axios')
app.use(logger('tiny'))
app.get('/**', async (req, res) => {
  res.send(`v1APIサーバー${port}${req.url} ${Date.now()/1000}`)
})

console.log('Api-Server Start')
app.listen(port, '0.0.0.0', () => {
  console.log(`Api-Server listening at ${port}`)
})
