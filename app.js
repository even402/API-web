
const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

const categoriaRoutes = require('./routes/categoriaRoutes');
const itemCardapioRoutes = require('./routes/itemCardapioRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo à API de Gerenciamento de Cardápio');
});

app.use('/categorias', categoriaRoutes);
app.use('/itens-cardapio', itemCardapioRoutes);

app.listen(PORT, async () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
});
