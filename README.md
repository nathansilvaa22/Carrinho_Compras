# Carrinho de Compras 🛒

Este é um projeto de um carrinho de compras desenvolvido em [tecnologias que você está usando]. A aplicação permite que os usuários adicionem, removam e visualizem produtos no carrinho, com cálculo dinâmico do valor total da compra.

## 📋 Funcionalidades

- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Exibir a lista de produtos adicionados.
- Calcular o total da compra.
- Persistência dos itens no carrinho (localStorage ou API).
- Interface simples e amigável para o usuário.

## 🚀 Tecnologias Utilizadas

- **Frontend**:  React, JavaScript, HTML5, CSS3
- **Gerenciamento de Estado**:  Context API
- **API**: Mercado Livre

## 📦 Instalação

Siga os passos abaixo para clonar e rodar o projeto localmente.

1. Clone o repositório:
    ```bash
    git clone https://github.com/nathansilvaa22/Carrinho_Compras.git
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute a aplicação:
    ```bash
    npm start
    ```

4. Abra o navegador em:
    ```
    http://localhost:3000
    ```

## 📚 Estrutura de Pastas

```bash
Carrinho_Compras/
├── public/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── pages/            # Páginas da aplicação
│   ├── services/         # Lógica de integração com APIs
│   ├── assets/           # Arquivos estáticos (imagens, ícones, etc.)
│   ├── styles/           # Estilos globais ou temáticos
│   └── App.js            # Componente principal da aplicação
├── .gitignore
├── package.json
└── README.md
