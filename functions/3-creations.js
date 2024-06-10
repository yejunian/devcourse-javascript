function functionDeclaration(arg) {
  return `DECLARED function called with ${arg}`;
}

const anonymousFunction = function (arg) {
  return `ANONYMOUS function called with ${arg}`;
};

const namedFunction = function functionExpression(arg) {
  return `NAMED function called with ${arg}`;
};

const constructedFunction = new Function(
  'arg',
  'return `CONSTRUCTED function called with ${arg}`;'
);

const arrowFunction = (arg) => {
  return `ARROW function called with ${arg}`;
};

console.log('\n===== 함수 선언문 =====');
console.log(functionDeclaration('선언')); // DECLARED function called with 선언

console.log('\n===== 함수 표현식 =====');
console.log(anonymousFunction('익명')); // ANONYMOUS function called with 익명
console.log(namedFunction('기명')); // NAMED function called with 기명
try {
  console.log(functionExpression('내부이름')); // (에러 발생)
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
  // ReferenceError: functionExpression is not defined
}

console.log('\n===== Function 생성자 =====');
console.log(constructedFunction('생성자'));
// CONSTRUCTED function called with 생성자

console.log('\n===== 화살표 함수 =====');
console.log(arrowFunction('화살표')); // ARROW function called with 화살표
