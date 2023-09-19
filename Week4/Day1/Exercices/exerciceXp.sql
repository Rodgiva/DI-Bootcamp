-- CREATE TABLE items (
-- 	id serial primary key,
-- 	name varchar(50),
-- 	amount int
-- );

-- CREATE TABLE customers (
-- 	id serial primary key,
-- 	f_name varchar(50),
-- 	l_name varchar(50)
-- );

-- insert into items (name, amount)
-- values
-- ('Small Desk', 100),
-- ('Large Desk', 300),
-- ('Fan', 80);

-- insert into customers (f_name, l_name)
-- values
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

select * from items;

select * from items
where amount > 80;

select * from items
where amount <= 300;

select * from customers
where l_name = 'Smith';
-- nothing outputed, because there is not 'Smith' inserted in the l_name column

select * from customers
where l_name = 'Jones';

select * from customers
where f_name != 'Scott';
