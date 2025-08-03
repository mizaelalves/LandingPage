// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier', // Adicione esta linha para integração com o Prettier
    'prettier' // Esta linha garante que as regras do Prettier sejam as últimas a serem aplicadas
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // Aqui você pode adicionar regras personalizadas do ESLint
    'vue/multi-word-component-names': 'off', // Desabilita a regra de nomes multi-palavra
    'vue/no-reserved-component-names': 'off' // Desabilita a regra de nomes reservados
  }
};