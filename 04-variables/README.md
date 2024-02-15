# 04) Coding-Task: Variables

## Prepare

- [ ] Create a new folder and prepare an index.html file that executes a script.js files.

## 01) Spot the errors and fix them

- [ ] Copy the following complete code block to your script.js file and try to spot and fix the errors.

```js
const userName = Brad;
userName = "Jenna";

function getUserNameLength {
  return const result = name.length
}

console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true
```

## 02) isString function

Implement a `isString` function.

- [ ] The function has one parameter which could be any kind of data type
- [ ] The function is written as a function expression
- [ ] The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false

```js
// TODO: Implement the isString function

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
```
