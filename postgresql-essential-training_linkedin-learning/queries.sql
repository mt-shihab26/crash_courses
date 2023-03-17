-- @block
CREATE SCHEMA human_resources AUTHORIZATION postgres;
-- @block
CREATE TABLE manufacturing.categories (
    category_id INT4 NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    market VARCHAR(20) NOT NULL
);
-- @block
ALTER TABLE manufacturing.categories OWNER TO postgres;
-- @block
ALTER TABLE IF EXISTS manufacturing.products
    ADD FOREIGN KEY (category_id)
    REFERENCES manufacturing.categories (category_id) MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE NO ACTION;



-- Retriving Date
-- @block
-- Select all columns from products table
SELECT *
FROM manufacturing.products;

-- @block
-- Select specific columns
SELECT name, manufacturing_cost
FROM manufacturing.products;

-- @block
-- Filter the rows returned
SELECT name, manufacturing_cost, category_id
FROM manufacturing.products
WHERE category_id = 3;

-- @block
-- Make sure your data types agree in the WHERE clause!
SELECT name, manufacturing_cost
FROM manufacturing.products
WHERE manufacturing_cost < '$10';


-- @block
-- Create a query that joins related tables together
SELECT products.products_id,
    products.name AS products_name,
    products.manufacturing_cost,
    categories.name AS categories_name,
    categories.market
FROM manufacturing.products JOIN manufacturing.categories
    ON products.category_id = categories.category_id
WHERE market = 'industrial';


-- Database View
-- @block
CREATE VIEW manufacturing.products_details AS
SELECT products.products_id,
    products.name AS products_name,
    products.manufacturing_cost,
    categories.name AS categories_name,
    categories.market
FROM manufacturing.products JOIN manufacturing.categories
    ON products.category_id = categories.category_id;

--@block
SELECT *
FROM manufacturing.products_details
WHERE categories_name = 'wind harvesters';


--@block
SELECT *
FROM human_resources.employees JOIN human_resources.departments
    ON employees.department_id = departments.departments_id
WHERE building = 'South';

--@block
CREATE VIEW human_resources.employees_details AS
SELECT employees.employees_id,
    employees.first_name,
    employees.last_name,
    employees.hire_data,
    departments.departments_name,
    departments.building
FROM human_resources.employees JOIN human_resources.departments
    ON employees.department_id = departments.departments_id;

--@block
SELECT *
FROM human_resources.employees_details
WHERE building = 'South';


-- View tables from the KinetEco database
SELECT * FROM manufacturing.products;
SELECT * FROM human_resources.employees;

-- Impersonate the hr_manager
SET ROLE hr_manager;

-- Switch permissions back to posgres super user
RESET ROLE;

-- Give hr_manager permissions in database
GRANT USAGE ON SCHEMA human_resources TO hr_manager;
GRANT SELECT ON ALL TABLES IN SCHEMA human_resources TO hr_manager;
GRANT ALL ON ALL TABLES IN SCHEMA human_resources TO hr_manager;

-- Remove the hr_manager role from Postgres Server
RESET ROLE;
REVOKE ALL ON ALL TABLES IN SCHEMA human_resources FROM hr_manager;
REVOKE USAGE ON SCHEMA human_resources FROM hr_manager;
DROP ROLE hr_manager;