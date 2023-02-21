const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const shorterURLSchema = new mongoose.Schema({
  "shorterURl": String,
  "originURL": String
})


const shorterURl = mongoose.model('shorterURl', shorterURLSchema);
module.exports = shorterURl;