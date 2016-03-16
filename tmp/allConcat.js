//interface
// var Journal = require('../js/journal.js').Journal;
// var Entry = require('../js/journal.js').Entry;

$(document).ready(function() {
  // $('#journal').submit(function(event){
  //   event.preventDefault();
  //   var title = $('#title').val();
  //   var entry = $('#entry').val();
  //   var newEntry = new Entry(title, entry);
  //   $('#wordCounts').append("<li>Journal entry: '" + newEntry.title + "' made on " + newEntry.date + " has " + newEntry.wordCount() + " words.</li>");
  // });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var apiKey = "f8f6be4ecc51993483acff52e5db50f3";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "% and temp is" + response.main.temp);
      console.log(response)
    });
  });
});
