-- Usando uma SUBQUERY como fonte de dados para o FROM.
SELECT f.title, f.rating
FROM (
    SELECT *
    FROM sakila.film
    WHERE rating = 'R'
) AS f;

-- Preenchendo uma coluna de um SELECT por meio de uma SUBQUERY.

SELECT
    address,
    district,
    (
        SELECT city
        FROM sakila.city
        WHERE city.city_id = sakila.address.city_id
    ) AS city
FROM sakila.address;

-- Filtrando resultados com WHERE usando como base os dados retornados de uma SUBQUERY.

SELECT address, district
FROM sakila.address
WHERE city_id in (
    SELECT city_id
    FROM sakila.city
    WHERE city in ('Sasebo', 'San Bernardino', 'Athenai', 'Myingyan')
);

-- Usando uma tabela externa, de fora da SUBQUERY, dentro dela.
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;

-- Exiba o título, o id do idioma e o idioma de todos os filmes, utilizando apenas SUBQUERY para encontrar o idioma.
-- A SUBQUERY deve possuir o alias idioma. Use as tabelas film e language para encontrar essa informação.
SELECT 
    title,
    language_id,
    (SELECT 
            name
        FROM
            sakila.language
        WHERE
            sakila.language.language_id = sakila.film.language_id) AS idioma
FROM
    sakila.film;

-- Usando as tabelas staff e address, exiba o nome, sobrenome, id do endereço e endereço
-- dos funcionários usando apenas subqueries. A SUBQUERY deve possuir o alias endereco.
SELECT 
    first_name,
    last_name,
    address_id,
    (SELECT 
            address
        FROM
            sakila.address
        WHERE
            sakila.address.address_id = sakila.staff.address_id) AS endereco
FROM
    sakila.staff;

-- Reescreva a resposta do exercício 1 utilizando JOIN.
-- Exiba o título, o id do idioma e o idioma de todos os filmes, utilizando apenas SUBQUERY para encontrar o idioma.
-- A SUBQUERY deve possuir o alias idioma. Use as tabelas film e language para encontrar essa informação.

SELECT 
    fil.title, fil.language_id, lan.name
FROM
    sakila.film AS fil
        INNER JOIN
    sakila.language AS lan ON lan.language_id = fil.language_id;
    
-- Reescreva a resposta da pergunta 2 utilizando o JOIN. 
-- Usando as tabelas staff e address, exiba o nome, sobrenome, id do endereço e endereço
-- dos funcionários usando apenas subqueries. A SUBQUERY deve possuir o alias endereco.

SELECT 
    aff.first_name, aff.last_name, aff.address_id, ess.address
FROM
    sakila.staff AS aff
        INNER JOIN
    sakila.address AS ess ON aff.address_id = ess.address_id;
    
    
-- Utilizando a tabela payment, exiba, com uma subquery, o id do cliente e o valor (amount) dos 5 clientes mais novos que possuem o
-- maior valor de pagamento.
SELECT 
    customer_id, amount
FROM
    sakila.payment
WHERE
    amount IN (SELECT 
            MAX(amount)
        FROM
            sakila.payment)
ORDER BY customer_id DESC
LIMIT 5;

--  Utilizando apenas subqueries, exiba os nomes dos atores ou atrizes que já atuaram em mais de 40 filmes.
--  Use as tabelas actor e film_actor.
SELECT 
    first_name, actor_id
FROM
    sakila.actor
WHERE
    actor_id IN (SELECT 
            actor_id
        FROM
            sakila.film_actor
        GROUP BY actor_id
        HAVING COUNT(*) > 40);