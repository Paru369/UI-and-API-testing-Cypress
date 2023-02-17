# 📌 Features  implementadas

## Teste na API

- ✅ CRUD de Clientes (`/Contacts`)

## Teste no Front-end

- ✅ Login
- ✅ Logout
- ✅ CRUD de Clientes

## 📌 Implementações extras

- ✅ Feedback visual durante os testes de API (similar ao Postman)
- ✅ Gerador de dados falsos com o uso da biblioteca [`faker-br`](https://www.npmjs.com/package/faker-br)

## 🗒️ Pré-requisitos

O projeto tem como pré-requisitos o [Node.js](https://nodejs.org/en/download/) 16.15.0 ou superior (escolha maior versão LTS).

Ao instalar o Node.js o `npm` já vem instalado, o qual é necessário para instalar o `yarn`.

Para instalar o `yarn`, utilize o seguinte comando: `npm install --global yarn`

## 📦 Instalação das dependências

Na raiz do projeto, excute `yarn install`.

## Configurações

Para ativar a gravação de vídeos, abra o arquivo  [`cypress.config.js`](./cypress.config.js) e altere a propriedade `video: false` para `video: true`.

Para rodar os testes, faça uma cópia do arquivo [`cypress.env.example.json`](./cypress.env.example.json) como `cypress.env.json` e atualize os dados de acordo (com usuário, senha e chave válidas).

## 🪄 Testes

O framework de tests [Cypress](https://cypress.io) foi utilizado para a escrita e execução dos testes automatizados.

### Modo _headless_

Para executar os testes sem visualizar o navegador, execute o comando `yarn cy:run`.

### Modo _Headed_

Para executar os testes visualizando o navegador, execute o comando `yarn cy:open`.

### Legenda dos Testes

- GUI - _Graphical User Interface_ (Testes no _front-end_)
- API - _Application Programmimg Interface_

### ⚙️ Dependencias de desenvolvimento

Consulte a seção de `devDependencies` do arquivo [`package.josn`](./package.json) para lista de dependências de desenvolvimento.

## 📝 Notas do autor

- O projeto está rodando com todos os testes passando
- Por ser um CRUD, a sua evolucao natural é completar e validar todos os campos dos formularios, abrangendo o que não é testado com testes unitários e de integração.
- Outras validações para evoluir o projeto: Envio de arquivos, envio de imagens, download de arquivos
- Os erros abaixo foram encontrados na aplicação, para os quais adicionei excessões para que os testes pudessem ser executados sem quebras:

- `'angular is not defined'`
- `'Cannot read properties of undefined'`
- ` "Unexpected token '<'" `

### 🎁 Agradecimentos

Obrigado a meus gatos que me ajudaram a codar.

___

⌨️ com ❤️ por [Paulo Victor](https://gist.github.com/Paru369) 🔎 🐛
