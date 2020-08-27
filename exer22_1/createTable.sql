-- CREATE DATABASE IF NOT exists albuns

USE albuns;

-- CREATE TABLE artistas (
-- artista_id INT PRIMARY KEY auto_increment,
-- nome VARCHAR(50)
-- ) engine=InnoDB;

-- CREATE TABLE album(
-- album_id INT PRIMARY KEY auto_increment,
-- artist_id INT NOT NULL, 
-- título VARCHAR(100) NOT NULL,
-- preço DECIMAL(5,2) NOT NULL,
-- estilo_id INT NOT NULL,
-- FOREIGN KEY(artist_id)references artistas(artista_id),
-- FOREIGN KEY(estilo_id)references ESTILOMusical(estilo_id)
-- )engine=InnoDB;

--  ***> SÓ CONSEGUIMOS CRIAR REFERÊNCIAS QUE JÁ EXISTEM 
--  ***> TEM QUE CRIAR A TABELA FILHO PRIMEIRO

-- CREATE TABLE ESTILOMusical(
-- estilo_id INT PRIMARY KEY auto_increment,
-- nome VARCHAR(50) NOT NULL
-- )engine=InnoDB;

CREATE TABLE CANÇAO(
cançao_id INT PRIMARY KEY auto_increment,
nome VARCHAR(50) NOT NULL,
album_id INT NOT NULL,
FOREIGN KEY(album_id)references album(album_id)
)engine=InnoDB;
