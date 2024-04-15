const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://192.168.1.9:5173',
}));

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.listen(4000);

