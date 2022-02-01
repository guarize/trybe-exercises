-- How to use INNER JOIN
-- 1
SELECT
  act.actor_id,
  CONCAT(act.first_name, ' ', act.last_name) AS actor_name,
  fa.film_id
FROM
  sakila.actor AS act
  INNER JOIN sakila.film_actor AS fa ON act.actor_id = fa.actor_id;

-- 2
SELECT
  *
FROM
  sakila.staff;
SELECT
  *
FROM
  sakila.address;
SELECT
  S.first_name,
  S.last_name,
  A.address
FROM
  sakila.staff AS S
  INNER JOIN sakila.address AS A ON S.address_id = A.address_id;