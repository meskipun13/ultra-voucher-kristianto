
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    parent_id INT
);


INSERT INTO users (id, name, parent_id) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwan', 2),
(4, 'Arka', 3);


SELECT 
    a.id, 
    a.name, 
    b.name as parent_id
FROM
users a
LEFT JOIN users b ON a.parent_id = b.id



