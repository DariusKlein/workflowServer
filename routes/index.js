const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/debug', function(req, res, next) {
      console.log("/debug post = " + req.body.data)
      res.sendStatus(200)
    }
);
module.exports = router;
