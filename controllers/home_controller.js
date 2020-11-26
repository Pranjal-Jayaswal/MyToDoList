const { db } = require('../models/listSchema');
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
    console.log(req.body);
    var k = Object.keys(req.body);
    for (var i = 0; i < k.length; i++) {
        console.log(k[i]);
        Listt.findByIdAndDelete(k[i] ,function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 
            else{ 
                console.log("Deleted : ", docs); 
            } 
        }); 
        // for (const j in Listt) {

        //     if (Listt[j].description == k[i]) {
        //         Listt.splice(j, 1);
        //     }
        // }
    }
    return res.redirect('/');
};