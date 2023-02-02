


## 📌 Features  implementadas:

#### Teste na API :
✅CRUD em Clientes (/Contacts)<br>
✅CRUD em Negócios (/Deals)<br>
✅ CRUD na API em Leads<br>

#### Teste no Front-end: 
✅ Login do sistema<br>
✅ CRUD em Clientes<br>
✅ CRUD em Negócios<br>
✅ Logout no front end<br>
<br>


<br>

### 📌 Implementações extras: 
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
a pasta raiz do projeto excute:

```yarn install```


#### Configuracoes:
<br>
Para ativar a gravacao de videos abra o arquivo  "cypress.config"  e a altere o `video: false` para `video: true`
<br>
Configuracao de dados sensiveis "cypress.env.json"(esse arquivo deveria estar no .gitignore mas para fins didaticos mantive o arquivo exposto). Para alterar o usuario ou token de teste, edite o arquivo conforme exemplo abaixo:

.json:
```
   {
    "user_name": "root",
    "user_password": "password-do-usuario-root-definido-anteriormente",
    "ploomes_access_token": "access-token-criado-anteriormente"
    }
```
##  🪄 Executar

#### Readless:<br>
Para executar os testes sem visualizar o browser
    <br>
    
   ```yarn "cy:run"``` ou ```npx cypress run --browser <browserName> --spec <localDosTestes> ```
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

###  🛠️ Desenvolvido com as tecnologias
<img align="center" alt="JS" height="40" width="40" src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg">    <img align="center" alt="JS" height="80" width="80" src="https://www.cypress.io/images/layouts/shared/navbar-brand.svg">

### ⚙️ Dependencias:

#### Faker-js  <img align="center" alt="Faker" height="30" width="40" src="https://raw.githubusercontent.com/faker-js/faker/HEAD/docs/public/logo.svg">
_lib_ [`faker`](https://www.npmjs.com/package/@faker-js/faker) Utilizada para a criação de dados aleatórios para os testes trazendo agilidade a criacao dos testes e um grande repertorio de valores.
 A lib esta acoplada ao test atraves de uma interface em typrescript e caso necessite ser substituida a troca nao tera grandes impactos aos testes.

#### Cypress plugin API 
 
_lib_ [`cypress-plugin-api`](https://www.npmjs.com/package/cypress-plugin-api) U
tilizada para prover feedback visual durante os testes de API na execucao dos mesmos no browser.(similar ao Postman)

##  📝 Notas do autor

- O projeto esta rodando com todos os testes passando, há um video da execução no diretorio 'VIdeo Tests Running'
- Por ser um CRUD, a sua evolucao natural é completar e validar todos os campos dos formularios, abrangendo o que não é testado com testes unitários e de integração.
- Outras validações para evoluir o projeto: Envio de arquivos, envio de imagens, download de arquivos
- CI/CD: O projeto esta com workflow no github action, a cada PR os testes sao executados
- Os seguintes erros abaixo foram encontrados na aplicação, adicionei excessões para que os testes pudessem ser executados sem quebras:
 ```'angular is not defined'``` , ```Cannot read properties of undefined'``` , ``` "Unexpected token '<'" ``` 
 - Nos teste em API o metodo Cypress._.times(1, () => {} pode ser alterardo para criar mais itens, ao final dos testes todos dados sao apagados deixando.

<br><br><br>

###  🎁 Agradecimentos
<br>

Obrigado a meus gatos que me ajudaram a codar.

<br>

### [documentação oficial](https://docs.cypress.io) : https://docs.cypress.io

<br>
-----------------------------------------------------

####  ⌨️ com ❤️ por [Paulo Victor](https://gist.github.com/Paru369) 🔎🐛
