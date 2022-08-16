DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INTEGER,
    protein INTEGER,
    added_sugar INTEGER,
    is_healthy BOOLEAN,
    image TEXT
);


-- psql -U postgres -f db/schema.sql
-- psql -U postgres -f db/seed.sql
