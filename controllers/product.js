const Product = require('../models/Product');

exports.createProduct = (req, res, next) => {
    console.log("post");
    const product = new Product({
        ...req.body
    });
    product.save()
        .then(() => res.status(201).json({ product: product }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllProducts =  (req, res, next) => {
    Product.find()
        .then(products => res.status(200).json({ products: products }))
        .catch(error => res.status(400).json({ error }));
};

exports.getProduct =  (req, res, next) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.status(200).json({ product: product }))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyProduct = (req, res, next) => {
    console.log("put product");

    Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Product modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteProduct = (req, res, next) => {
    console.log("delete product");

    Product.remove({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet Supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};