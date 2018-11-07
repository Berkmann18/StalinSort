def sort(data):
    copy = data[:]
    length = len(copy)
    i = 1
    while i < length:
        if not copy[i] >= copy[i - 1]:
            del(copy[i])
            length -= 1
        else:
            i += 1
    return copy