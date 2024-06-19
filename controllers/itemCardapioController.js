const { ItemCardapio } = require('../models'); // Importa o modelo ItemCardapio

// Métodos do controller
const itemCardapioController = {
  // Lista todos os itens de cardápio
  async list(req, res) {
    try {
      const itensCardapio = await ItemCardapio.findAll();
      return res.json(itemCardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Busca um item de cardápio pelo ID
  async getById(req, res) {
    const { id } = req.params;
    try {
      const itemCardapio = await ItemCardapio.findByPk(id);
      if (!itemCardapio) {
        return res.status(404).json({ error: 'Item de cardápio não encontrado' });
      }
      return res.json(itemCardapio);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // Cria um novo item de cardápio
  async create(req, res) {
    const { nome, descricao, preco, categoriaId } = req.body;
    try {
      const newItemCardapio = await ItemCardapio.create({ nome, descricao, preco, categoriaId });
      return res.status(201).json(newItemCardapio);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Atualiza um item de cardápio existente
  async update(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco, categoriaId } = req.body;
    try {
      const itemCardapio = await ItemCardapio.findByPk(id);
      if (!itemCardapio) {
        return res.status(404).json({ error: 'Item de cardápio não encontrado' });
      }
      await itemCardapio.update({ nome, descricao, preco, categoriaId });
      return res.json(itemCardapio);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // Exclui um item de cardápio pelo ID
  async delete(req, res) {
    const { id } = req.params;
    try {
      const itemCardapio = await ItemCardapio.findByPk(id);
      if (!itemCardapio) {
        return res.status(404).json({ error: 'Item de cardápio não encontrado' });
      }
      await itemCardapio.destroy();
      return res.status(204).end();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};

module.exports = itemCardapioController;
