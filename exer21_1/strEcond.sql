-- STRINGS

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
SELECT UCASE('TRYBE');

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo?', 'Google');

-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
SELECT LENGTH ('Uma frase qualquer');

-- Extraia e retorne a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10); -- (index, lenght)

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');


-- CONDICIONAIS

-- Usando o IF na tabela sakila.film, exiba o id do filme, o título e uma coluna extra chamada 'conheço o filme?',
-- em que deve-se avaliar se o nome do filme é 'ACE GOLDFINGER'. Caso seja, exiba "Já assisti esse filme". Caso contrário,
-- exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.
SELECT 
    *
FROM
    sakila.film;
SELECT 
    film_id,
    title,
    IF(title = 'ACE GOLDFINGER',
        'Já assisti esse filme',
        'Não conheço o filme') AS 'conheço o filme?'
FROM
    sakila.film;

-- Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating)
-- e uma coluna extra que vamos chamar de 'público alvo', em que classificaremos o filme de acordo com as seguintes siglas:

-- G: "Livre para todos";
-- PG: "Não recomendado para menores de 10 anos";
-- PG-13: "Não recomendado para menores de 13 anos";
-- R: "Não recomendado para menores de 17 anos";
-- Se não cair em nenhuma das classificações anteriores: "Proibido para menores de idade".

SELECT 
    title,
    rating,
    CASE
        WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = PG - 13 THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
        ELSE 'Proibido para menores de idade'
    END AS 'público alvo'
FROM
    sakila.film;




