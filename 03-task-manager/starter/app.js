console.log("Task Manager App Starting");
require('./db/connect')
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks')


//middleware
app.use(express.static(`./public`));
app.use(express.json())


//routes
app.get('/hello', (req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)
app.use(notFound);

app.use(errorHandlerMiddleware);

const port = 3000

app.listen(port, console.log(`server is listening on port ${port}...`))

