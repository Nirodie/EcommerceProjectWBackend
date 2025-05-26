CREATE TABLE clothes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    brand TEXT NOT NULL,
    imageUrl TEXT,
    description TEXT,
    SKU TEXT
);


INSERT INTO clothes (name, price, brand, imageUrl, description, SKU) VALUES 
    ('Classic White Shirt', 49, 'Armani', 'https://placehold.co/400x600.png', 'Premium cotton white dress shirt', 'WS01'),
    ('Leather Jacket', 299, 'Gucci', 'https://placehold.co/400x600.png', 'Luxury leather biker jacket', 'LJ01'),
    ('Blue Jeans', 89, 'Levis', 'https://placehold.co/400x600.png', 'Classic straight-fit denim jeans', 'BJ01'),
    ('Summer Dress', 69, 'Chanel', 'https://placehold.co/400x600.png', 'Elegant floral summer dress', 'SD01'),
    ('Sports Shoes', 129, 'Nike', 'https://placehold.co/400x600.png', 'High-performance running shoes', 'SS01'),
    ('Wool Sweater', 79, 'Prada', 'https://placehold.co/400x600.png', 'Premium wool crew-neck sweater', 'WS01'),
    ('Business Suit', 599, 'Hugo Boss', 'https://placehold.co/400x600.png', 'Two-piece charcoal business suit', 'BS01'),
    ('Winter Coat', 399, 'Canada Goose', 'https://placehold.co/400x600.png', 'Insulated winter parka coat', 'WC01');