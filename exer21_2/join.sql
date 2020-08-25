-- JOIN 

-- existe a opção de usar os diversos tipos de
-- JOIN para combinar em um mesmo resultado registros de duas ou mais tabelas. Esses tipos são:
-- INNER JOIN, LEFT JOIN e RIGHT JOIN, para combinar duas ou mais tabelas e SELF JOIN,
-- quando uma tabela precisa ser combinada consigo mesma. 

-- Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil ON act.actor_id = fil.actor_id;

-- Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT aff.first_name, aff.last_name, ess.address
FROM sakila.staff AS aff
INNER JOIN sakila.address AS ess ON aff.address_id = ess.address_id;

-- Exiba o id do cliente, nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do
-- endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address.
SELECT cus.customer_id, cus.first_name, cus.email, cus.address_id, ess.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ess ON cus.address_id = ess.address_id
ORDER BY cus.first_name DESC
LIMIT 100;

-- Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus
-- nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT cus.first_name, cus.email, cus.address_id, ess.address, ess.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ess ON cus.address_id = ess.address_id
WHERE ess.district = 'California' AND cus.first_name LIKE '%rene%';

     
-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT COUNT(cus.customer_id), cus.first_name, cus.active
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ess ON ess.address_id = cus.address_id
WHERE cus.active = 1 
GROUP BY cus.first_name
ORDER BY cus.first_name DESC;
-- PRA LEMBRAR -> Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY,
-- o que faz com que todos registros que têm o mesmo valor para tais colunas sejam exibidos juntos.
 
 
-- Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006.
-- Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT aff.first_name, aff.last_name, AVG(pay.amount)
FROM sakila.staff AS aff
INNER JOIN sakila.payment AS pay ON aff.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = 2006
GROUP BY aff.first_name, aff.last_name;


-- Monte uma query que exiba o id do ator, nome, id do filme e titulo do filme, usando as tabelas actor, film_actor e film.
-- Dica: você precisará fazer mais de um JOIN na mesma query.

SELECT act.actor_id, act.first_name, f.film_id, f.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fa ON act.actor_id = fa.actor_id
INNER JOIN sakila.film AS f ON f.film_id = fa.film_id;


-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT a.film_id, a.replacement_cost, b.film_id, b.replacement_cost
FROM sakila.film AS a, sakila.film AS b
WHERE a.replacement_cost = b.replacement_cost;

-- Exiba o titulo e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os
-- filmes com a duração de empréstimo entre 2 a 4 dias.
SELECT a.title, a.length, b.title, b.length
FROM sakila.film AS a, sakila.film AS b
WHERE a.rental_duration BETWEEN 2 AND 4;

-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor,
-- exibindo apenas o nome e o sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM sakila.staff
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

-- Monte uma query que una os resultados das tabelas customer e actor, exibindo os nomes que contém a palavra "tracy" na
-- tabela customer e os que contém "je" na tabela actor. Exiba apenas os resultados únicos.
SELECT first_name FROM sakila.actor WHERE first_name LIKE '%JE%'
UNION
SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%';

-- Monte uma query que exiba a união dos 5 últimos nomes da tabela actor, o primeiro nome da tabela staff e 5 nomes
-- a partir da 15ª posição da tabela customer. Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name FROM sakila.actor ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 OFFSET 14)
ORDER BY first_name;

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados,
-- em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página.
-- Monte uma query que simule esse cenário.


(SELECT first_name, last_name
 FROM   sakila.customer
 ORDER  BY first_name, last_name
 LIMIT  60)
UNION
(SELECT first_name, last_name
 FROM   sakila.actor
 ORDER  BY first_name, last_name
 LIMIT  60)
ORDER  BY first_name, last_name
LIMIT 15
OFFSET 45;

-- 