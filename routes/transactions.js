var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var mongooseautoincrement = require('mongoose-auto-increment');
var Profile = mongoose.model('Profile');
var Request = mongoose.model('Request');

/* GET users listing. */
router.get('/gifteditems', function(req, res, next) {
  Request.find({'itemProvisioned':true})
  .populate('reqProfileId')
  .exec(function (err,request) {
      if (err) console.log(err);
      res.send(request)
  });
});

router.get('/wishlist', function(req, res, next) {

    Request.find({'itemProvisioned':false})
  .populate('reqProfileId')
  .exec(function (err,request) {
      if (err) console.log(err);
      res.send(request)
  });
});

router.post('/wishrequest', function(req, res, next) {

console.log(req);
var profile1= new Profile({
profileId: Number,
firstName: String,
lastName: String,
emailAddress: String,
role: String,
phone: String
});


});

module.exports = router;

