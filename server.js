const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use('/public',express.static(__dirname + '/public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

//@ shortURL api
app.use('/api/shorturl', require('./routes/shorterURLRoute'))





















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))