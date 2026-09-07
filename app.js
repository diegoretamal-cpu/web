require('dotenv').config();
const express = require('express'); // "require", no "requiere"
const path = require('path');
const app = express();

const PORT = 3000;


app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros')
});

app.get('/contacto', (req, res) => {
    res.render('contacto')
});

app.get('/servicios', (req, res) => {
    res.render('servicios')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});