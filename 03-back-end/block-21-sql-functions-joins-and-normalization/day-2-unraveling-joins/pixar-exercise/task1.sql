SELECT
  mov.title,
  box.domestic_sales,
  box.international_sales
FROM
  Pixar.Movies AS mov
  INNER JOIN Pixar.BoxOffice AS box ON mov.id = box.movie_id;