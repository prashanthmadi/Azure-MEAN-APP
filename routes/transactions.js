var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/recentdonorlist', function(req, res, next) {
  res.send([
  	{donatedBy:"william stafik",item:"phone",cost:"100",donatedTo:"jane wilson"},
  	{donatedBy:"winning team",item:"laptop",cost:"200",donatedTo:"jimmy johns"},
  	{donatedBy:"ragin cajuns",item:"bicycle",cost:"350",donatedTo:"oleson grand"},
  	{donatedBy:"undrafted legends",item:"scooter",cost:"700",donatedTo:"michael flyod"}
  	]);
});

/* GET users listing. */
router.get('/recentgiverequest', function(req, res, next) {
  res.send([
  	{item:"phone",cost:"100",donatedTo:"ramsy wilson",id:1, completed:false},
  	{item:"laptop",cost:"200",donatedTo:"eli johns",id:2, completed:false},
  	{item:"bicycle",cost:"350",donatedTo:"selina grand",id:3, completed:false},
  	{item:"scooter",cost:"700",donatedTo:"jacob flyod",id:4, completed:false}
  	]);
});

module.exports = router;
