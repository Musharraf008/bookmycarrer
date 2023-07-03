const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 8080;

//Morgan log request
app.use(morgan('tiny'));

//connect mongoDB
connectDB();

//Parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true}))

//set view engine
app.set('view engine', 'ejs');

//load assets

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

//connecting to routes

app.use('/', require('./server/routes/router'))

//App listing

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});