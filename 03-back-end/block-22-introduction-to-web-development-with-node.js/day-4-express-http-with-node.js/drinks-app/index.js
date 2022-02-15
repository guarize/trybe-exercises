const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3001;

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price});
  res.status(201).json({ message: 'Drinks created successfully!'});
});

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  drinks[recipeIndex] = { ...drinks[recipeIndex], name, price };

  res.status(204).end();
});

app.get('/drinks', (req, res) => {
  res.json(drinks);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!' });

  res.status(200).json(drink);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/drinks`);
});
