CREATE TABLE clothes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    brand TEXT NOT NULL,
    imageUrl TEXT,
    description TEXT
);


INSERT INTO clothes (name, price, brand, imageUrl, description) VALUES 
    ('Classic White Shirt', 49.99, 'Armani', 'https://placehold.co/400x600.png', 'Premium cotton white dress shirt'),
    ('Leather Jacket', 299.99, 'Gucci', 'https://placehold.co/400x600.png', 'Luxury leather biker jacket'),
    ('Blue Jeans', 89.99, 'Levis', 'https://placehold.co/400x600.png', 'Classic straight-fit denim jeans'),
    ('Summer Dress', 69.99, 'Chanel', 'https://placehold.co/400x600.png', 'Elegant floral summer dress'),
    ('Sports Shoes', 129.99, 'Nike', 'https://placehold.co/400x600.png', 'High-performance running shoes'),
    ('Wool Sweater', 79.99, 'Prada', 'https://placehold.co/400x600.png', 'Premium wool crew-neck sweater'),
    ('Business Suit', 599.99, 'Hugo Boss', 'https://placehold.co/400x600.png', 'Two-piece charcoal business suit'),
    ('Winter Coat', 399.99, 'Canada Goose', 'https://placehold.co/400x600.png', 'Insulated winter parka coat');