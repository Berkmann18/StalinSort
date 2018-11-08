#!/usr/bin/python3

from stalinsort import sort
import unittest

sorted =[0, 1, 2, 3]
mixed = [0, 2, 1, 8, 4]
reversed = [3, 2, 1, 0]
almost_sorted = [0, 1, 4, 3, 2]
almost_sorted0 = [0, -1, 2, 4, 7]
same = [0, 0, 0]

class AscTest(unittest.TestCase):
  def test_sorted(self):
    self.assertListEqual(sort(sorted), sorted)
  
  def test_empty(self):
    self.assertListEqual(sort([]), [])
  
  def test_reversed(self):
    self.assertListEqual(sort(reversed), [3])

  def test_almost_sorted(self):
    self.assertListEqual(sort(almost_sorted), [0, 1, 4])
    self.assertListEqual(sort(almost_sorted0), [0, 2, 4, 7])
  
  def test_repeated(self):
    self.assertListEqual(sort(same), same)

class DesTest(unittest.TestCase):
  def test_sorted(self):
    self.assertListEqual(sort(sorted, 'des'), [0])
  
  def test_empty(self):
    self.assertListEqual(sort([], 'des'), [])
  
  def test_reversed(self):
    self.assertListEqual(sort(reversed, 'des'), reversed)

  def test_almost_sorted(self):
    self.assertListEqual(sort(almost_sorted, 'des'), [0])
    self.assertListEqual(sort(almost_sorted0, 'des'), [0, -1])
  
  def test_repeated(self):
    self.assertListEqual(sort(same, 'des'), same)

class OrderTest(unittest.TestCase):
  def test_right(self):
    self.assertListEqual(sort(same, 'asc'), same)
    self.assertListEqual(sort(same, 'des'), same)
  
  def test_wrong(self):
    with self.assertRaises(Exception):
      sort(same, 'desc')
    with self.assertRaises(Exception):
      sort(same, 'ascending')
    with self.assertRaises(Exception):
      sort(same, 'descending')
    with self.assertRaises(Exception):
      sort(same, 'DESC')
    with self.assertRaises(Exception):
      sort(same, 'DES')
    with self.assertRaises(Exception):
      sort(same, 'ASC')

if __name__ == '__main__':
  unittest.main()