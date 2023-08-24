const Router = require('express');
const postRoute = require('./postRoute');

const router = Router();
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })

router.use('/posts', postRoute);

module.exports = router;