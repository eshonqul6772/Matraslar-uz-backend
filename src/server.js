const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const connectDB = require('./config/db.js');
const errorHandler = require('./middlewares/error.js');
const initializeUsers = require('./controllers/user');

const router = require('./routes');

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(router);
app.use(errorHandler);
app.use(express.static(path.join(__dirname, 'public')));



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB().then(() => {
   try{
    initializeUsers().then(() => {
        app.listen(PORT, () => {
            console.log(`server running in ${process.env.NODE_ENV} mode on port:  ${PORT}`.white.bold)
        });
    });
   }catch(err){
    console.log(err.message, "Error no connected")
   }
});

