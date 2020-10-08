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
  )
})

function render(info){
  var source = $("#disk-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < info.length; i++) {
    var html = template(info[i]);
    $(".disk").append(html);
  }
}

function populateSelect(info){
  var source = $("#select-option-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < info.length; i++) {
    var html = template(info[i]);
    $("#author").append(html);
  }
}
