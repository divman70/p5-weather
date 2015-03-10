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

if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }


  $('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

  var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
        
      console.log(weather);
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;

      var state = weather.region;

      var currentTemp = weather.currently;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.currently').text(currentTemp);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function


  

