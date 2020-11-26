
let cl = [
    {
        description: 'picalo',
        category: 'Spiritual',
        date: '2012-12-19',
    },
    {
        description: 'pranjal',
        category: 'Home',
        date: '2012-12-19',
    },

];
const Listt = require('../models/listSchema');
module.exports.home = function (req, res) {
    Listt.find({}, function (err, cl) {
        if (err) {
            console.log(err);
            return;
        }
        return res.render('home', {
            title: "toDOlist",
            workk: cl,
        })
    })
    // return res.render('home', {
    //     title: "toDOlist",
    //     workk: cl,
    // });

};
module.exports.create = function (req, res) {

    // cl.push(req.body);
    Listt.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, mylistt) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('####', mylistt);
        return res.redirect('/');

    })

};

module.exports.delete = function (req, res) {

    var k = Object.keys(req.body);

    for (var i = 0; i < k.length; i++) {
        for (const j in cl) {

            if (cl[j].description == k[i]) {
                cl.splice(j, 1);
            }
        }
    }
    return res.redirect('/');

};