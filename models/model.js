var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

mongoose.connect('mongodb://ustxtr22.cloudapp.net:27017/tr22demo');

var db = mongoose.connection;
autoIncrement.initialize(db);

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

requestSchema.index({"reqProfileId":1,"itemName":1,"itemRequestedDate":1},{unique: true});
profileSchema.index({"emailAddress":1},{unique: true}); 

profileSchema.plugin(autoIncrement.plugin, {model: 'Profile', field: 'profileId'});
requestSchema.plugin(autoIncrement.plugin, {model: 'Request', field: 'requestId'});

mongoose.model('Profile',profileSchema); 
mongoose.model('Request', requestSchema);
