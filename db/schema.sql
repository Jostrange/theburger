CREATE DATABASE burgers_db;

 USE burgers_db;
 
 CREATE TABLE menu (
 id integer(11) auto_increment not null,
 burger_name varchar(1000),
 devoured tinyint(1),
 PRIMARY KEY (id));
 
 -- BOOLEAN DEFAULT false