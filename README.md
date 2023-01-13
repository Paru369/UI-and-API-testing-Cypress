# QA Developer Test
<br>
<img height="30px" src="https://uploads-ssl.webflow.com/61afa420e611dbd8b4a5856e/62029fbeebcf51ae7cda78a2_logo-horizontal-brand.svg">
<br>

## 🚀 Features minimas solicitadas implementadas:
<br>

#### Realizar teste na API do Ploomes nas seguintes entidades:
<br><br>
✅CRUD em Clientes (/Contacts)<br>
✅CRUD em Negócios (/Deals)<br>
<br><br>

#### Teste no Front-end: 
<br><br>
✅ Login do sistema<br>
✅ CRUD em Clientes<br>
✅ CRUD em Negócios<br>
<br><br>

### 🚀 Diferenciais sugeridos:
<br><br>
Testar mais funcionalidades além das especificadas:<br>
✅ CRUD na API em Leads<br>
✅ Logout no front end<br>
<br><br>

### 🚀 Implementacoes extras: 
<br><br>
✅ Feedback visual durante os testes de API (similar ao Postman)<br>
✅ Gerador de dados fakes<br>
✅ Cypress Cloud: <br> dashboard para toda equipe acompanhar os testes
 Visualizacao grafica da execucao dos testes
para vizualizar o dashboard acesse https://cloud.cypress.io/login com as credenciais:
```
paru369testmail@gmail.com
123456Paru
```
<br>
github actions - testes rodam automaticamente a cada PullRequest
<br><br>

##  📦 Install
<br>
O projeto tem como pré-requisitos o node 16.15.0 ou superior (escolha maior versão LTS) - O node contém o npm necessário para instar o yarn. https://nodejs.org/en/download/
<br>O Yarn não é obrigatório, mas é recomendado. A sua instalação acontece via npm: npm install --global yarn
<br>

####  Como instalar:
<br>
Na pasta raiz do projeto execute : ``` yarn install```
<br>

#### Configuracoes:
<br>
Para ativar a gravacao de videos abra o arquivo ```cypress.config``` e a altere o `video: false` para `video: true`
<br>
Configuracao de dados sensiveis ```cypress.env.json``` (esse arquivo deveria estar no .gitignore mas para fins didaticos mantive o arquivo exposto). Para alterar o usuario ou token de teste, edite o arquivo conforme exemplo abaixo:
<br>
```json
{
    "user_name": "root",
    "user_password": "password-do-usuario-root-definido-anteriormente",
    "ploomes_access_token": "access-token-criado-anteriormente"
}
```
<br><br>

##  🪄 Usage
<br><br>

#### Readless:<br>
Para executar os testes sem visualizar o browser (READLESS)
    <br><br>
   ``` yarn "cy:run" ``` ou ```npx cypress run --browser <browserName> --spec <localDosTestes> ```
   <br><br>

#### Via Browser:<br>
Para executar os testes visualizando o browser
<br><br>
``` yarn "cy:open"  ``` ou  ```npx cypress open ```
<br><br>
Legenda dos Testes:<br>
<br><br>
GUI - Graphical user interface: Testes no front end
 <br>
API - Aplication Programa Interface: Testes via API
<br><br><br>

###  🛠️ Desenvolvido em as tecnologias
<br><br>
<br>
<img align="center" alt="JS" height="50" width="50" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"> <img align="center" alt="JS" height="60" width="60" src="https://www.cypress.io/images/layouts/shared/navbar-brand.svg">
<br><br>

### ⚙️ Dependencias:
<br>
<img align="center" alt="Faker" height="30" width="40" src="https://raw.githubusercontent.com/faker-js/faker/HEAD/docs/public/logo.svg"> _lib_ [`faker`](https://www.npmjs.com/package/@faker-js/faker) sUtilizada para a criação de dados aleatórios para os testes trazendo agilidade a criacao dos testes e um grande repertorio de valores.<br>
 A lib esta acoplada ao test atraves de uma interface em typrescript e caso necessite ser substituida a troca nao tera grandes impactos aos testes.
 <br><br>

#### Cypress plugin API 
 <br>
 _lib_ [`cypress-plugin-api`](https://www.npmjs.com/package/cypress-plugin-api) Utilizada para prover feedback visual durante os testes 
 de API na execucao dos mesmos no browser.(similar ao Postman)
<br><br><br><br><br>


###  🎁 Agradecimentos
<br><br>

Obrigado pela oportunidade de responder o desafio.

<br><br>

### [documentação oficial](https://docs.cypress.io) : https://docs.cypress.io

<br>
-----------------------------------------------------

####  ⌨️ com ❤️ por [Paulo Victor](https://gist.github.com/Paru369) 😊