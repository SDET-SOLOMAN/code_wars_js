# #Permutation position In this kata you will have to permutate through a string of lowercase letters, each permutation will start at a and you must calculate how many iterations it takes to reach the current permutation.

# ##examples

# input: 'a'
# result: 1

# input: 'c'
# result: 3

# input: 'z'
# result: 26

# input: 'foo'
# result: 3759

# input: 'aba'
# result: 27

# input: 'abb'
# result: 28


def permutation_position(perm):
    
    n = len(perm)
    p = 0
    for char in perm:
        p = p * 26 + (ord(char) - ord('a'))
        print(p)
    return p + 1