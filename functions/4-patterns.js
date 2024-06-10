function recursiveFunction() {
  function recursiveSum(first, ...rest) {
    if (!rest.length) {
      return first;
    }

    return first + recursiveSum(...rest);
  }

  return recursiveSum(1, 2, 3, 4, 5);
}

function nestingFunction(arg) {
  function innerFunction() {
    return arg;
  }

  return innerFunction();
}

function callbackFunction(func) {
  func({ message: '콜백 함수가 호출됨' });
}

console.log('\n===== 즉시 실행 함수 =====');
(function () {
  console.log('즉시 실행 함수가 호출됨');
})(); // 즉시 실행 함수가 호출됨

console.log('\n===== 재귀 함수 =====');
console.log(recursiveFunction()); // 15

console.log('\n===== 중첩 함수 =====');
console.log(nestingFunction('중첩')); // 중첩

console.log('\n===== 콜백 함수 =====');
callbackFunction((data) => {
  console.log(data);
}); // { message: '콜백 함수가 호출됨' }
