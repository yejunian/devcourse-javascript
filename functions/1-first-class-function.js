function firstClassFunctionParameter() {
  function fn1(func) {
    return func();
  }

  function fn2() {
    return 'fn2';
  }

  return fn1(fn2);
}

function firstClassFunctionReturn() {
  function fn1() {
    return 'fn1';
  }

  function fn2() {
    return fn1;
  }

  return fn2()();
}

function firstClassFunctionAssignment() {
  const fn1 = function (arg) {
    return arg;
  };

  return fn1('hello');
}

console.log('\n===== 함수의 매개변수로 들어가는 함수 =====');
console.log(firstClassFunctionParameter()); // fn2

console.log('\n===== 함수의 반환 값으로 나오는 함수 =====');
console.log(firstClassFunctionReturn()); // fn1

console.log('\n===== 변수에 할당 가능한, 값으로서 표현 가능한 함수 =====');
console.log(firstClassFunctionAssignment()); // hello
