# API de Gerenciamento de Cardápio

Uma API para gerenciar o cardápio de um restaurante, construída com Node.js, Express, MySQL2, Sequelize e Dotenv.

## Índice
- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas da API](#rotas-da-api)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores e Agradecimentos](#autores-e-agradecimentos)
- [Contato](#contato)

## Instalação

### Requisitos
- Node.js
- MySQL

### Passos
1. Clone o repositório:
    ```sh
    git clone https://github.com/even402/Cardapio.git
    ```
2. Instale as dependências:
    ```sh
    cd Cardapio
    npm install
    ```
3. Configure o arquivo `.env` com suas credenciais do banco de dados:
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASS=sua_senha
    DB_NAME=nome_do_banco_de_dados
    ```

## Uso

### Iniciando o Servidor
Para iniciar o servidor, execute:
```sh
npm run dev
Isso iniciará o servidor usando nodemon, que reinicia automaticamente o servidor sempre que houver alterações no código.

Rotas da API
Categorias
Obter todas as categorias
bash
Copiar código
GET /categorias
Retorna todas as categorias cadastradas.
Exemplo de resposta:

json
Copiar código
[
    {
        "id": 1,
        "nome": "Entradas",
        "descricao": "Entradas variadas para iniciar sua refeição"
    },
    {
        "id": 2,
        "nome": "Pratos Principais",
        "descricao": "Pratos principais variados, incluindo massas e carnes"
    }
]
Obter uma categoria pelo ID
bash
Copiar código
GET /categorias/:id
Retorna os detalhes de uma categoria específica pelo ID.
Exemplo de resposta para /categorias/1:

json
Copiar código
{
    "id": 1,
    "nome": "Entradas",
    "descricao": "Entradas variadas para iniciar sua refeição"
}
Criar uma nova categoria
bash
Copiar código
POST /categorias
Cria uma nova categoria com base nos dados fornecidos no corpo da requisição.
Exemplo de requisição:

json
Copiar código
{
    "nome": "Sobremesas",
    "descricao": "Deliciosas sobremesas para finalizar sua refeição"
}
Exemplo de resposta:

json
Copiar código
{
    "id": 3,
    "nome": "Sobremesas",
    "descricao": "Deliciosas sobremesas para finalizar sua refeição"
}
Atualizar uma categoria existente
bash
Copiar código
PUT /categorias/:id
Atualiza uma categoria existente pelo ID, com base nos dados fornecidos no corpo da requisição.
Exemplo de requisição para atualizar a categoria com ID 1:

json
Copiar código
{
    "nome": "Entradas Variadas",
    "descricao": "Diversas opções de entradas para iniciar sua refeição"
}
Exemplo de resposta:

json
Copiar código
{
    "id": 1,
    "nome": "Entradas Variadas",
    "descricao": "Diversas opções de entradas para iniciar sua refeição"
}
Deletar uma categoria pelo ID
bash
Copiar código
DELETE /categorias/:id
Remove uma categoria existente pelo ID.
Exemplo de resposta após deletar a categoria com ID 2:

json
Copiar código
{
    "message": "Categoria deletada com sucesso"
}
Contribuição
Se você quiser contribuir com o projeto, por favor, siga os seguintes passos:

Fork este repositório.
Crie uma branch para a sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -m 'Adiciona nova feature').
Push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Autor(a)
Rosana Even
