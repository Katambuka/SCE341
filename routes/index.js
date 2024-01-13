const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello Instructor, this is my first project');
});

module.exports = router;
