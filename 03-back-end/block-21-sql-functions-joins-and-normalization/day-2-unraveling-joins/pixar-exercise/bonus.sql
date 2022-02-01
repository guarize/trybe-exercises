SELECT
  mov.title,
  mov.director,
  mov.year,
  mov.length_minutes,
  mov.theater_id,
  box.rating
FROM
  Pixar.Movies AS mov
  INNER JOIN Pixar.BoxOffice AS box ON mov.id = box.movie_id
WHERE
  box.rating > 8;