
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
    console.log(req.body);



//     let slipNO=req.query.cl;
//     console.log(req.query);
//     console.log(slipNO);

// //    let indexCount =cl.findIndex(num => num.blockD==phone);
// //     if(indexCount != -1){
// //         cl.splice(indexCount, 1);
    
//     console.log(req.body);
//     let number=cl.indexOf(num => num.description==);
//     console.log(number);
    return res.redirect('/');

};