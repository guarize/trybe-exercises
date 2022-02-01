SELECT
  mov.title,
  mov.director,
  mov.year,
  the.name AS 'theater',
  the.location
FROM
  Pixar.Theater AS the
  RIGHT JOIN Pixar.Movies AS mov ON the.id = mov.theater_id
ORDER BY
  the.name;