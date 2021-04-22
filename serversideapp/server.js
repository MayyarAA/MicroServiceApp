const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/database');
const cors = require('cors')
const app = express()
const apiPort = 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connectDB();

const exercisesRouter = require('./Controller/ExcersieController');
const bookRouter = require('./Controller/BookController');

app.use('/exercises', exercisesRouter);
app.use('/books', bookRouter);


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))