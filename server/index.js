const express = require('express')
const { json } = require('express')
const cors = require('cors')

const colorRoutes = require('./Routes/ColorRoutes')
const listRoutes = require('./Routes/ListRoutes')
const taskRoutes = require('./Routes/TaskRoutes')

const PORT = 3001
const app = express()

app.use(json())
app.use(
  cors({
    'Access-Control-Allow-Origin': '*',
  })
)

app.use(colorRoutes)
app.use(listRoutes)
app.use(taskRoutes)

app.listen(PORT, () => {
  console.log('Server is working...')
})
