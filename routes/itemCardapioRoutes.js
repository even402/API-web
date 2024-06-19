const express = require('express');
const router = express.Router();
const { ItemCardapio } = require('../models');

// Obter todos os itens do cardápio
router.get('/', async (req, res) => {
  try {
    const itensCardapio = await ItemCardapio.findAll();
    res.json(itensCardapio);
  } catch (error) {
    res.status(500).json({ erro: 'Falha ao buscar itens do cardápio' });
  }
});

module.exports = router;
