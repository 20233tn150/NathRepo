const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const personasRoutes = require('./routes/persona.routes');
//----
const productosRoutes = require('./routes/producto.routes');
//----
const asignacionProductosRoutes = require('./routes/asignacionProducto.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/personas', personasRoutes);
//----
app.use('/api/productos', productosRoutes);
//----
app.use('/api/asignacionProductos', asignacionProductosRoutes);


// Conexión a la BD
mongoose.connect('mongodb+srv://20233tn150:Gow.64150@cluster0.mkuqw.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology : true})
.then(() => {
    console.log('Conexión éxitosa a la BD de MongoDB');
    app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
})
.catch((err) => console.log('Error al conectar en MongoDB', err));



// mongodb+srv://20233tn150:Gow.64150@cluster0.mkuqw.mongodb.net/inventario-db?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology : true}