$(document).ready(function() {
   $("#getMessage").on("click", function(){  
      //API call for random Trump Quote
      $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function(json){
         $("#message").html(json.message);
         $("#quoteBlock").attr("style", "visibility:visible");
      });
   });
});
   
