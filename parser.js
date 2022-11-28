// Topic- Arrays and Conditionals
/*
Steps
  - Search the input expression for occurrence of object keys, 
  - Find and replace all occurrences, for all object keys.
  - Check for if statement match
  - 
*/

// driver code
function run(expression, data) {
  const genExp =
    /(if\s\([0-9]+\s\=\=\s[0-9]+\,\s(?:[0-9]+|if\s\([0-9]+\s\=\=\s[0-9]+\,\s[0-9]+\,\s[0-9]+\))\,\s(?:\d|if\s\([0-9]+\s\=\=\s[0-9]+\,\s[0-9]+\,\s[0-9]+\))\))/gm;

  Object.keys(data).forEach((key) => {
    expression = expression.replaceAll(`${key}`, data[key]);
  });
  const matches = expression.match(genExp);
  matches.forEach((match) => {
    let newportion = match
      .replace(",", " ?")
      .replace(",", " :")
      .replace(",", " ?")
      .replace(",", " :");
    expression = expression.replaceAll(
      `${match}`,
      eval(newportion.replaceAll("if", ""))
    );
  });

  return eval(expression);
}

console.log(
  run(
    `if (var_1 == 2, 0, if (var_2 == 4, 15, 0))
   + if (var_2 == 3, 5, 0)
   - if (var_4 == 2, 0, 5)
   + if (var_3 == 3, 5, 0)`,
    {
      var_1: 1,
      var_2: 4,
      var_3: 3,
      var_4: 5,
    }
  )
);
/*
    output : 15
   */
