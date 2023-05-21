const mongoose = require('mongoose');


//connect to DB
mongoose.connect('mongodb+srv://rajdeep007:singh%40123@hospital-api.ol5zxah.mongodb.net/Hospital-API?retryWrites=true&w=majority', { useNewUrlParser: true ,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to db"));

db.once('open', function () {
    console.log("Successfully connected to db");
});