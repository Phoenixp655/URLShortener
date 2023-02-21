const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true)

//@ connect mongodb
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected database'))
  .catch((err) => console.log(err.message));


//@ define Schema
const shorterURLSchema = new mongoose.Schema({
  "shorterURl": String,
  "originURL": String
})


const shorterURl = mongoose.model('shorterURl', shorterURLSchema);
module.exports = shorterURl;