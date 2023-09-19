-- CREATE TABLE students (
-- 	id serial primary key,
-- 	last_name varchar(50),
-- 	first_name varchar(50),
-- 	birth_date date
-- );

-- insert into students (first_name, last_name, birth_date)
-- values
-- 	('Marc', 'Benichou', '02/11/1998'),
-- 	('Yoan', 'Cohen', '03/12/2010'),
-- 	('Lea', 'Benichou', '27/07/1987'),
-- 	('Amelia', 'Dux', '07/04/1996'),
-- 	('David', 'Grez', '14/06/2003'),
-- 	('Omer', 'Simpson', '03/10/1980')
-- 	('Antonio', 'Banderas', '10/08/1960');


-- select * from students;

-- select first_name, last_name from students;

-- select first_name, last_name from students
-- where id = 2;

-- select first_name, last_name from students
-- where last_name = 'Benichou' and first_name = 'Marc';

-- select first_name, last_name from students
-- where last_name = 'Benichou' or first_name = 'Marc';

-- select first_name, last_name from students
-- where first_name like '%a%';

-- select first_name, last_name from students
-- where first_name like 'a%';

-- select first_name, last_name from students
-- where first_name like '%a';

-- select first_name, last_name from students
-- where first_name like '_%a%';

-- select first_name, last_name from students
-- where id in (1,3);

-- select * from students
-- where birth_date >= '1/01/2000';

--------------------------------------------------------

select first_name, last_name, birth_date from students
where id <= 4
order by last_name;

select * from students;

select first_name, last_name, birth_date from students
where birth_date = (
	select max(birth_date) from students
);

select first_name, last_name, birth_date from students
where id between 3 and 5;
