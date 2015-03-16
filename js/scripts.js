$('.warnning').hide();

$('.button').click(function(){
  
  var zip = $('#zip').val();

  $.simpleWeather ({
  	location: zip,
  	unit: 'f',

// Get _weather_ object
success: function(weather){
// Get & store temperature
      var temp = weather.temp + '°';
      // Get & store city
      var city = weather.city;
      // get and store state
      var state = weather.region;
      // get and store current weather
      var currentTemp = weather.currently;
      // get and store current weather code
      var type = weather.code;

      // var type =  'img\\' + weather.code + '.png';
      // output weather code
      console.log(type);

      // get and store weather for next day
      // var upcomingWeather = weather.forecast[1].day + ' ' + weather.forecast[1].high;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      $('.state').text(state);
      $('.currently').text(currentTemp);
      // $('.img').src.replace(type);

      // $('p').text(upcomingWeather); 

      // checks for dangerous weather conditions 
      if (type == 0 || type == 1 || type == 2 || type == 3 || type == 4) {
        $('body').css('background-image', 'url("img/storm.jpg")');
        $('.warnning').show();
        }
         // checks for rainy weather conditions 
        else if (type == 8 || type == 9 || type == 10 || type == 11 || type == 29 || type == 30) {
          $('body').css('background-image', 'url("img/rain.jpg")');
        }
        // checks for snowy weather conditions
        else if (type == 13 || type == 14 || type == 15 || type == 16 || type == 41 || type == 43 || type == 46 || temp <= 36) {
          $('body').css('background-image', 'url("img/ice.jpg")');
        }
        // checks for sunny weather conditions
        else if (type == 31 || type == 32 || type == 34 || type == 35 || type == 36) {
          $('body').css('background-image', 'url("img/sun.jpg")');
        }
        // checks for foggy weather conditions
        else if (type == 20) {
          $('body').css('background-image', 'url("img/fog.jpg")');
        }
        // checks for night & stormy weather conditions
         else if (type == 26 || type == 27 || type == 29 || type == 33 || type == 38 || type == 39 || type == 40 || type == 45 || type == 47) {
          $('body').css('background-image', 'url("img/night.jpg")');
        }
        // goes to default image
        else {
          $('body').css('background-image', 'url("img/road.jpg")');
        }
},

error: function(message){
	$('body').html('<p>' + error + '</p>');
}
      });

});

// if (navigator.geolocation) {
//     // Yes! Show button
//     $('.getGeolocation').show(); 
//   } else {
//     // No. Hide button
//     $('.getGeolocation').hide();
//   }


//   $('.getGeolocation').on('click', function() {
  
//     navigator.geolocation.getCurrentPosition(function(position) {
//     //load weather using your lat/lng coordinates. See _loadWeather()_ below
//     loadWeather(position.coords.latitude+','+position.coords.longitude); 
//     // See latitute & longitude. Note, wait a few seconds
//     console.log(position.coords.latitude+','+position.coords.longitude);
//   });
  
// });

//   var loadWeather = function(location) {
    
//     $.simpleWeather({
//     location: location,
    
//     // Get _weather_ object
//     success: function(weather) {
        
//       console.log(weather);
      
//       // Get & store temperature
//       var temp = weather.temp;
//       // Get & store city
//       var city = weather.city;

//       var state = weather.region;

//       var currentTemp = weather.currently;

            
//       // Output to hooks in HTML
//       $('.temp').text(temp);
//       $('.city').text(city);
//       $('.state').text(state);
//       $('.currently').text(currentTemp);
      
      
//       // See console for _weather_ object
//       console.log(weather);
//     }
  
//   });
    
// }; // end of _loadWeather()_ function


  

