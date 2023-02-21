const express = require('express');
const shorterURL = require('../model/shorterURLSchema');
const {v4: uuidv4} = require('uuid');


const create = async (req, res, data) => {
  const createShortURl = await shorterURL.create({
    "shorterURl": uuidv4(),
    "originURL": 'https://'+data
  })

  createShortURl.save((err, data) => {
    if(err) console.log(err);
    console.log(data)
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