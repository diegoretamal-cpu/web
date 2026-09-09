require('dotenv').config();
const express = require('express'); // "require", no "requiere"
const path = require('path');
const app = express();

const PORT = 3000;


app.set('view engine', 'ejs');

//MIDDLEWARES
//Permite leer informacion enviada desde el formulario HTML
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros')
});

app.get('/contacto', (req, res) => {
    res.render('contacto', { mensajeEnviado: null })
});

app.post('/contacto', (req, res) => {
    const { nombre, 
        correo, 
        asunto, 
        mensaje} = req.body;


    console.log('---------------------');
    console.log('Nuevo Mensaje');    
    console.log('---------------------');

    console.log('Nombre: ', nombre);
    console.log('Correo: ', correo);
    console.log('Asunto: ', asunto);
    console.log('Mensaje: ', mensaje);
    console.log('---------------------');
    
    res.render('contacto', { mensajeEnviado: 'tu informacion ha sido enviada' });
});

app.get('/servicios', (req, res) => {
    res.render('servicios')
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});