const express = require('express');
const router = express.Router();
const Method = require('../method'); // Assuming you have a Method model

// POST - Add new communication method
router.post('/', async (req, res) => {
  try {
    const newMethod = new Method(req.body);
    await newMethod.save();
    res.status(200).send(newMethod);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET - Get all communication methods
router.get('/', async (req, res) => {
  try {
    const methods = await Method.find();
    res.status(200).json(methods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
