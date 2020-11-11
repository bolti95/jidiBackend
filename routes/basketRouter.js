const router = require("express").Router();

router.get('/basket', async (req, res) => {
    res.send('Items in Basket');
});

router.put('/update', async (req, res) => {
    res.send('Order updated')
});

router.delete('/delete', async(req, res) => {
    res.send('Items deleted')
})

module.exports = router;