const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Vite default port
    credentials: true
}));
app.use(express.json());

// Transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email.' });
    }
});

// Subscribe Endpoint
app.post('/api/subscribe', async (req, res) => {
    const { email } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'New Newsletter Subscription',
        text: `New subscriber: ${email}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error subscribing:', error);
        res.status(500).json({ message: 'Failed to subscribe.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
