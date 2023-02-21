const express = require('express');
const app = express();

app.use('/public',express.static(__dirname + '/public'))


//@ shortURL api
app.use('/api/shorturl', require('./routes/shorterURLRoute'))





















const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`))