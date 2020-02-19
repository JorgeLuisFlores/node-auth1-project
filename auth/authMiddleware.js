module.exports = (req, res, next) => {

    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({
            messege: "Middleware issue!!"
        })
    }
};


// const users = require('../users/userModel.js');
// const bcrypt = require('bcryptjs');
// module.exports = (req, res, next) => {
//     const {
//         username,
//         password
//     } = req.headers
//     if (!(username && password)) {
//         res.status(401).json({
//             message: "You shall not pass!"
//         });
//     } else {
//         users.findBy({
//                 username
//             })
//             .first()
//             .then(_user => {
//                 if (_user && bcrypt.compareSync(password, _user.password)) {
//                     next()
//                 } else {

//                     res.status(401).json({
//                         messege: "You shall not pass!"

//                     })
//                 }
//             })
//             .catch((err) => {
//                 res.status(500).json({
//                     messege: err
//                 })
//             })
//     }
// }