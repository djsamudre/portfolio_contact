const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newEntry = await Contact.create({ name, email, message });
        res.status(201).json({ success: true, data: newEntry });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
