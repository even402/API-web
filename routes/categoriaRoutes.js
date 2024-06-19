const express = require('express');
const router = express.Router();
const { Categoria } = require('../models');

// Obter todas as categorias
router.get('/', async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ erro: 'Falha ao buscar categorias' });
  }
});

module.exports = router;
