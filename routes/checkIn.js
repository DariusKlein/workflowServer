const express = require('express');
const {checkIn} = require("../services/checkIn");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Api');
});
router.post('/events', async function (req, res, next) {
    console.log(req.body)
    res.send(await checkIn(req.body));
});
module.exports = router;
