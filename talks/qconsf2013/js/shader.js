(function() {
  window.addEventListener("load", function(event) {
    var shaderBtn = document.querySelector("#shader-btn");
    shaderBtn.addEventListener("click", function onClick(event) {
      start();
    }, false);
  }, false);

})();
