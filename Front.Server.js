const express = require('express')
const app = express()
const port = process.env.PORT || 3010
const logger = require('morgan')
const axios = require('axios')
app.use(logger('tiny'))
app.get('/**', async (req, res) => {
  let result = null
  var url = 'http://localhost:3011/api'
  var url = 'http://apiserver:3011/api'
  try {
    const { data } = await axios.get(url, { timeout: 3000 })
    result = data
  } catch (err) {
    result = 'Error: ' + err.message
  }
  res.send(`Message: v1フロントサーバー <br> Path: ${req.url} <br> Time: ${Date.now() / 1000} <br> Axios: ${url} <div style="border:1px solid grey;">${result}</div>`)
})

console.log('Front-Server Start')
app.listen(port, '0.0.0.0', () => {
  console.log(`Front-Server listening at ${port}`)
})
