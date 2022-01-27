-- 1
SELECT
  *
FROM
  PecasFornecedores.Pecas
WHERE
  name LIKE 'GR%';

-- 2
SELECT
  *
FROM
  PecasFornecedores.Fornecimentos
WHERE
  peca = 2
ORDER BY
  Fornecedor;

-- 3
SELECT
  peca,
  preco,
  fornecedor
FROM
  PecasFornecedores.Fornecimentos
WHERE
  fornecedor LIKE '%N%';

-- 4
SELECT
  *
FROM
  PecasFornecedores.Fornecedores
WHERE
  name LIKE '%LTDA';

-- 5
SELECT
  COUNT(*)
FROM
  PecasFornecedores.Fornecedores
WHERE
  code LIKE '%F%';

-- 6
SELECT
  *
FROM
  PecasFornecedores.Fornecimentos
WHERE
  preco BETWEEN 15
  AND 40
ORDER BY
  preco;

-- 7
SELECT
  COUNT(*)
FROM
  PecasFornecedores.Vendas
WHERE
  DATE(order_date) BETWEEN '2018-04-15'
  AND '2019-07-30';
