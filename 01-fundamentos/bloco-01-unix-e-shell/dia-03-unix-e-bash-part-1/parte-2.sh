#!/bin/bash

# Exercício 1

cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

cat countries.txt

# Exercício 3

less countries.txt

# Exercício 4
# Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar

# Exercício 5

grep "Brazil" countries.txt

# Exercício 6

grep "brazil" countries.txt

# Exercício 7

grep -v "fox" phrases.txt

# Exercício 8

cat phrases.txt | wc -w

# Exercício 9

cat phrases.txt | wc -l

# Exercício 10

touch empty.tbt empty.pdf

# Exercício 11

ls -a

# Exercício 12

ls -a *.txt

# Exercício 13

ls -a *.{tbt,txt}

# Exercício 14

man ls