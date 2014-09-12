(function() {
  window.addEventListener("load", function(event) {
    var breakpointBtn = document.querySelector("#breakpoint-btn");
    breakpointBtn.addEventListener("click", function onClick(event) {
      loop(100);
    }, false);
  }, false);

  gState = {
    iteration: 0,
    time: 0,
    timeString: null
  }

  function loop(num) {
    for(var i = 0; i < num; i++) {
      console.log("Iteration: " + i);

      gState.iteration = i;
      gState.time = Date.now();
      gState.timeString = new Date(gState.time).toUTCString();

      try {
        thrower();
      } catch (e) {
        console.log(e);
      }
    }

    buggy();
    console.log("Reached " + i);
  }

  function thrower() {
    throw new Error("Oops!");
  }

  function buggy() {
    boom();
  }
})();
