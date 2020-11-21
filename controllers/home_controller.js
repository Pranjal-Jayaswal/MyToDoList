
let cl = [
    {
        description: 'picalo',
        category: '1234567',
        date:'2012-12-19',
    }, 
    {
        description: 'pranjal',
        category: '1234567',
        date:'2012-12-19',
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