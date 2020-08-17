  // Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
   SELECT "This is SQL Exercise, Practice and Solution";
   // Escreva uma query para exibir três números em três colunas.
   SELECT 23 AS One, 24 AS Two, 25 AS three;
   // Escreva uma query para exibir a soma dos números 10 e 15.
   SELECT 10+15 AS soma;
  // Escreva uma query para exibir todas as informações de todos os cientistas.
   SELECT * FROM Scientists.Scientists;
  // Escreva uma query para exibir o nome e as horas de cada projeto.
   SELECT Name, Hours FROM Scientists.Projects;
  // Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade horas.
   SELECT Name, Hours FROM Scientists.Projects ORDER BY Hours DESC LIMIT 3;
  // Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
   SELECT DISTINCT(Project) FROM Scientists.AssignedTo;
  // Escreva uma query para exibir todos os cientistas cujos projetos são Ast3.
   SELECT * FROM Scientists.AssignedTo WHERE Project = 'Ast3';
  // Escreva uma query para exibir todas as informações dos projetos 5 projetos com a menor quantidade de horas.
   SELECT * FROM Scientists.Projects ORDER BY Hours ASC LIMIT 5;


// bonus*

  SELECT Provider, Piece, Price FROM PiecesProviders.Provides WHERE Provider = 'RBT';
   SELECT * FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 5;
  --  SELECT DISTINCT Provider FROM PiecesProviders.Provides ORDER BY Price DESC LIMIT 4;
  SELECT * FROM PiecesProviders.Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
  SELECT COUNT(*)  FROM PiecesProviders.Provides WHERE Piece = 1;



  /* exercicios conteúdo  */

  // Solução dos exercícios SELECT e AS

// -- Monte uma query que exiba seu nome na tela;
SELECT 'TEREZA CRISTINA';

// -- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
SELECT 'TEREZA CRISTINA', 'CARVALHO', 'BELO HORIZONTE', 100;

// -- Monte uma query que, além de exibir todas as informações acima, identifique cada coluna usando o AS, que é chamado de alias na linguagem SQL (alias é como um apelido no português);
SELECT 'TEREZA CRISTINA' AS Nome, 'CARVALHO' AS Sobrenome, 'BELO HORIZONTE' As Cid_Natal, 100 AS idade;

// -- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT;
SELECT 13 * 8;

// -- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".
SELECT now() as 'Data Atual';



// Soluções Select Coluna

// -- Escreva uma query que selecione todas as colunas da tabela city;
SELECT * FROM sakila.city;
// -- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer;
SELECT first_name, last_name FROM sakila.customer;
// -- Escreva uma query que exiba todas as colunas da tabela rental;
SELECT * FROM Sakila.rental;
// -- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film;
SELECT title, description, release_year FROM sakila.film;
// -- Utilize o SELECT para explorar todas as tabelas do banco de dados.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.address;
SELECT * FROM sakila.category;
SELECT * FROM sakila.country;
SELECT * FROM sakila.customer;
SELECT * FROM sakila.filme;


// Soluções CONCAT

// -- Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome Lançamento do Filme.
SELECT CONCAT(title, '  ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
// -- Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
SELECT CONCAT(title, '  ', rating) AS Classificação FROM sakila.film;
// -- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.
SELECT CONCAT(address, '  ', district) AS Endereço FROM sakila.address;


//Soluções DISTINCT

// -- Monte uma query para encontrar pares únicos de nomes e idades.
SELECT DISTINCT Nome, Idade FROM Escola.Alunos;
// -- Quantas linhas você encontraria na query anterior?
SELECT COUNT(*) FROM Escola.Alunos;
// -- Monte uma query para encontrar somente os nomes únicos.
SELECT DISTINCT Nome FROM Escola.Alunos;
// -- Quantas linhas você encontraria na query anterior?
SELECT COUNT( DISTINCT Nome) FROM Escola.Alunos;
// -- Monte uma query para encontrar somente as idades únicas.
SELECT DISTINCT Idade FROM Escola.Alunos;
// -- Quantas linhas você encontraria na query anterior?
SELECT COUNT(DISTINCT Idade) FROM Escola.Alunos;

// Soluções Count

SELECT * FROM sakila.staff;
-- Quantas senhas temos cadastradas nessa tabela?
SELECT COUNT(password) FROM sakila.staff;
-- Quantas pessoas temos em total trabalhando para nossa empresa?
SELECT COUNT(*) FROM sakila.staff;
-- Quantas fotos temos cadastradas nessa tabela?
SELECT COUNT(photos) FROM sakila.staff;

// Soluções Desafios Gerais (montar o bolo)

SELECT * FROM sakila.actor
LIMIT 10 OFFSET 10;

// -- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
SELECT * FROM sakila.film;
// -- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
SELECT title, rating, release_year FROM sakila.film;
// -- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila.
SELECT DISTINCT(last_name) from sakila.actor;
// -- Crie queries para descobrir o seguinte:
// -- Quantos filmes temos cadastrados?
SELECT COUNT(film_id) FROM sakila.film;
// -- Quantos clientes temos registrados?
SELECT COUNT(*) FROM sakila.customer;
// -- Quantos sobrenomes únicos temos no banco de dados?
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
// -- Quantas categorias de filmes o banco sakila possui?
SELECT COUNT(*) FROM sakila.film_category;
// -- Quantos países são atendidos pela sakila?
SELECT COUNT(*) FROM sakila.country;
// -- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
// -- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM sakila.film;
// -- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes, 
// -- incluindo o título, o ano de lançamento, a duração, a classificação indicativa e o custo de substituição. 
// -- Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT title, release_year, length, replacement_cost FROM sakila.film
ORDER BY length, replacement_cost
LIMIT 20;