-- 🌟 Exercise 1: DVD Rental
-- Instructions

-- 1. Get a list of all the languages, from the language table.
select * from language;

-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select f.title, f.description, l.name
from film as f
join language as l
on l.language_id = f.language_id;

-- 3. Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select f.title, f.description, l.name
from language as l
left join film as f
on l.language_id = f.language_id;

-- 4. Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table new_film(
-- 	id serial primary key,
-- 	name varchar(50)
-- );
-- insert into new_film (name)
-- values
-- 	('The Lord of the Ring'),
-- 	('Asterix et Obelix: Mission Cléopatre'),
-- 	('OSS 117'),
-- 	('Requiem of a Dream');

-- 5. Create a new table called customer_review, which will contain film reviews that customers will make.
--     Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.

-- create table customer_review(
-- 	review_id serial primary key,
-- 	film_id integer,
-- 	language_id integer,
-- 	title varchar(50),
-- 	score integer check(score >= 0 and score <=10),
-- 	review_text text,
-- 	last_update date,
-- 	FOREIGN KEY (film_id) REFERENCES new_film(id),
-- 	FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- 6. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert into customer_review (film_id, language_id, title, score, review_text, last_update)
-- values
-- 	(
-- 		(select id from new_film where new_film.name = 'The Lord of the Ring'),
-- 		(select language_id from language where language.name = 'English'),
-- 		'The best movie ever made',
-- 		10,
-- 		'Just a journey into the Mordor',
-- 		NOW()
-- 	),
-- 	(
-- 		(select id from new_film where new_film.name = 'OSS 117'),
-- 		(select language_id from language where language.name = 'Francais'),
-- 		'Funny',
-- 		8,
-- 		'A funny movie',
-- 		NOW()
-- 	)

-- 7. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- delete from new_film as nf
-- where nf.name = 'OSS 117';

-- select * from customer_review;
-- I forgot to add the delete cascade


-- Exercise 2 : DVD Rental
-- Instructions

-- 1. Use UPDATE to change the language of some films. Make sure that you use valid languages.
select * from language;

update language
set 