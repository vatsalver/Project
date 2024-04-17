const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
const app = express();
const User = require('./models/User.js');

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://192.168.1.11:5173',
}));

mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    User.create({ name, email, password });

    res.json({ name, email, password });
})

app.listen(4000);

