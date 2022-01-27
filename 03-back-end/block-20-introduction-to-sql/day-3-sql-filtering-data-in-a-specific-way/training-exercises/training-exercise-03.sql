-- 1
SELECT
  first_name,
  last_name,
  email
FROM
  sakila.customer
WHERE
  last_name IN (
    'hicks',
    'crawford',
    'henry',
    'boyd',
    'mason',
    'morale',
    'kennedy'
  )
ORDER BY
  first_name;

-- 2
SELECT
  email
FROM
  sakila.customer
WHERE
  address_id BETWEEN 172
  AND 176
ORDER BY
  email;