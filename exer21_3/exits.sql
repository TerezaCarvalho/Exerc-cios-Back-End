-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que ainda não foram emprestados.
SELECT title, id FROM hotel.Books AS ook WHERE NOT EXISTS (SELECT * FROM hotel.Books_lent WHERE ook.id = book_id);

-- Usando o EXISTS na tabela books_lent e books, exiba o id e título dos livros que estão atualmente emprestados e que
-- contém a palavra "lost" no título.
SELECT id, title FROM hotel.Books AS ook WHERE EXISTS(SELECT * FROM hotel.BookS_lent WHERE ook.id = book_id AND ook.title LIKE '% lost%');

-- Usando a tabela carsales e customers, exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT name FROM hotel.Customers AS cus WHERE NOT EXISTS ( SELECT * FROM hotel.CarSales WHERE cus.CustomerID = CustomerID);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers e carsales, exiba o nome do
-- cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT cus.name, car.name
FROM hotel.Cars AS car
INNER JOIN hotel.customers AS cus WHERE EXISTS (SELECT * FROM hotel.CarSales WHERE CustomerID = cus.CustomerID AND carID = car.ID);