-- 1
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%don';

-- 2
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'plu%';

-- 3
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '%plu%';

-- 4
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'p%r';

-- 5
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '_C%';

-- 6
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE '________';

-- 7
SELECT
  *
FROM
  sakila.film
WHERE
  title LIKE 'E__%';