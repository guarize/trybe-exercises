-- 1
SELECT
  'This is SQL Exercise, Practice and Solution';
-- 2
SELECT
  1,
  2,
  3;
-- 3
SELECT
  10 + 15;
-- 4
SELECT
  (5 * 11) + (250 / 50);
-- 5
SELECT
  *
FROM
  Scientists.Scientists;
-- 6
SELECT
  name AS 'Nome do Projeto',
  hours AS 'Tempo de Trabalho'
FROM
  Scientists.Projects;
-- 7
SELECT
  Name
FROM
  Scientists
ORDER BY
  Name ASC;
-- 8
SELECT
  Name
FROM
  Scientists
ORDER BY
  Name DESC;
-- 9
SELECT
  CONCAT(
    "O projeto ",
    Name,
    " precisou de",
    Hours,
    " horas para ser concluído."
  )
FROM
  Projects;
-- 10
SELECT
  Name,
  Hours
FROM
  Projects
ORDER BY
  Hours DESC
LIMIT
  3;
-- 11
SELECT
  DISTINCT Project
FROM
  AssignedTo;
-- 12
SELECT
  Name
FROM
  Projects
ORDER BY
  Hours DESC
LIMIT
  1;
-- 13
SELECT
  Name
FROM
  Projects
ORDER BY
  Hours ASC
LIMIT
  1 OFFSET 1;
-- 14
SELECT
  Name
FROM
  Projects
ORDER BY
  Hours ASC
LIMIT
  5;
-- 15
SELECT
  CONCAT(
    'Existem ',
    COUNT(Name),
    ' cientistas na tabela Scientists.'
  )
FROM
  Scientists;