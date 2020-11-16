const router = require("express").Router();

router.get('/whoknows', async (req, res) => {
    res.send('Something will happen');
});

router.post('/whoknowswhat', async (req, res) => {
    res.send('Something else happend')
});

module.exports = router;

