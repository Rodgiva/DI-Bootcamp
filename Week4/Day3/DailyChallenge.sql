-- Part I

-- 1. Create 2 tables : Customer and Customer profile. They have a One to One relationship.
--     A customer can have only one profile, and a profile belongs to only one customer
--     The Customer table should have the columns : id, first_name, last_name NOT NULL
--     The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)

-- create table Customer (
-- 	customer_id serial primary key,
-- 	first_name varchar(50),
-- 	last_name varchar(50) NOT NULL
-- );

-- create table Customer_profile (
-- 	profile_id serial primary key,
-- 	isLoggedIn boolean DEFAULT false,
-- 	customer_id int,
	
-- 	foreign key(customer_id) references Customer(customer_id) on delete cascade
-- );


-- 2. Insert those customers
--     John, Doe
--     Jerome, Lalu
--     Lea, Rive

-- insert into Customer (first_name, last_name)
-- values
-- 	('John', 'Doe'),
-- 	('Jerome', 'Lalu'),
-- 	('Lea', 'Rive');


-- 3. Insert those customer profiles, use subqueries
--     John is loggedIn
--     Jerome is not logged in

-- insert into customer_profile (isLoggedIn, customer_id)
-- values
-- 	(true, (select customer_id from Customer where first_name = 'John')),
-- 	(false, (select customer_id from Customer where first_name = 'Jerome'))


-- 4. Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

select c.first_name
from Customer as c
join Customer_profile as cp
on cp.customer_id = c.customer_id
where cp.isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.

select c.first_name, cp.isLoggedIn
from Customer as c
full join Customer_profile as cp
on cp.customer_id = c.customer_id;

-- The number of customers that are not LoggedIn

select count(*)
from Customer as c
full join Customer_profile as cp
on cp.customer_id = c.customer_id
where cp.isLoggedIn = false;


-- Part II: 

-- 1. Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- create table Book (
-- 	book_id serial PRIMARY KEY,
-- 	title varchar(50) NOT NULL,
-- 	author varchar(50) NOT NULL
-- );

-- 2. Insert those books : 
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- insert into Book (title, author)
-- values 
-- 	('Alice In Wonderland', 'Lewis Carroll'),
-- 	('Harry Potter', 'J.K Rowling'),
-- 	('To kill a mockingbird', 'Harper Lee')

-- 3. Create a table named Student, with the columns :
-- student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age.
-- Make sure that the age is never bigger than 15 (Find an SQL method);

-- create table Student (
-- 	student_id SERIAL PRIMARY KEY,
-- 	name varchar(50) NOT NULL UNIQUE,
-- 	age int check(age <= 15)
-- )

-- 4. Insert those students:
--     John, 12
--     Lera, 11
--     Patrick, 10
--     Bob, 14

-- insert into Student (name, age)
-- values 
-- 	('John', 12),
-- 	('Lebra', 11),
-- 	('Patrick', 10),
-- 	('Bob', 14)

-- 5. Create a table named Library, with the columns : 

-- create table Library (
-- 	book_fk_id integer,
-- 	student_id integer,
-- 	borrowed_date date,
	
-- 	foreign key(book_fk_id) references Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- 	foreign key(student_id) references Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- )

-- 6. Add 4 records in the junction table, use subqueries.
--     the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
--     the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
--     the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
--     the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- insert into Library(student_id, book_fk_id, borrowed_date)
-- values
-- 	(
-- 		(select student_id from Student where name = 'John'),
-- 		(select book_id from Book where title = 'Alice In Wonderland'),
-- 		'15/02/2022'
-- 	),
-- 	(
-- 		(select student_id from Student where name = 'Bob'),
-- 		(select book_id from Book where title = 'To kill a mockingbird'),
-- 		'03/03/2021'
-- 	),
-- 	(
-- 		(select student_id from Student where name = 'Lera'),
-- 		(select book_id from Book where title = 'Alice In Wonderland'),
-- 		'23/05/2021'
-- 	),
-- 	(
-- 		(select student_id from Student where name = 'Bob'),
-- 		(select book_id from Book where title = 'Harry Potter'),
-- 		'12/08/2021'
-- 	)

-- 7. Display the data
-- Select all the columns from the junction table
select * from Library;

-- Select the name of the student and the title of the borrowed books
select s.name, b.title
from Book as b
join Library as l
on l.book_fk_id = b.book_id
join Student as s
on l.student_id = s.student_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
select avg(s.age)
from Student as s
join Library as l
on l.student_id = s.student_id
join Book as b
on l.book_fk_id = b.book_id
where b.title = 'Alice in Wonderland';

-- Delete a student from the Student table, what happened in the junction table ?
delete from Student where age = 11;
-- Apparently it didn't delete in Library
-- select * from library;
-- select * from Student;
-- select * from Book;