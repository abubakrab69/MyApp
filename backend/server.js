import express from 'express'
import cors from 'cors'
// const express = require('express')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log("contactus API hit")
    console.log(req.body)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
