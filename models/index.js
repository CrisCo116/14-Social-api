const router = require('express').Router();

const User = require('./userRoutes');
const Thought = require('./thoughtRoutes');

// Use the router for the user and thought routes
router.use('/users', User);
router.use('/thoughts', Thought);

module.exports = router;
