#!/usr/bin/python3

"""StalinSort in python3"""

def sort(data, order='asc'):
    """
    Sort a list of numbers the Stalin way (i.e. removes items that aren't in order).
    Parameters
    ----------
    data : number[]
        List of numbers
    Returns
    -------
    copy
        Sorted list

    Raises
    ------
    Exception
        Invalid order
    """
    copy = data[:]
    length = len(copy)
    i = 1
    if order == 'asc':
        while i < length:
            if not copy[i] >= copy[i - 1]:
                copy.remove(copy[i])
                length -= 1
            else:
                i += 1
    elif order == 'des':
        while i < length:
            if not copy[i] <= copy[i - 1]:
                copy.remove(copy[i])
                length -= 1
            else:
                i += 1
    else:
        raise Exception('Invalid order:', order)
    return copy
