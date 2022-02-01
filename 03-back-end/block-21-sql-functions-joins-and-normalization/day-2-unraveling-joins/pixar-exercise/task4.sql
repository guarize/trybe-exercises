SELECT
  the.name AS 'theater',
  the.location,
  mov.title,
  mov.director,
  mov.year
FROM
  Pixar.Theater AS the
  LEFT JOIN Pixar.Movies AS mov ON the.id = mov.theater_id
ORDER BY
  the.name;