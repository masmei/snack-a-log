
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
