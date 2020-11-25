
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
module.exports.home = function (req, res) {

    return res.render('home', {
        title: "toDOlist",
        workk: cl,
    });

}
module.exports.create = function (req, res) {

    cl.push(req.body);
    return res.redirect('/');

};

module.exports.delete = function (req, res) {
    cl.pop(req.body);
    return res.redirect('/');

};