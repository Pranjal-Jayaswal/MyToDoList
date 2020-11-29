//importing the specified schema 
const Listt = require('../models/listSchema');


//response function for home page which asks database to return data it has  there by render the page accordingly
module.exports.home = function (req, res) {
    Listt.find({}, function (err, cl) {
        if (err) {
            console.log(err);
            return;
        }
        //if satatemen here to track if no todo_work enter then guide user to add some work first          
        if (cl[0] == undefined) {
            const temp = [{
                description: " Please firstly add some work ToDo",
                category: 'Category',
                date: ' '
            }];
            return res.render('home', {
                title: "toDOlist",
                workList: temp,
            })
        }
        return res.render('home', {
            title: "toDOlist",
            workList: cl,
        })
    })
    // return res.render('home', {
    //     title: "toDOlist",
    //     workList: cl,
    // });
};

//exporting response function for createing new task using the form filled and render back the updated page
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

//exporting response function for deleting a task and render back the updated page
module.exports.delete = function (req, res) {
    var k = Object.keys(req.body);
    for (var i = 0; i < k.length; i++) {
        Listt.findByIdAndDelete(k[i], function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
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