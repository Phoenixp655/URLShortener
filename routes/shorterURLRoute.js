const express = require('express');
const router = express();
const {} = require('../controllers/shorterURlController')


router.post('/:id', (req, res) => {
  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(req.params.id) ? 
})

module.exports = router;