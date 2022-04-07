const express = require('express')

const PORT = 8080
const app = express()

app.get('/test', (req, res) => {
  res.json({
    5: 'test',
  })
})

app.listen(PORT, () => {
  console.log('Server is working...')
})
