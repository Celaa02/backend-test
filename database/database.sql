CREATE DATABASE USERS;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(35),
    birthdate DATE,
    identificatenum numeric
);

INSERT INTO USERS (username, birthdate, identificatenum ) VALUES 
    ('Darly Vergara Alvarez', '1994-03-07', '1067930447');