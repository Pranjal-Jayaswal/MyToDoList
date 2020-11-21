
let cl = [
    {
        description: 'qaaawert',
        type: '1234567',
        dueDate:12-12-2020,
    }, 
    {
        description: 'qaawswwwwwawert',
        type: '1234567',
        dueDate:12-12-2020,
    },
    {
        description: 'qaaawafaert',
        type: '1234567',
        dueDate:12-12-2020,
    },
    {
        description: 'qaaddefaeert',
        type: '1234567',
        dueDate:12-12-2020,
    }
];
module.exports.home = function (req, res) {
    return res.render('home', {
        title: "toDOlist",
        workk: cl,
    });

}