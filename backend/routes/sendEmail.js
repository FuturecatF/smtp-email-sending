const router = require('express').Router();

const {
    nodemailConfig,
  } = require('../middlewares/nodemailConfig');

router.post('/send', nodemailConfig);


module.exports = router;