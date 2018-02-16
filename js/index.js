$(document).ready(function() {
  $("#newquote").click(function() {
    getRandomQuote();
  });
  function getRandomQuote() {
    var color = ["#FA6670", "#ADB66A", "#22313F", "#573C4F", "#221E22"];
    var index = color[Math.floor(Math.random() * color.length)];
    $.ajax({
      url: "https://talaikis.com/api/quotes/random/",
      type: "GET",
      dataType: "json",
      success: function(data) {
        var quote = data.quote;
        $(".quote #data").html(quote);
        $("body").css("background-color", index);
        $(".col").css("background-color", index);
        $(".socialmedia a").css("background-color", index);
        $("#newquote").css("color", "white");
        $(".color").css("color", index);
        $("#twitter").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" + quote + " "
        );
      },
      error: function(err) {
        $(".quote #data").html("Oops something went wrong!, Please try again.");
      }
    });
  }
});