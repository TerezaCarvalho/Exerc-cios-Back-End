// INSERT

// -- Insira um novo funcionário na tabela sakila.staff.
SELECT * FROM sakila.staff;
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password) 
	VALUES ('Mario', 'Bros', 2 , 'marioBros@marioBros.com', 1, 1, 'mario', '253312');
    
// -- Feito o exercício anterior, vamos agora para o nível 2. Insira 2 funcionários novos em apenas uma query.
INSERT INTO `sakila`.`staff` (first_name, last_name, address_id, email, store_id, active, username, password) 
	VALUES
    ('Luigi', 'Bros', 5 , 'luigiBros@luigiBros.com', 2, 1, 'luigi', '263312'),
	  ('Vanellope', 'schweetz', 6 , 'schweetz@schweetz.com', 1, 1, 'schweetz', '273312');
    
// -- Selecione os 5 primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO sakila.actor(first_name, last_name)  SELECT first_name, last_name FROM sakila.customer ORDER BY customer_id LIMIT 5;
SELECT * FROM sakila.actor;

// -- Cadastre 3 categorias de uma vez só na tabela sakila.category.
SELECT * FROM sakila.category;
INSERT INTO sakila.category(name)
VALUES 
	('Adults'),
	('Biography'),
	('Comedy2');
    
// -- Cadastre 1 nova loja na tabela sakila.store.
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (9, 9); // o manager_staff_id usa o staff_id da tab staff e se nao  existir nao funciona

// UPDATE

SET SQL_SAFE_UPDATES = 0;

// --  Atualize o primeiro nome de todas as pessoas da tabela sakila.actor, que possuem o primeiro nome "JULIA", para "JULES".
SELECT * FROM sakila.actor;
UPDATE sakila.actor SET first_name = 'JULES' WHERE first_name = 'JULIA';
SELECT * FROM sakila.actor WHERE first_name = 'JULES';

// --  Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
SELECT * FROM sakila.category;
UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';
SELECT * FROM sakila.category WHERE name = 'Science Fiction';

// --  Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a 
// --  classificações "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
SELECT * FROM sakila.film;
UPDATE sakila.film SET rental_rate = 25
WHERE length > 100 AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') AND replacement_cost > 20;
SELECT * FROM sakila.film WHERE rental_rate = 25;

// -- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes,
// -- com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00,
// -- e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);

// DELETE

SET SQL_SAFE_UPDATES = 0;
// -- Exclua do banco de dados o ator com o nome de "KARL".
SELECT * FROM sakila.actor;
SELECT actor_id, first_name FROM sakila.actor WHERE first_name = 'KARL';
SELECT * FROM sakila.film_actor;
DELETE FROM sakila.film_actor WHERE actor_id = 12;
DELETE FROM sakila.actor WHERE first_name = 'KARL';

// -- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id, first_name FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

// -- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
SELECT * FROM sakila.film_text WHERE description like '%saga%';
DELETE FROM sakila.film_text WHERE description like '%saga%';

// -- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;
// -- o TRUNCATE é mais rápido que o DELETE. A função principal e única do TRUNCATE é de limpar (excluir todos os registros)
// -- de uma tabela, não sendo possível especificar o WHERE. Por isso, o TRUNCATE só pode ser usado nesse cenário.
