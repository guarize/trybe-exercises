SELECT
  mov.title,
  (box.domestic_sales + box.international_sales) AS 'Sales'
FROM
  Pixar.Movies AS mov
  INNER JOIN Pixar.BoxOffice AS box ON mov.id = box.movie_id
WHERE
  box.international_sales > box.domestic_sales;