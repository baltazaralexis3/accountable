var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema ({
    legislator: { type: String, required: true},
    role: { type: String, required: true},
    party: { type: String, required: true},
    twitter: String,
    pfdProfile: String,
    topTenInds: String,
    analysis: String
}, {
    timestamps: true
})

// var userSchema = new Schema ({
//     name: String,
//     email: String,
//     avatar: String,
//     googleId:  String,
// });    
// cards: [cardSchema]



module.exports = mongoose.model('Card', cardSchema);
// module.exports = mongoose.model('User', userSchema);