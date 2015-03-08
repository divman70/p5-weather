  $('.button').click(function(){
  
  var zip = $('#zip').val();
  
  $.simpleWeather ({
  	location: zip,
  	unit: 'f',

// Get _weather_ object
success: function(weather){
// Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      // get and store state
      var state = weather.region;
      // get and store current weather
      var currentTemp = weather.currently;

      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.currently').text(currentTemp);
          
},

error: function(message){
	$('body').html('<p>' + error + '</p>');
}
      });

});


  

