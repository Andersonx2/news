# Projeto de Sistema de Notícias

Este é um sistema de notícias desenvolvido com **React** no frontend e **Node.js** no backend.

## Requisitos do Sistema

### Funcionalidades
- **Cadastro de Notícias**
  - Título da notícia (obrigatório)
  - Texto da notícia (ilimitado e obrigatório)
  - Autor (obrigatório, chave estrangeira para a tabela Autor)
- **Edição e Exclusão de Notícias**
- **Pesquisa de Notícias** por título e autor
- **Visualização de Notícias**

### Tecnologias Utilizadas
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express, SQLite

## Instalação

Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (versão recomendada: 16+)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

Clone este repositório e instale as dependências:

```sh
# Clone o repositório
git clone https://github.com/andersonx2/news.git

# Acesse a pasta do projeto
cd news

# Instale as dependências do frontend
npm install

# Instale as dependências do backend
cd server
npm install


```

## Como Executar

Para iniciar o **backend** e o **frontend** utilize:

### Iniciar Backend

```sh
cd backend
node src/server.js
```

### Iniciar Frontend

```sh
cd news
npm start
```

## Estrutura do Projeto

```
/seu-repositorio
├── backend
│   ├── src
│   │   ├── server.js   # Arquivo principal do servidor
│   │   ├── routes/     # Rotas da API
│   │   ├── controllers/ # Lógica dos controladores
│   │   ├── models/     # Modelos do banco de dados
│   ├── package.json
│   └── ...
├── frontend
│   ├── src
│   │   ├── components/ # Componentes React
│   │   ├── pages/      # Páginas do sistema
│   ├── package.json
│   └── ...
├── package.json (script para rodar tudo)
└── README.md
```

## Layout e Implementação

A interface do sistema inclui:
- **Tela de Cadastro de Notícias** com campos para título, texto e autor
- **Tela de Pesquisa de Notícias** com filtro por título e autor
- **Tela de Visualização de Notícias** para exibição detalhada
- **Opção para Editar e Excluir Notícias**

## Licença

Este projeto está sob a licença MIT.

