const express = require('express');
const app = express();
app.use(express.json());
let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Smartwatch" }
];
let categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Home Appliances" },
    { id: 3, name: "Fashion" },
    { id: 4, name: "Books" }
];
app.get('/products', (req, res) => {
    res.json(products); // returns full objects with id and name
});
app.post('/products', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Product name is required" });
    const newProduct = { id: products.length + 1, name };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.get('/categories', (req, res) => {
    res.json(categories); // returns full objects with id and name
});
app.post('/categories', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Category name is required" });

    const newCategory = { id: categories.length + 1, name };
    categories.push(newCategory);
    res.status(201).json(newCategory);
});
// ---------- WILDCARD 404 ----------
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});