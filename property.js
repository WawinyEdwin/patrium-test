/* Objects 
-reference the object property object,
-access the key of the refrence and assign to value.
*/

const sourceObject = {
  props: {
    read: "a",
    write: "b",
  },
};

const reference = sourceObject.props;
const value = reference["read"];
console.log(value);

/*
    Modify this code to map the value 'a' into the variable
    value : 'a'
   */
