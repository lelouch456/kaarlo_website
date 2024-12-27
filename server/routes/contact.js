const express = require('express');
const router = express.Router();
const Contact = require('../models/contactModel');

// Define the contact form submission handler
const getContact = async (req, res) => {
    try {
        console.log('Incoming Request Body:', req.body);

        const { name, email, phone, message } = req.body;

        if (!name || !email || !message) {
            console.error('Validation Error: Missing fields');
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const newContact = new Contact({
            name,
            email,
            phone,
            message,
        });

        const savedContact = await newContact.save();
        console.log('Contact Saved:', savedContact);

        res.status(201).json({
            message: 'Contact Form Submitted Successfully',
            contact: savedContact,
        });
    } catch (error) {
        console.error('Error in getContact:', error.message);
        res.status(500).json({ error: 'An error occurred while submitting the form' });
    }
};

// Register the route properly
router.post('/api/contact', getContact);

module.exports = router;
