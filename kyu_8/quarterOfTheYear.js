// Given a month as an integer from 1 to 12, return to which quarter of the year 
// it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12
const quarterOf = (m) => {
    switch (true) {
      case (m < 4):
        return 1;
      case (m < 7):
        return 2;
      case (m < 10):
        return 3;
      default:
        return 4;
    }
  }
  

  const quarterOf2 = (m) => {
  
    return m < 4 ? 1: m < 7 ? 2: m < 10 ? 3: 4;
    
  }