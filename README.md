# 🐉 Projeto React - Lista de Dragões

Este é um projeto frontend feito com **React + Vite**, que exibe uma lista de dragões com suporte para criação, edição e exclusão. Responsivo e com tema escuro.

## 📦 Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/)
- CSS puro + media queries

## ⚙️ Rodando localmente

### Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn

### Passos

1. **Clone o repositório:**

```bash
git clone https://github.com/b-oliveira/dragon-app.git
cd dragon-app
```

2. **Instale as dependências:**

```bash
npm install
# ou
yarn
```

3. **Rode o projeto:**

```bash
npm run dev
# ou
yarn dev
```

4. **Abra no navegador:**

```
http://localhost:5173

email: admin@email.com
senha: admin
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header/
│   ├── Sidebar/
│   └── ...
├── pages/
│   ├── DragonListPage.tsx
│   └── ...
├── services/
│   └── DragonService.ts
├── App.tsx
├── main.tsx
└── styles/
```

## ✅ Funcionalidades

- Listagem de dragões (modo tabela ou cards para mobile)
- Visualização de detalhes
- Criação, edição e exclusão
- Responsivo (mobile-first)
- Autenticação simulada

## 📝 Licença

Este projeto está licenciado sob a MIT License.
