const stack = require('./stack.js');

function balancedBrackets(string) {
  // your code here
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '[',
    // '>': '<'
  };
  const onlyBrackets = string
    .split('')
    .filter((el) => '[]{}()'.includes(el))
    .join('');

  for (const bracket of onlyBrackets) {
    if (Object.values(pairs).includes(bracket)) stack.push(bracket);
    else {
      const curr = stack.pop();
      if (!curr || curr !== pairs[bracket]) return false;
    }
  }

  return stack.size === 0;
}

module.exports = balancedBrackets;
