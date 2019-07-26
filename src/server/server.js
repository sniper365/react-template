const express = require('express')
const expressStaticGzip = require('express-static-gzip')
const app = express()
var options = {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
    res.setHeader('Cache-Control', 'public, max-age=31536000')
  }
}

app.use(expressStaticGzip('./dist', options))
app.listen('9001', () => {
  console.log('App started at port number 9000')
})
