SELECT
  mov.title,
  box.rating
FROM
  Pixar.Movies AS mov
  INNER JOIN Pixar.BoxOffice AS box ON mov.id = box.movie_id
ORDER BY
  box.rating DESC;