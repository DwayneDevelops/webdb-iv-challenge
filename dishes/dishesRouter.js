const router = require('express').Router();

const db = require('./dishes-model.js');

router.get('/', async (req, res) => {
    const dishes = await db.getDishes();

    try {
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ message: 'Unable to retrieve dishes' });
    }
});

router.post('/', async (req, res) => {
    
    try {
        const [id] = await db.addDish(id)
            .insert(req.body);
        const dish = await db.getDish();
            res.status(201).json(dish)
    } catch (error) {
        res.status(500).json(error)
    }
});



module.exports = router;