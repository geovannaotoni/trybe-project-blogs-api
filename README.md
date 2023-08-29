# :pencil: Projeto Blogs API
**API RESTful utilizando a arquitetura em camadas** <br>
Aplicação em Node.js que consiste em uma API e um banco de dados para a produção de conteúdos para um blog. O Pacote Sequelize foi utilizado para realizar um CRUD de posts e os endpoints estão conectados ao banco de dados seguindo os princípios do REST. Para criar uma postagem, é necessário um usuário e um login, e, por isso, foi estabelecida a relação entre *user* e *post*. Além disso, as postagens possuem categorias, portanto, foi trabalhada a relação entre *posts* e *categories*. Vale ressaltar que foi utilizada a biblioteca JWT para criar e validar os tokens de login.

## :computer: Visualize este projeto:
1. **Com o Doker:**
  - Instale as dependências: `npm install`
  - Inicie os containers: `docker-compose up -d --build`
  - Abrir terminal interativo do container: `docker exec -it blogs_api bash`
  - Iniciar a aplicação: `npm run prestart && npm run seed && npm run dev`

2. **Sem Docker:**
  - Instale as dependências: `npm install`
  - Inicie a aplicação: `env $(cat .env) npm run dev`

## :bulb: Habilidades:
- Criadas as migrations para as tabelas users, categories, blog_posts, posts_categories.
- Criadas as models User, Category, BlogPost e PostCategory.

**Endpoints Criados:**
1. `POST /login`
2. `POST /user`
3. `GET /user`
4. `GET /user/:id`
5. `POST /categories` 
6. `GET /categories`
7. `POST /post`
8. `GET /post`
9. `GET /post/:id`
10. `PUT /post/:id`
11. `DELETE /post/:id`
12. `DELETE /user/me`
13. `GET /post/search?q=:searchTerm`

Feito a partir dos conhecimentos de Node.js, Docker, API REST com Express, CRUD, MySQL, Arquitetura em Camadas (Camadas Routes, Middlewares, Controller, Service e Model), Sequelize, JWT.
