// routes/index.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriaController');

// Rota para buscar todas as categorias
router.get('/categories', categoryController.getAllCategories);

// Rota para criar uma nova categoria
router.post('/categories', categoryController.createCategory);

// Outras rotas para update, delete, etc., podem ser adicionadas conforme necessário

module.exports = router;
