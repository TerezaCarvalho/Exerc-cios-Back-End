// EXER INICIAIS DO CONTEÚDO

// -- Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org.
SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org'; 
// -- Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. 
// -- Porém, não inclua o cliente KENNETH no resultado.
SELECT first_name, active, store_id FROM sakila.customer
WHERE active = 0 && store_id = 2 AND first_name NOT LIKE '%KENNETH%'
ORDER BY first_name;
// -- O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo de substituição, 
// -- do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' || rating = 'PG' || rating ='PG-13') && replacement_cost >= 18
ORDER BY replacement_cost DESC
LIMIT 100;
// -- Quantos clientes estão ativos e na loja 1?
// -- Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM sakila.customer WHERE active IS TRUE && store_id = 1;
// -- Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, 
// -- para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM sakila.film
WHERE rating = 'NC-17' || rating = 'R'
ORDER BY rental_rate ASC
LIMIT 50;


// EXERCÍCIOS LIKE

SELECT * FROM sakila.film;
// -- Encontre todos os detalhes dos filmes que contêm a palavra "ace" no nome.
SELECT * FROM sakila.film WHERE title LIKE '%ace%'; 
// -- Encontre todos os detalhes dos filmes cujas descrições finalizam com "china".
SELECT * FROM sakila.film WHERE description LIKE '%china';
// -- Encontre todos os detalhes dos 2 filmes cujas descrições contêm a palavra "girl" e o título finaliza com a palavra "lord".
SELECT * FROM sakila.film WHERE description LIKE '%girl%' AND title LIKE '%lord';
// -- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra "gon".
SELECT * FROM sakila.film WHERE title LIKE '___gon%';
// -- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra "gon" e a descrição contém a palavra "Documentary".
SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
// -- Encontre os 2 filmes cujos títulos ou finalizam com "academy" ou inciam com "mosquito".
SELECT * FROM sakila.film WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
// -- Encontre os 6 filmes que contêm as palavras "monkey" e "sumo" em suas descrições.
SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

// IN E BETWEEN

// -- Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy,
// --  ordenados por nome em ordem alfabética.
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
// -- Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email, address_id FROM sakila.customer WHERE address_id IN (172, 173, 174, 175, 176) ORDER BY email;
// -- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados,
// -- as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT * FROM sakila.payment WHERE Payment_date BETWEEN '2005-05-01' AND '2005-08-01';
// -- Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6.
// -- Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
SELECT * FROM sakila.film;
SELECT title, release_year, rental_duration FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC;
// -- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade.
// -- Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rating FROM sakila.film WHERE rating in('PG','PG-13') ORDER BY rating LIMIT 500;


// EXER DATAS

SELECT * FROM sakila.payment;
// -- Quantos aluguéis temos com a data de retorno 2005-08-29? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT * FROM sakila.rental WHERE return_date LIKE '2005-08-29%';
SELECT * FROM sakila.rental WHERE DATE( return_date ) = '2005-08-29';
SELECT COUNT(1) FROM sakila.rental WHERE return_date LIKE '2005-08-29%';
SELECT COUNT(1) FROM sakila.rental WHERE DATE( return_date ) = '2005-08-29';
// -- Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005?
SELECT * FROM sakila.rental WHERE rental_date BETWEEN '2005-07-01' AND '2005-08-22';
SELECT COUNT(1) FROM sakila.rental WHERE rental_date BETWEEN '2005-07-01' AND '2005-08-22';
// -- Usando a tabela rental, extraia a data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
    // -- Data
    SELECT DATE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Ano
    SELECT YEAR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Mês
    SELECT MONTH(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Dia
    SELECT DAY(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Hora
    SELECT HOUR(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Minuto
    SELECT MINUTE(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
    // -- Segundo
    SELECT SECOND(rental_date) FROM sakila.rental
    WHERE rental_id = 10330;
// -- Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
    SELECT rental_id,rental_date FROM sakila.rental
    WHERE rental_date like '2005-08-18 00:14:03%'


    // EXER Scientists

// -- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra 'e' em seu nome.
SELECT * FROM Scientists.Scientists WHERE Name LIKE '%E%';
// -- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resulto em ordem alfabética.
SELECT * FROM Scientists.Projects WHERE Code LIKE 'A%' ORDER BY Code;
// -- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resulto em ordem alfabética.
SELECT * FROM Scientists.Projects WHERE Code LIKE '%3%' ORDER BY Code;
// -- Escreva uma query para exibir todos os cientistas cujos projetos sejam AeH3, Ast3 ou Che1.
SELECT * FROM Scientists.Projects WHERE Code IN ('AeH3', 'Ast3', 'Che1');
// -- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.
SELECT * FROM Scientists.Projects WHERE Hours >= 500;
// -- Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.
SELECT * FROM Scientists.Projects WHERE Hours > 250 && Hours < 800;
// -- Escreva uma query para exibir o nome e o código de todos os projetos cujo o nome NÃO inicie com a A.
SELECT * FROM Scientists.Projects WHERE Name NOT LIKE 'A%';
// -- Escreva uma query para exibir o nome de todos os projetos cujo o código contenha a letra H.
SELECT * FROM Scientists.Projects WHERE Code LIKE '%H%' ORDER BY Code;