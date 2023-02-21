const express = require('express');
const router = express();
const {create, checkShortURL} = require('../controllers/shorterURlController')

router.get('/:id', (req, res) => {
  checkShortURL(req, res, req.params.id)
})

//@ process post url submit from form
router.post('/:id', (req, res) => {
  const param = req.params.id;

  /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig.test(param) 
  ? create(req, res, param) 
    : res.json({error: 'invalid url'})
})

module.exports = router;