# Create a function that receives a string consists of only digit characters ('0' to '9'), and returns the lowest product of 4 consecutive digits within that string.

# This should only work if the number has 4 digits or more. If not, return "Number is too small" instead.

# Example
# "123456789" --> 24    // 1*2*3*4
# "35" --> "Number is too small"

from functools import reduce

def lowest_product(num):
    
    if len(num) < 4:
        return "Number is too small"
    
    num = list(map(int, num))
    
    if 0 in num:
        return 0
    
    low = 9999999999944443
    
    for char in range(len(num) - 3):
        
        total = reduce(lambda a, b: a * b, num[char:char+4])
        low = total if total < low else low
        
    return low