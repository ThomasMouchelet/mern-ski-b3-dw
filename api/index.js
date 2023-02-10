const express = require('express')
const app = express()
const port = 8000
const postRouter = require('./src/routers/post.router')
const mongoConnect = require('./config/mongo.connect')
mongoConnect()

const PREFIX_URL = "/api"

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(PREFIX_URL, postRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})