const express = require("express"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    database = require("./routes/database"),
    app = express(),
    port = process.env.PORT || 3000;


app.use(cors())
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async function(req, res){
    try{
        res.send("ya estoy")
        res.end()
    }catch(err){
        console.error(err)
    }
});

app.use('/db', database);

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
})

app.listen(port, () => {
    console.log('server iniciado paps')
})
