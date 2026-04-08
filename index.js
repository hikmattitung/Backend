const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello from Backend Nepal port");
});



app.listen(port, ()=>{
    console.log(`server is running ${port}`)
})