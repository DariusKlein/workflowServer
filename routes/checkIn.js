const express = require('express');
const {checkIn, createCheckIn, updateCheckIn, getCheckIn, getCheckInNonScorion} = require("../services/checkIn");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Api');
});
router.post('/create', async function (req, res, next) {
    console.log("/create post = " + req.body)
    res.send(await createCheckIn(req.body));
});
router.post('/update', async function (req, res, next) {
    console.log("/update post = " + req.body)
    res.send(await updateCheckIn(req.body));
});
router.get('/get', async function (req, res, next) {
    console.log("/get get = " + req.query.id)
    res.send(await getCheckIn(parseInt(req.query.id)));
});
router.get('/getNonScorion', async function (req, res, next) {
    console.log(await getCheckInNonScorion())
    res.send(await getCheckInNonScorion());
});
module.exports = router;

