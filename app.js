require('dotenv').config();
const express = requiere('express');

const app = express();

const PORT = process.env.PORT;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros')
});

app.get('/contactos', (req, res) => {
    res.render('contactos')
});

app.get('/servicios', (req, res) => {
    res.render('servicio')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});