-- 🌟 Exercise 1 : Items and customers

-- All items, ordered by price (lowest to highest).
select * from items
order by price;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items
where price >= 80
order by price desc;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
select f_name, l_name from customers
where id <= 3
order by f_name;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
select l_name from customers
order by l_name desc;