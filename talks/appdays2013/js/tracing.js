(function() {
  window.addEventListener("load", function(event) {
    var tracingBtn = document.querySelector("#tracing-btn");
    tracingBtn.addEventListener("click", function onClick(event) {
      loop(100);
    }, false);
  }, false);

  gState = {
    iteration: 0,
    time: 0,
    timeString: null,
    buffer: null
  }

  function loop(num) {
    console.profile("loop");
    var i = 0;
    function step(j) {
      slowCall(i);
      updateState(i);
      console.log(i+" "+Date.now())
      if (i++ < num) {
        window.setTimeout(step, 10);
      } else {
        console.profileEnd("loop");
        console.log("Finished");
      }
    }
    step();
  }

  function updateState(i) {
    gState.iteration = i;
    gState.time = Date.now();
    gState.timeString = new Date(gState.time).toUTCString();
  }

  function slowCall() {
    initialize();
    work();
  }

  function initialize() {
    gState.buffer = "blah ";
    for (var i = 0; i < 1000; i++) {
      1 + i;
    }
  }

  function work() {
    for (var i = 0; i < 1000; i++) {
      gState.buffer += i+i;
    }
  }
})();
