const router = require("express").Router();

router.get('/checkout', async (req, res) => {
    res.send('Checkout page');
});

router.post('/create', async (req, res) => {
    res.send('Order created')
});

router.delete('/delete', async(req, res) => {
    res.send('Order now deleted')
})

module.exports = router;