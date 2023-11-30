const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const app = express();

app.use(express.json());
app.use("/books",router); //localhost:5001/books




mongoose.connect(
    "mongodb+srv://gurr:Gursimran123@cluster0.kieq2qy.mongodb.net/bookStore?retryWrites=true&w=majority"
    ).then(()=>console.log("Connected to database"))
    .then(()=>{
        app.listen(5001);
    }).catch((err)=>console.log(err));

