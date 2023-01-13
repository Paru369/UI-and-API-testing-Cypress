# QA Developer Test
<br>
<img height="30px" src="https://uploads-ssl.webflow.com/61afa420e611dbd8b4a5856e/62029fbeebcf51ae7cda78a2_logo-horizontal-brand.svg">
<br>

### 🚀 Features minimas solicitadas implementadas:

#### Realizar teste na API do Ploomes nas seguintes entidades:
CRUD em Clientes (/Contacts)
✅CRUD em Negócios (/Deals)

#### Teste no Front-end: 
✅ Login do sistema
✅ CRUD em Clientes
✅ CRUD em Negócios

#### 🚀 Diferenciais sugeridos:

Teste no Mobile também;
Testar mais funcionalidades além das especificadas;

#### 🚀 Implementacoes extras: 

Testes: 
Logout no front end
CRUD no front end em Documentos
CRUD na API em produtos
CURD na API em Leads

Funcionalidades:
feedback visual durante os testes de API
github actions - testes rodam automaticamente a cada PullRequest
dashboard cypress - Visualizacao grafica da execucao dos testes
slack
api email



##  📦 Install

O projeto tem como pré-requisitos o node 16.15.0 ou superior (escolha maior versão LTS) - O node contém o npm necessário para instar o yarn. https://nodejs.org/en/download/

O Yarn não é obrigatório, mas é recomendado. A sua instalação acontece via npm: npm install --global yarn

Como instalar:

Na pasta raiz do projeto execute 
``` yarn install```

Configuracoes:

Para ativar a gravacao de videos abra o arquivo ```cypress.config``` e a altere o `video: false` para `video: true`

Configuracao de dados sensiveis ```cypress.env.json``` (esse arquivo deveria estar no .gitignore mas para fins didaticos mantive o arquivo exposto). Para alterar o usuario ou token de teste, edite o arquivo conforme exemplo abaixo:

```json
{
    "user_name": "root",
    "user_password": "password-do-usuario-root-definido-anteriormente",
    "ploomes_access_token": "access-token-criado-anteriormente"
}

```

##  🪄 Usage

## Readless:
Para executar os testes sem visualizar o browser (READLESS)
npx cypress run --browser <browserName> --spec <localDosTestes> 

Para executar apenas os testes de API: 
Para executar apenas os testes de FrontEnd: 

## Via Browser:
Para executar os testes visualizando o browser
npx cypress open  

Para executar apenas os testes de API: 
Para executar apenas os testes de FrontEnd: 


Legenda dos Testes:

GUI - Graphical user interface 
API - Aplication Programa Interface


###  🛠️ Desenvolvido em as tecnologias

Linguagens
<img align="center" alt="JS" height="30" width="40" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg">
<img align="center" alt="JS" height="30" width="40" src="https://cdn.worldvectorlogo.com/logos/typescript.svg">

Framework
<img align="center" alt="JS" height="30" width="40" src="https://www.cypress.io/images/layouts/shared/navbar-brand.svg">


### ⚙️ Dependencias:

<img align="center" alt="Faker" height="30" width="40" src="https://raw.githubusercontent.com/faker-js/faker/HEAD/docs/public/logo.svg">

 _lib_ [`faker`](https://www.npmjs.com/package/@faker-js/faker) sUtilizada para a criação de dados aleatórios para os testes trazendo agilidade a criacao dos testes e um grande repertorio de valores.
 A lib esta acoplada ao test atraves de uma interface em typrescript e caso necessite ser substituida a troca nao tera grandes impactos aos testes.
 
#### Cypress plugin API 
 
 _lib_ [`cypress-plugin-api`](https://www.npmjs.com/package/cypress-plugin-api) Utilizada para prover feedback visual durante os testes 
 de API na execucao dos mesmos no browser.(similar ao Postman)



###  🎁 Agradecimentos


Obrigado pela oportunidade de responder o desafio.

<br><br><br>

[documentação oficial](https://docs.cypress.io) 

<br>
---
####  ⌨️ com ❤️ por [Paulo Victor](https://gist.github.com/Paru369) 😊