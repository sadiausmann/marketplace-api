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
    description TEXT,
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


INSERT INTO products(name, image_url, category, price, description, location)
VALUES 
('Iphone','https://media.istockphoto.com/id/1190447864/photo/apple-iphone-11-pro-gray-smartphone.jpg?s=612x612&w=0&k=20&c=zETLJeguLoTEFBNKPl1vjPY1lvPW1uM6GPpyiMSvsC0=','electronics', 1000, 'New','Adelaide'),
('T-shirt','https://t4.ftcdn.net/jpg/05/22/48/13/240_F_522481379_o8We8BUuVJpFC7EWUTMsUB7VrulXjnDt.jpg','clothing', 5, 'like new','Adelaide'),
('Sweater','https://t4.ftcdn.net/jpg/02/32/17/05/240_F_232170598_2jokGKCxP4t4qbu8IWvF7d19eT0S7GV0.jpg','clothing', 10, 'like new','Adelaide'),
('Jacket','https://t4.ftcdn.net/jpg/01/97/31/63/240_F_197316393_pwjvuoJrMY1dvYAhjuvHCuTbnteeQ9j6.jpg','clothing', 25, 'like new','Adelaide'),
('Puffer','https://t4.ftcdn.net/jpg/02/36/49/63/240_F_236496348_Pejh1LNDLjsmyDYngfli9n8SNRAARevg.jpg','clothing', 20, 'like new','Adelaide'),
('sandals','https://t4.ftcdn.net/jpg/04/23/36/11/240_F_423361167_Z26DgSr9YYRRondPHAu26DU0o1nfvwSL.jpg','footwear', 10, 'like new','Adelaide'),
('Vintage TV','https://media.istockphoto.com/id/504607326/photo/vintage-television.jpg?s=612x612&w=is&k=20&c=U752iUGkm_WKlR6b559cix964uCCC4WHy316waxFP-k=','electronics', 550, 'Very good condition','Adelaide');


