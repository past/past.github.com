(function() {
  window.addEventListener("load", function(event) {
    var callStackBtn = document.querySelector("#call-stack-btn");
    callStackBtn.addEventListener("click", function onClick(event) {
      foo(event);
    }, false);
  }, false);

  function foo(event) {
    var f = { a: 1 };
    console.log("in foo");
    bar();
  }

  function bar() {
    var b = { b: "b" };
    Object.defineProperty(b, "prop", {
      value: "trololo",
      writable: true,
      enumerable: false,
      configurable: false
    });
    console.log("in bar");
    b.baz = baz();
    return b;
  }

  function baz() {
    var tom = new Person("Tom", 32);
    console.log("in baz");
    debugger;
    return tom;
  }

  var Person = function(name, age) {
    var requests = 0;
    return {
      getName: function() { requests++; return name; },
      getAge: function() { requests++; return age; },
      getRequests: function() { return requests; }
    };
  };
})();
