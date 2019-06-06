const router = require('express').Router();

const db = require('./dishes-model.js');

router.get('/', async (req, res) => {
    try {
        const dishes = await db.find();
        res.status(200).json(dishes)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name } = await req.body;
        if (name) {
            res.status(200).json()
        } else {
            res.status(404).json({ message: 'Please add a name and try again' });
        }
    } catch (error) {
        
    }
});

module.exports = router;