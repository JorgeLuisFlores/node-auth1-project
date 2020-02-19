// something-router.js
const router = require('express').Router();
// const router = express.Router();

// Import data model
const UserData = require("./userModel.js");

// AuthMiddleware
const authMiddle = require('../auth/authMiddleware.js');

// Write CRUD operations
router.get('/', authMiddle, (req, res) => {
    UserData.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => res.send(err));
});


// Export router
module.exports = router;