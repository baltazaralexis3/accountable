var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema ({
    legislator: { type: String, required: true},
    basicInfo: { type: String, required: true},
    pfdProfile: String,
    topTenInds: String,
    analysis: String
}, {
    timestamps: true
})

var userSchema = new Schema ({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    cards: [cardSchema]
});

module.exports = mongoose.model('User', userSchema);