const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello Instructor,this is my first project.');
  console.log('Project still hard to understand but I am progressing')
});

router.use('/users', require('./users'));

module.exports = router;