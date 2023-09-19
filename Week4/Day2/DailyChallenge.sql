-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab;

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)
-- ;

-- SELECT * FROM SecondTab;

-------------------------------------------------------------

-- Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );

-- The output will be: 3
-- result: 0
-- -> I don't understand why

-- Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );

-- The output will be: 3
-- result: 2
-- -> I don't understand why too (4 - 1 should be 3)

-- Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
	
-- The output will be: 2
-- result: 0
-- -> I don't understand why

-- Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
	
-- The output will be: 3
-- result: 2
-- -> I don't understand why

-------------------------------------------------------------

-- After seeing the video correction, I understand why:
-- The null value is a third type of value (with true and false)
-- When I ask to compare with null it will return nothing, because null is not a value.