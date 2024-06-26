const express = require('express')
const path = require('path')
const app = express()
const port = 5000
const mongoDB=require("./database")
mongoDB()
var cors = require('cors')
app.use(cors())
app.use((req,res,next)=>{
    res.setHeader("Accer-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.get('/', (req, res) => {
  res.send('Hello World!') 
})
app.use(express.json());
app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
