/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'CAR RENTAL SYSTEM' });
};
module.exports = {
    index
};