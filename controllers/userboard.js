var Card = require('../models/user');
var request = require('request');


module.exports = {
    index,
    // show,
    update,
    deleteCard,
    newCard,
    getMembers,
    create,
    edit
}

function index(req, res) {
    let cards = Card.find({});
    cards.then((allCards) => {
        console.log(allCards, 'lewhaefliaewfn')

        res.render('./userboard/index', {
            title: 'my board',
            allCards
        })
    })


}

// function show(req, res) {

// }

function create(req, res) {
    console.log(req.body, 'REQ.BODY');

    let newMember = Card.create(req.body);
    newMember.then((member) => {
        console.log(member, 'NEW MEMBER');
        res.redirect('/userboard')
    })

}

function update(req, res) {
    Card.findByIdAndUpdate(req.params.id, req.body)
    .then((updatedCard)=> {
        res.redirect('/userboard')
    })
}

function deleteCard(req, res) {
    Card.findByIdAndRemove(req.params.id)
    .then((deletedCard)=> {
        res.redirect('/userboard')
    })
}

function newCard(req, res) {
    res.render('./userboard/new', {title: 'accountable: add post'});
    
}

function getMembers(req, res) {
    console.log(req.body, 'MIRZa')
    var options = {
        url: process.env.PROPUBLICA_ROOTURL + 'congress/v1/members/' + req.body.chamber+ '/' + req.body.state + '/current.json',
        
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.PROPUBLICA_KEY,
        }
      };
      request(options, function(err, response, body) {
        var memberList = JSON.parse(body);
        // console.log(memberList.results)
        res.render('./userboard/listMembers', { title: 'members', memberList: memberList.results});;
      });
}

function edit(req, res) {
    console.log(req.params.id);
    Card.findById(req.params.id)
    .then((editedCard)=> {
        res.render('./userboard/edit', { title: 'edit card', card: editedCard})
    })
    
}