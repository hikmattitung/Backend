const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


//importing a user route here
const userRoute = require('./routes/user')


const app = express();

app.use(express.json());

const port = 8000;

app.use('/api/v1/user', userRoute);



app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})