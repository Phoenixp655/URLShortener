const express = require('express');
const router = express();
const {create, checkShortURL} = require('../controllers/shorterURlController')

router.get('/:id', (req, res) => {
  checkShortURL(req, res, req.params.id)
})

//@ process post url submit from form
router.post('/', (req, res) => {
  const url = req.body.url;

  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(url) 
  ? create(req, res, url) 
    : res.json({error: 'invalid url'})
})

module.exports = router;