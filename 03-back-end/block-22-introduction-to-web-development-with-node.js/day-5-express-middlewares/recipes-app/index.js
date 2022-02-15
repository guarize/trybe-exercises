const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/open', function (req, res) {
  res.send('open!');
});

const recipesRouter = require('./routes/recipesRouter');

app.use('/recipes', recipesRouter);

app.all('*', function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log('Ouvindo na porta http://localhost:3001');
});
