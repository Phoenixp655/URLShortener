const express = require('express');
const shorterURL = require('../model/shorterURLSchema');
const shortid = require('shortid');


const create = async (req, res, data) => {
  const createShortURl = await shorterURL.create({
    "shorterURL": shortid.generate(),
    "originURL": 'https://'+data
  })

  createShortURl.save((err, data) => {
    if(err) console.log(err);
    res.json({original_url: data.originURL, short_url: data.shorterURL})
  })
}

const checkShortURL = async (req, res, data) => {
  const check = await shorterURL.findOne({shorterURl: data});
  if(check) return res.redirect(check['originURL']);
  
}


module.exports = {
  create, 
  checkShortURL,

}