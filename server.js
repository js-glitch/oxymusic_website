const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
const path = require('path');
const app = express();
// testing autodeploy
//BodyParser Middleware
app.use(express.json());

//DB Config
const db = config.get('mongoURI');


//Connect to MongoDb
mongoose
.connect(db , { useNewUrlParser: true , useUnifiedTopology: true ,useCreateIndex :true})
.then(() => console.log(" Server started and MongoDB connected ..."))
.catch(err => console.log("Not working"));


//use Routes 
app.use('/api/contact_message', require('./routes/api/contact_msg_routes'))
app.use('/api/users' ,require('./routes/api/users'))
app.use('/api/auth' ,require('./routes/api/auth'))

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
//set static folder
app.use(express.static('client/build'));

app.get('*' , (req ,res) => {
res.sendFile(path.resolve(__dirname ,'client' , 'build' , 'index.html'));
});
}


const port = process.env.PORT || 5000;


app.listen(port , () => `server started on port ${port}`)