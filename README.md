

![image](https://user-images.githubusercontent.com/99094718/212387032-847cdb0f-fe50-469c-bcee-1b9ba5b1915c.png)



## 📌 Features minimas solicitadas implementadas:

#### Realizar teste na API do Ploomes nas seguintes entidades:
✅CRUD em Clientes (/Contacts)<br>
✅CRUD em Negócios (/Deals)<br>

#### Teste no Front-end: 
✅ Login do sistema<br>
✅ CRUD em Clientes<br>
✅ CRUD em Negócios<br>
<br>

### 📌 Diferenciais sugeridos:
Testar mais funcionalidades além das especificadas:<br>
✅ CRUD na API em Leads<br>
✅ Logout no front end<br>
<br>

### 📌 Implementacoes extras: 
✅ Feedback visual durante os testes de API (similar ao Postman)<br>
✅ Gerador de dados fakes<br>
✅ GitHub Actions - testes rodam automaticamente a cada PullRequest<br>
✅ Cypress Cloud: <br> dashboard para toda equipe acompanhar os testes
 Visualizacao grafica da execucao dos testes
para vizualizar o dashboard acesse https://cloud.cypress.io/login com as credenciais:
```
paru369testmail@gmail.com
123456Paru
```
<br>

##  📦 Install

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

#### Readless:<br>
Para executar os testes sem visualizar o browser (READLESS)
    <br>
    
   ``` yarn "cy:run" ``` ou ```npx cypress run --browser <browserName> --spec <localDosTestes> ```
   <br>

#### Via Browser:<br>
Para executar os testes visualizando o browser
<br>

``` yarn "cy:open"  ``` ou  ```npx cypress open ```
<br>
Legenda dos Testes:<br>
GUI - Graphical user interface: Testes no front end

API - Aplication Programa Interface: Testes via API
<br>

###  🛠️ Desenvolvido em as tecnologias
<img align="center" alt="JS" height="50" width="50" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"><img align="center" alt="JS" height="70" width="70" src="https://www.cypress.io/images/layouts/shared/navbar-brand.svg">

### ⚙️ Dependencias:

#### Faker-js  <img align="center" alt="Faker" height="30" width="40" src="https://raw.githubusercontent.com/faker-js/faker/HEAD/docs/public/logo.svg">
_lib_ [`faker`](https://www.npmjs.com/package/@faker-js/faker) Utilizada para a criação de dados aleatórios para os testes trazendo agilidade a criacao dos testes e um grande repertorio de valores.
 A lib esta acoplada ao test atraves de uma interface em typrescript e caso necessite ser substituida a troca nao tera grandes impactos aos testes.

#### Cypress plugin API 
 
_lib_ [`cypress-plugin-api`](https://www.npmjs.com/package/cypress-plugin-api) U
tilizada para prover feedback visual durante os testes de API na execucao dos mesmos no browser.(similar ao Postman)

##  📝 Notas

- O projeto esta rodando e passando em todos os testes. 
- Por ser um CRUD a sua evolucao natural e completar e validar todos os campos dos formularios, abrangendo o que nao e testado com testes unitarios e de integracao
- CI/CD: O projeto esta com workflow no github action, a cada PR os testes sao executados, 

<br><br><br>

###  🎁 Agradecimentos
<br>

Obrigado pela oportunidade de responder o desafio.

<br>

### [documentação oficial](https://docs.cypress.io) : https://docs.cypress.io

<br>
-----------------------------------------------------

####  ⌨️ com ❤️ por [Paulo Victor](https://gist.github.com/Paru369) 😊
