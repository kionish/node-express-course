const mongoose = require('mongoose')
const db_password = process.env.DATABASE_PASSWORD;
require('dotenv').config();

const connectionString = 
`mongodb+srv://kionish:jumBo100@nodeexpressprojectctd.r18zy.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`
//&appName=NodeExpressProjectCTD'

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(()=> console.log('CONNECTED TO THE DB...'))
    .catch((err)=> console.log(err))


console.log(db_password)



