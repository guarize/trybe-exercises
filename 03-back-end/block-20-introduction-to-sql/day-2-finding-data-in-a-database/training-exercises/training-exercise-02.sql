SELECT
  *
FROM
  sakila.film;
SELECT
  CONCAT(title, ' ', release_year) AS `Lançamento do Filme`
FROM
  sakila.film;
SELECT
  CONCAT(title, ' ', rating) AS `Classsificação`
FROM
  sakila.film;
SELECT
  CONCAT(address, ' ', district) AS `Endereço`
FROM
  sakila.address;