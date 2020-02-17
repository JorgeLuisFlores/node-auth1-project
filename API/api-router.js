const router = require('express').Router();

const authRouter = require('../auth/authRouter.js');
const usersRouter = require('../users/userRouter.js');

// /api/auth
router.use('/auth', authRouter);
// /api/users
router.use('/users', usersRouter);

// /api
router.get('/', (req, res) => {
    res.json({
        api: "It's alive"
    });
});

module.exports = router;