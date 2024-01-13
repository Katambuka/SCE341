const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello Instructor, this is my first project, I have connected mongodb database but its still playing me, I am working hard to fix everything');
});

router.use('/users', require('./users'));

module.exports = router;
