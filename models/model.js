var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
requestId : Number,
reqProfileId : {type: Schema.Types.ObjectId, ref: 'Profile' },
itemDescription : String,
itemName : String,
itemRequestedDate : {type: Date, default: Date.now},
itemProvisioned : Boolean,
itemProvisionedDate: Date,
donarProfileId: {type: Number, ref: 'Profile' },
itemCost: Number
});
 
 
var profileSchema = new Schema({
profileId: Number,
firstName: String,
lastName: String,
emailAddress: String,
role: String,
phone: String
});

mongoose.model('Profile',profileSchema); 
mongoose.model('Request', requestSchema);
