var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');



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

console.log(req.body);

var profile1= new Profile({
firstName: req.body.firstname,
lastName: req.body.lastname,
emailAddress: req.body.email,
role: 'Requestor',
phone: req.body.phoneno
});

profile1.save(function (err, data) {
if (err) console.log(err);
else
{
console.log('Saved Profile data, proceeding to save request', data );
var request1 = new Request({
reqProfileId : profile1._id,
itemDescription : req.body.itemDesc,
itemName : req.body.itemName,
itemRequestedDate : Date(),
itemProvisioned : false,
itemProvisionedDate: null,
donarProfileId : null,
cost: req.body.itemCost
});

request1.save(function (err, data) {
if (err) console.log(err);
else console.log('Saved ', data );
});
}

});



});

module.exports = router;

