const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

//MongoDb Connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1/smartNotes');
  console.log("Connected to Mongo Successfully");
}

//express Js Routing

const app = express();
const port = 5000;

app.use(cors())

// app.use(cors())
app.use(express.json())


//Available Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})
  
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, ()=>{
    console.log(`Smart Notes backend listening at http://localhost:${port}`)
})