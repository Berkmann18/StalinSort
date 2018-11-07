#!/bin/python3
from stalinsort import sort
print
sorted = [0, 1, 2, 3, 4, 5]
mixed = [0, 2, 1, 8, 4]
rev = [4, 3, 2, 1]
same = [0, 0, 0]

print('sorted=', sorted, '=>', sort(sorted))
print('mixed=', mixed, '=>', sort(mixed))
print('rev=', rev, '=>', sort(rev))
print('same=', same, '=>', sort(same))