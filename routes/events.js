const express = require('express');
const {events} = require("../services/events");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Api');
});
router.post('/events', async function (req, res, next) {
    console.log(req.body)
    res.send(await events(req.body));
});
module.exports = router;
