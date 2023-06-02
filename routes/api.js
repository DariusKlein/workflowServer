var express = require('express');
const {events} = require("../services/events");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Api');
});
router.post('/events', async function (req, res, next) {
    res.send(await events("test", "placeholder1"));
});
module.exports = router;
