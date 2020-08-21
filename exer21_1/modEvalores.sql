-- MOD

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar.
-- Chame essa coluna de 'Par ou Ímpar', onde ela pode dizer 'Par' ou 'Impar'.
SELECT IF(15 MOD 2 = 0, 'PAR', 'ÍMPAR') AS 'Par ou Ímpar';
SELECT IF(100 MOD 2 = 0, 'PAR', 'ÍMPAR') AS 'Par ou Ímpar';

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém
-- fique de fora?
SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: Temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;


--Arredondando Valores

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493


SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

--Exponenciação e Raiz Quadrada

SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4


-- GERANDO VALORES ALEATÓRIOS
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT FLOOR(7 + (RAND() * 6));
-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))



-- Monte uma query que gere um valor entre 15 e 20.
SELECT FLOOR(15 + (RAND() * 5));

-- Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.
SELECT ROUND(15.75, 5);

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);

