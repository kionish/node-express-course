const mongoose = require('mongoose')


require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;

//console.log(db_password)

const connectionString = MONGO_URI

mongoose
    .connect(connectionString, {
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
    })
    .then(()=> console.log('CONNECTED TO THE DB...'))
    .catch((err)=> console.log(err))




