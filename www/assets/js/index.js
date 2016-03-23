;(function($, window, undefined) {

	'use strict';
	var app = (function() {
		var pub = {};
        var curTime = new Date();
        
        pub.vineyards = {
            'madrone': {
                name: 'Madrone',
                lat: '38.5232419',
                lon: '-122.534426',
                background: 'assets/images/vineyard1.jpg'
            },
            'arrowood':{
                name: 'Arrowood',
                lat: '34.5232419',
                lon: '-81.534426',
                background: 'assets/images/vineyard2.jpg'
            },
            'buenavista':{
                name: 'Buena Vista',
                lat: '38.5232419',
                lon: '-122.534426',
                background: 'assets/images/vineyard3.jpg'
            },
            'larochelle':{
                name: 'La Rochelle',
                lat: '38.5232419',
                lon: '-122.534426',
                background: 'assets/images/vineyard4.jpg'
            }
        };
        
        var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        var day = week[curTime.getDay()%7];
        var year = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July',' August', 'September', 'October', 'November', 'December');
        var month = year[curTime.getMonth()];
        var date = curTime.getUTCDate();

        
		//toggle this to switch between running in browser and running in simulator/device
		pub.localDev = true; //true = browser; false = device/simulator

		//our forecast.io api information
		var apiUrl = 'https://api.forecast.io/forecast/';
		var apiKey = 'a92d500960f0faec84574b84ea5543d6';

		pub.coords = {
			latitude: '38.5232419',
			longitude: '-122.534426'
		};

		pub.init = function init() {
			bindEvents();

			startUp();
		};
        
        pub.changeVineyard = function(vineyard){
            var v = this.vineyards[vineyard];
            this.coords.latitude = v.lat;
            this.coords.longitude = v.lon;
           //getWeather();
            return v;
        }
        
		//get initial values for geolocation, etc.
		function startUp() {
            /*
			if(!app.localDev) {
				navigator
					.geolocation
					.getCurrentPosition(
						geolocationSuccess,
						geolocationError
					)
				;
			} else {
				//getWeather();
			}*/
            
            getWeather();  
		}

		//geolocation was successful
		function geolocationSuccess(position) {
			app.coords.latitude = position.coords.latitude;
			app.coords.longitude = position.coords.longitude;

			//we need a callback function
			//here to trigger anything that uses our coordinates
			//getWeather();
		}
        
        function getIcon(icon){
            switch(icon){
                case 'clear-day':
                    return 'wi-day-sunny';
                case 'clear-night':
                    return 'wi-night-clear';
                case 'rain':
                    return 'wi-day-showers';
                case 'snow':
                    return 'wi-day-snow';
                case 'sleet':
                    return 'wi-day-sleet';
                case 'wind':
                    return 'wi-day-windy';
                case 'fog':
                    return 'wi-day-fog';
                case 'cloudy':
                    return 'wi-day-cloudy';
                case 'partly-cloudy-day':
                    return 'wi-day-sunny-overcast';
                case 'partly-cloudly-night':
                    return 'wi-night-alt-cloudy';
                case 'thunderstorm':
                    return 'wi-day-thunderstorm';
                default: 
                    return 'wi-day-cloudy';
                    
            }
        }
        
        function beautifyTime (date){
            var hour = date.getHours();
            var minute = date.getMinutes();
            var time = '';
            if (hour < 12){
                time = 'AM';
            } else {
                if (hour != 12){
                    hour -= 12;
                }
                time = 'PM'
            }
            if (minute < 10){
                minute = "0"+minute;
            }
            return hour+":"+minute+" "+time;
        }
        
        function updateTitle (vineyard){
            $('#vineyardName').text() = vineyard;
        }
        
        setInterval(function(){
            curTime = new Date();
            console.log(curTime);
        }, 60000)
        
		function getWeather() {
			var url = apiUrl + apiKey + '/' + pub.coords.latitude + ',' + pub.coords.longitude;
            
			var response = $.ajax({
				url: url
            });
            
			response.done(function(data) {
                var today, tom, third, fourth, two, four, six, time, clock;
				console.log(data);
                clock = '<h1>'+beautifyTime(curTime)+'</h1>';
                time = '<h3>' + day + ', ' + month + ' ' + date +'</h3>';
                
                today = '<span class="big-temp col-xs-6 pull-left">'+Math.floor(data.currently.temperature)+'&#176;</span>';
/*                today += '<h3>'+data.currently.summary+'<h3>'; */
                today += '<span class="col-xs-6 pull-right mainIconContainer"><i class="wi '+getIcon(data.currently.icon)+' mainIcon"></i></span>';
                
                tom = '<h3>' + week[(curTime.getDay()+1)%7] +'</h3>';
                tom += '<h2 class="threeDays">'+(Math.floor(((data.daily.data[1].temperatureMax + data.daily.data[1].temperatureMin)/2)))+'&#176;</h2>';
/*                tom += '<h3>'+data.daily.data[1].summary+'<h3>'; */
                tom += '<i class="wi '+getIcon(data.daily.data[1].icon)+'"></i>';
                
                third = '<h3>' + week[(curTime.getDay()+2)%7] +'</h3>';
                third += '<h2 class="threeDays">'+(Math.floor(((data.daily.data[2].temperatureMax + data.daily.data[2].temperatureMin)/2)))+'&#176;</h2>';
/*                third += '<h3>'+data.daily.data[2].summary+'<h3>'; */
                third += '<i class="wi '+getIcon(data.daily.data[2].icon)+'"></i>';
                
                fourth = '<h3>' + week[(curTime.getDay()+3)%7] +'</h3>';
                fourth += '<h2 class="threeDays">'+(Math.floor(((data.daily.data[3].temperatureMax + data.daily.data[3].temperatureMin)/2)))+'&#176;</h2>';
/*                fourth += '<h3>'+data.daily.data[3].summary+'<h3>'; */
                fourth += '<i class="wi '+getIcon(data.daily.data[3].icon)+'"></i>';
                
                two = '<div>';
                two += '<h2 class="pull-left">'+Math.floor(data.hourly.data[2].temperature)+'&#176;</h2>';
                two += '<h2 class="pull-left"><i class="col-xs-4 wi '+getIcon(data.hourly.data[2].icon)+'"></i></h2>';
                two += '<h2 class="pull-left"><small>'+data.hourly.data[2].summary+'</small></h2></div>';
                
                four = '<div>'
                four += '<h2 class="pull-left">'+Math.floor(data.hourly.data[4].temperature)+'&#176;</h2>';
                four += '<h2 class="pull-left"><i class="col-xs-4 wi '+getIcon(data.hourly.data[4].icon)+'"></i></h2>';
                four += '<h2 class="pull-left"><small>'+data.hourly.data[4].summary+'</small></h2></div>';
                
                six = '<div>';
                six += '<h2 class="pull-left">'+Math.floor(data.hourly.data[6].temperature)+'&#176;</h2>';
                six += '<h2 class="pull-left"><i class="col-xs-4 wi '+getIcon(data.hourly.data[6].icon)+'"></i></h2>';
                six += '<h2 class="pull-left"><small>'+data.hourly.data[6].summary+'</small></h2></div>';
                
                
                var fahr = '<h2>'+Math.floor(data.currently.temperature)+'&#176;</h2>';
                var cel = '<h2>'+Math.floor(((data.currently.temperature-32) * (5/9) ))+'</h2>';
                
                $('#clock').html(clock);
                $('#time').html(time);
                $('#today').html(today);
                $('#tom').html(tom);
                $('#third').html(third);
                $('#fourth').html(fourth);
                
                $('#fahr').html(fahr);
                $('#cel').html(cel);
                
                $('#two').html(two);
                $('#four').html(four);
                $('#six').html(six);
                
                
			});
		}

		//geolocation failed
		function geolocationError() {
			alert('We could not locate you.');
		}

		function bindEvents() {
			$('.page').hammer()
				.bind('swipeleft', swipeLeftHandler)
				.bind('swiperight', swipeRightHandler)
			;
		}

		function swipeLeftHandler(e) {
			//make sure there is a page with .right
			//figure out which page is active (does not have .left or .right)
			//add .left to current page
			//remove .right from next page
			if($('.page.right').length) {
				var $activePage = $('.page').not('.right, .left');
				var $nextPage = $activePage.next('.page');

				$activePage.addClass('left');
				$nextPage.removeClass('right');
			}
		}

		function swipeRightHandler(e) {
			if($('.page.left').length) {
				var $activePage = $('.page').not('.left, .right');
				var $prevPage = $activePage.prev('.page');

				$activePage.addClass('right');
				$prevPage.removeClass('left');
			}
		}

		return pub;
	}());


	$(document).ready(function() {
		app.init();
        var cur = "madrone";
        $('#cel').hide();
        $('#madrone').hide();
        $('#fahr').on('click', function(){
            $(this).hide();
            $('#cel').show();
        });
        $('#cel').on('click', function(){
            $(this).hide();
            $('#fahr').show();
        });
        
        $('.vineyardSelect').on('click', function(){
            var vineyard = $(this).attr("id");
            $(this).hide();
            $('#'+cur).show();
            var newVine = app.changeVineyard(vineyard);
            console.log(newVine);
            $('#page-one').css('background', "url('"+newVine.background+"') no-repeat center center fixed")
            $('#vineyardName').text(newVine.name);
            cur = vineyard;
        });
	});

	$(window).load(function() {
		//if you have any methods that need a fully loaded window, trigger them here
	});


})(window.jQuery, window);