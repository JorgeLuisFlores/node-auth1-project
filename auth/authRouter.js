const router = require('express').Router();
const bcrypt = require('bcryptjs');
// const authorize = require('./authMiddleware.js');
const Users = require('../users/userModel.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});



router.post('/login', (req, res, next) => {
    // let {
    //     username,
    //     password
    // } = req.headers;
    let {
        username,
        password
    } = req.body;

    Users.findBy({
            username
        })
        .first()
        .then(_user => {
            if (_user && bcrypt.compareSync(password, _user.password)) {
                req.session.user = _user;
                res.status(200).json({
                    message: "You logged in!"
                })
                next();
            } else {
                res.status(401).json({
                    messege: "You shall not pass!"

                })
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                messege: err
            })
        });
});

module.exports = router;