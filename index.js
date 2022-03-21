const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { connect } = require('./routes/auth');


//import Routes
const authRoute = require('./routes/auth');


dotenv.config();


//connect to db
mongoose.connect(process.env.DB_CONNECT ,
    () => console.log('connected to db!')
);


//middlewares
app.use(express.json());


//Route MiddleLewares
app.use('/api/user', authRoute)




app.listen(3000, () => console.log('Server Up and running'));
