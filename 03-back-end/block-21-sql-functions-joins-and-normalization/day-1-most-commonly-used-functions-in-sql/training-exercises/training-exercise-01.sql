-- Manipulating String

-- 1
SELECT
  UCASE('trybe');

-- 2
SELECT
  REPLACE(
    'Você já ouviu falar do DuckDuckGo?',
    'DuckDuckGo',
    'Google'
  );

-- 3
SELECT
  CHAR_LENGTH('Uma frase qualquer');

-- 4
SELECT
  SUBSTRING(
    'A linguagem JavaScript está entre as mais usadas',
    12,
    11
  );

-- 5
SELECT
  LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');
