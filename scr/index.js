

const express = require('express');
const express = require('./controlles/userController');

require('dotenv').config();

const app = express();
app.use(express.json);
app.use('/api/users', userController);

const port = 3000;

app.get('/',(req,res)=>{
    res.send('¡Hola Mundo!');
})

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
})

