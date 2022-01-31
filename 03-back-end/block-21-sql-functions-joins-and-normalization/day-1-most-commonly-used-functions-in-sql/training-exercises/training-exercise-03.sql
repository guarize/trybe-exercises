-- SQL Math Functions

-- 1
SELECT
  IF (13 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Impar';

-- 2
SELECT
  220 DIV 12;

-- 3
SELECT
  IF (220 MOD 12 = 0, 'Não', 220 MOD 12);

-- 4
SELECT
  ROUND(15 + (RAND() * 5));

-- 5
SELECT
  ROUND(15.7515971, 5);

-- 6
SELECT
  FLOOR(39.494);

-- 7
SELECT
  CEIL(85.234);
