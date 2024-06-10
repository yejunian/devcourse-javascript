function defaultParameter(name = 'Yejun') {
  return `Hello, ${name}!`;
}

function restParameter(binaryOperation, ...operands) {
  let produced = operands[0];

  for (let i = 1; i < operands.length; i += 1) {
    produced = binaryOperation(produced, operands[i]);
  }

  return produced;
}

function argumentsObject() {
  console.log(arguments); // [Arguments] { '0': 10, '1': '20', '2': '30' }

  try {
    return arguments.map((arg) =>
      typeof arg === 'number' ? arg : parseInt(arg, 10)
    );
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
    // TypeError: arguments.map is not a function

    return Array.from(arguments).map((arg) =>
      typeof arg === 'number' ? arg : parseInt(arg, 10)
    );
  }
}

console.log('\n===== 기본값 매개변수 =====');
console.log(defaultParameter()); // Hello, Yejun!
console.log(defaultParameter('Lee')); // Hello, Lee!

console.log('\n===== 나머지 매개변수 =====');
console.log(restParameter((a, b) => a + b, 1, 2, 3, 4, 5)); // 15

console.log('\n===== `arguments` 객체 =====');
console.log(argumentsObject(10, '20', '30')); // [ 10, 20, 30 ]
