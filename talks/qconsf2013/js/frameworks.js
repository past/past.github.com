(function() {
  window.addEventListener("load", function(event) {
    var frameworkBtn = $("#framework-btn");
    $("#framework-btn").on("click", function(event) {
      run();
    });
  }, false);

  function run() {
    $("li").each(function(index) {
      createText(index, $(this).text()).then(function(text) {
        console.log(text);
        return index;
      });
    });
  }

  function createText(index, text) {
    var result = $.Deferred();
    result.resolve(index + ": " + text);
    return result;
  }
})();
