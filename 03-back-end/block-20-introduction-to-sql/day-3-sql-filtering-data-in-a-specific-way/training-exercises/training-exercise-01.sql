-- 1
SELECT
  *
FROM
  sakila.customer
WHERE
  email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- 2
SELECT
  first_name
FROM
  sakila.customer
WHERE
  active IS FALSE
  AND store_id = 2
  AND first_name <> 'KENNETH'
ORDER BY
  first_name;
-- 3
SELECT
  title,
  description,
  release_year,
  replacement_cost
FROM
  sakila.film
WHERE
  rating <> 'NC-17'
  AND replacement_cost >= 18.00
ORDER BY
  replacement_cost DESC,
  title ASC
LIMIT
  100;