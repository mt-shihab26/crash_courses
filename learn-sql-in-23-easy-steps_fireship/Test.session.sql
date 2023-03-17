-- @BLOCK
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);


-- @BLOCK
INSERT INTO Users (email, bio, country)
VALUES (
        'hello2@world.com',
        'i love strangers!',
        'us'
    );


-- @BLOCK
INSERT INTO Users (email, bio, country)
VALUES ('hello2@world.com', 'foo', 'US'),
    ('hola@munda.com', 'bar', 'MX'),
    ('bonjour@monda.com', 'baz', 'FR');


-- @BLOCK
SELECT * FROM Users;


-- @BLOCK
SELECT email, id FROM Users;


-- @BLOCK
SELECT email, id FROM Users 
LIMIT 2;


-- @BLOCK
SELECT email, id FROM Users 
ORDER BY id ASC
LIMIT 2;


-- @BLOCK
SELECT email, id FROM Users

WHERE country = 'us'

ORDER BY id ASC
LIMIT 2;


-- @BLOCK
SELECT email, id FROM Users

WHERE country = 'us' AND id > 1

ORDER BY id ASC
LIMIT 2;


-- @BLOCK
SELECT email, id FROM Users

WHERE country = 'us' OR id > 1

ORDER BY id ASC
LIMIT 2;


-- @BLOCK
SELECT email, id FROM Users

WHERE country = 'us' AND email LIKE 'hello%'

ORDER BY id ASC
LIMIT 2;


-- @BLOCK
CREATE INDEX email_index ON Users(email);


-- @BLOCK
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);


-- @BLOCK
INSERT INTO Rooms (owner_id, street) 
VALUES 
    (1, 'san diego sailboat'),
    (1, 'nantucket cottage'),
    (1, 'vail cabin'),
    (1, 'sf cardboard box');


-- @BLOCK
SELECT * FROM Rooms;


-- @BLOCK
SELECT * FROM Users
INNER JOIN Rooms
ON Rooms.owner_id = Users.id;


-- @BLOCK
SELECT * FROM Users
LEFT JOIN Rooms
ON Rooms.owner_id = Users.id;


-- @BLOCK
SELECT * FROM Users
RIGHT JOIN Rooms
ON Rooms.owner_id = Users.id;


-- @BLOCK
SELECT 
    Users.id AS users_id,
    Rooms.id AS rooms_id,
    email,
    street
FROM Users
INNER JOIN Rooms ON Rooms.owner_id = Users.id;


-- @BLOCK
CREATE TABLE Bookings (
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (guest_id) REFERENCES Users(id),
    FOREIGN KEY (room_id) REFERENCES Rooms(id)
);


-- @BLOCK Rooms a user has booked
SELECT 
    guest_id,
    street,
    check_in
FROM Bookings
INNER JOIN Rooms on Rooms.owner_id = guest_id
WHERE guest_id = 1;
