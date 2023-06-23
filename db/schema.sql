CREATE DATABASE marketplace_app;
\c marketplace_app

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password_digest TEXT
);

CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name TEXT,
    user_id INT,
    image_url TEXT,
    category TEXT,
    price INT,
    descriptipn TEXT,
    location TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    user_id INT,
    product_id INT,
    comment TEXT,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(product_id) REFERENCES products(id)
);

CREATE TABLE searches(
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_category TEXT,
    product_price INT,
    product_location TEXT,
    FOREIGN KEY(product_name) REFERENCES products(name),
    FOREIGN KEY(product_category) REFERENCES products(category),
    FOREIGN KEY(product_price) REFERENCES products(price),
    FOREIGN KEY(product_location) REFERENCES products(location)
);