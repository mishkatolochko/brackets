module.exports = function check(str, bracketsConfig) {
  let bracketsClose = [];
  let brackets = {};
  let steck = [];

  const takeKeys = (obj, value) => {
    for (key in obj) {
      if (obj[key] === value) return key;
    }
  }
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
    bracketsClose.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (bracketsClose.includes(currentSymbol)) {
      if (steck[steck.length - 1] === takeKeys(brackets, currentSymbol)) {
        steck.pop();
      }
      else steck.push(currentSymbol);
    }
    else {
      steck.push(currentSymbol);
    }
  }


 

  return (steck.length === 0);
}