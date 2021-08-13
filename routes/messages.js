const express = require('express');
const router = express.Router();
const Message = require('../models/Message')

router.post('/', async (req, res) => {
    //res.send(req.body);
    const { name, email, messages} = req.body;
    try {
        const newMessage = new Message({
            name,
            email,
            messages
        });
        const message1 = await newMessage.save();
        res.json(message1)
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;