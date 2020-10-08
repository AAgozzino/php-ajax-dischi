const $ = require('jquery');
const Handlebars = require("handlebars");

$(document).ready(function(){
  // AJAX render disk
  $.ajax(
    {
      "url": "http://localhost:8888/php-ajax-dischi/api.php",
      "method": "GET",
      "success": function (data){
        render(data);
        populateSelect(data);
      },
      "error": function (){
        alert("Errore");
      }
    }
  );

  // Filter disk by author
  $("#author").change(
    function(){
      var author = $("#author").val();
      $(".disk-box").each(
        function(){
          var diskAutor = $(this).find(".disk-box-author").html();
          //console.log(diskAutor);
          if (author == "All") {
            $(this).show();
          } else if (diskAutor == author) {
            $(this).show();
          } else {
            $(this).hide();
          }
        }
      )
    }
  );
});


// FUNCTION - render disk information
function render(info){
  var source = $("#disk-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < info.length; i++) {
    var html = template(info[i]);
    $(".disk").append(html);
  }
}

// FUNCTION - populate select options
function populateSelect(info){
  var source = $("#select-option-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < info.length; i++) {
    var html = template(info[i]);
    $("#author").append(html);
  }
}
