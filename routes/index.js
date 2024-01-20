const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
  res.send('Hello Instructor, this is my first project.');
});

router.use('/users', require('./users'));

module.exports = router;
