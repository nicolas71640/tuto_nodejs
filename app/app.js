const express = require("express");

const app = express();
const mongoose = require('mongoose');
const Product = require("./models/Product");
const StuffRoutes = require("./routes/stuff");
const ProductRoutes = require("./routes/product");
const UserRoutes = require("./routes/user");
const path = require('path');

mongoose.connect('mongodb://localhost:27017/myapp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.use('/images',express.static(path.join(__dirname, 'images')));
app.use('/api/stuff',StuffRoutes);
app.use('/api/products',ProductRoutes); 
app.use('/api/auth',UserRoutes);


module.exports = app;