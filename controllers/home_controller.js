
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