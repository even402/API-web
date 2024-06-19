// controllers/categoriaController.js

const Categoria = require('../models').Categoria;

// Função para buscar todas as categorias
async function getAllCategorias(req, res) {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para buscar uma categoria pelo ID
async function getCategoriaById(req, res) {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            res.status(404).json({ message: 'Categoria não encontrada' });
        } else {
            res.json(categoria);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Função para criar uma nova categoria
async function createCategoria(req, res) {
    const { nome, descricao } = req.body;
    try {
        const novaCategoria = await Categoria.create({ nome, descricao });
        res.status(201).json(novaCategoria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para atualizar uma categoria existente
async function updateCategoria(req, res) {
    const { id } = req.params;
    const { nome, descricao } = req.body;
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            res.status(404).json({ message: 'Categoria não encontrada' });
        } else {
            categoria.nome = nome;
            categoria.descricao = descricao;
            await categoria.save();
            res.json(categoria);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Função para deletar uma categoria pelo ID
async function deleteCategoria(req, res) {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            res.status(404).json({ message: 'Categoria não encontrada' });
        } else {
            await categoria.destroy();
            res.json({ message: 'Categoria deletada com sucesso' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria,
};
