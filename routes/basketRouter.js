const router = require("express").Router();

/*
    req.session.basket = {
        fitbit: {
            quantity: 1,
            price: 100,
        },
        appleWatch: {
            quantity: 1,
            price: 1000000000000000,
        }
    }
*/

router.post('/add', async (req, res) => {
    let {productName} = req.body; // or product id
   if (!'basket' in req.session) {
       req.session.basket={}
   }
    if (productName in req.session.basket) {
        req.session.basket[productName].quantity ++
    } else {
        let price = 10 //sql.query `select ${productName || id} from products`
        req.session.basket[productName] ={
            quantity: 1,
            price: price
        }
    }
    console.log(req.session.basket);
    res.send('added to basket')
})

router.get('/basket', async (req, res) => {
    res.send(req.session.basket);
    // passed to the frontend, frontend will store basket object in redux store
});

router.put('/update', async (req, res) => {
    res.send('Order updated')
});

router.delete('/delete', async(req, res) => {
    res.send('Items deleted')
})

module.exports = router;