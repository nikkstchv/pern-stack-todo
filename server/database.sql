CREATE DATABASE perntodo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  -- todo_data INTEGER,
  description VARCHAR(255)
);