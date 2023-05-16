CREATE SCHEMA IF NOT EXISTS ficha7_backend ;
USE ficha7_backend ;

CREATE TABLE IF NOT EXISTS persons (
  id INT NOT NULL AUTO_INCREMENT,
  fistname VARCHAR(100) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  profession VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY (id));
  
INSERT INTO persons(fistname, lastname, profession,age) VALUES
('Roberto', 'Moniz','Estudante', '27'),
('Saul', 'Pinto','Estudante', '8'),
('Jackeline', 'Camara','Estudante', '18'),
('Miguel', 'Peñaranda','Estudante', '20');

CREATE USER 'roberto'@'localhost' IDENTIFIED BY '12345';
GRANT ALL PRIVILEGES ON ficha7_backend.* TO 'roberto'@'localhost';
FLUSH PRIVILEGES;
