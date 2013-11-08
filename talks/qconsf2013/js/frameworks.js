(function() {
  window.addEventListener("load", function(event) {
    var frameworkBtn = $("#framework-btn");
    $("#framework-btn").on("click", function(event) {
      run();
    });
  }, false);

  function run() {
    $("li").each(function(index) {
      console.log(index + ": " + $(this).text());
    });
  }
})();
