-- 1
SELECT
  active,
  COUNT(*) AS 'Amount'
FROM
  sakila.customer
GROUP BY
  active;
-- 2
SELECT
  store_id,
  active,
  COUNT(*)
FROM
  sakila.customer
GROUP BY
  store_id,
  active;
-- 3
SELECT
  AVG(rental_duration) AS avg_rental_duration,
  rating
FROM
  sakila.film
GROUP BY
  rating
ORDER BY
  avg_rental_duration DESC;
-- 4
SELECT
  district,
  COUNT(*)
FROM
  sakila.address
GROUP BY
  district
ORDER BY
  COUNT(*) DESC;
-- 5
SELECT
  rating,
  AVG(length) AS avg_duration
FROM
  sakila.film
GROUP BY
  rating
HAVING
  avg_duration BETWEEN 115.0
  AND 121.50
ORDER BY
  avg_duration DESC;
-- 6
SELECT
  rating,
  SUM(replacement_cost) AS total_replacement_cost
FROM
  sakila.film
GROUP by
  rating
HAVING
  total_replacement_cost > 3950.50
ORDER BY
  total_replacement_cost;