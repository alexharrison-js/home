//Notes / update 11/13 2017 10:59 PM
//The promise passing is working but for some reason the URL call to the 
//weather app is returning apiKey instead of the JSON file
//Gotta figure out how to resolve it OR write it a different way to chain the 
//multiple ajax requests together to get data - google and read and return


var classApp = angular.module("weatherApp", []);

classApp.controller("weatherCtrl", async function ($scope, $http){
var vm = $scope;  
var oldURL = "Before controller instantiation ";
var apiURL = "not yet";
var weatherMain = "sunny";
var lat = 0.00;
var lon = 0.00;
var geoURL = "http://freegeoip.net/json/";     
vm.info = {
    reading: weatherMain,
    title: "This should be replaced with something"
//the problem is making the result of the ajax call replace the shit in the page html using the angular grab thing
//gotta make sure the info here i replaced with that of the ajax call results because it's loading the first weatherMain but 
//not loading the replacement of it after the ajax request
}


//maybe also write in a version to try to get geocoords but thats actually not a good idea cuz it fails chrome optimization tests
console.log("Hey Buddy");
function P(URL){
    return new Promise( function(resolve, reject){
        resolve($.get(URL))

    })
}

P(geoURL).then(function(data){
//first get the user's coordinates and assemble the url to hit the weather API
    lat = data.latitude;
    lon = data.longitude;
    apiKey = "249aae0cc107073d30a1116d9ab51734";
//eventually this  apiKey needs to be removed from the script and 
    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
    console.log("lat = " + lat + "lon = " + lon);
    console.log("this is the url to try: " + apiURL);
    return apiURL;
    //don't know what to do here at the is section to close out this promise
    //also need to return the values from it to use in the next then
})
/*
BEGIN EXAMPLE

    THIS IS WHAT WE WANT ESSENTIALLY

const promises = [
  new Promise(resolve => setTimeout(resolve, 0, 1)),
  new Promise(resolve => setTimeout(resolve, 0, 2))
];
Promise.all(promises)
  .then(data => {
    console.log("First handler", data);
    return data.map(entry => entry * 10);
  })
  .then(data => {
    console.log("Second handler", data);
  });
END EXAMPLE
*/
.then(
    P(apiURL)
//this is the issue presently possibly from the url not returning from the above promise
)
.then(function(data){
weatherMain = data.weather; //something here
console.log("This is the data: " + data)
console.log("here it is " + apiURL)
console.log("at the end of the chains + ")
}
)




//final brackets below
});




/*
.then(function()

)

function request(url) {
	return new Promise( function(resolve,reject){
        if (returns properly){
            resolve(data);
            $.ajax({
                url: "url",
                method: "GET",
                data: { 
                  lat: data.latitude
                  lon: data.longitude
                },
                success: function(data) {
                  console.log('success', data);
                  console.log("lat = " + lat + "lon = " + lon);
                resolve(data);
                },
                error: function(xhr) {
                  console.log('error', xhr);
                }
              })
        }
		// the `ajax(..)` callback should be our
		// promise's `resolve(..)` function
		ajax( url, resolve );
	} );
}
//We first define a request(..) utility that constructs a promise to represent the completion of the ajax(..) call:

request( "http://some.url.1/" )
.then( function(response1){
	return request( "http://some.url.2/?v=" + response1 );
} )
.then( function(response2){
	console.log( response2 );
} );

// WRITE IN THOROUGH ERROR HANDLING

// step 1:
request( "http://some.url.1/" )

// step 2:
.then( function(response1){
	foo.bar(); // undefined, error!

	// never gets here
	return request( "http://some.url.2/?v=" + response1 );
} )

// step 3:
.then(
	function fulfilled(response2){
		// never gets here
	},
	// rejection handler to catch the error
	function rejected(err){
		console.log( err );	// `TypeError` from `foo.bar()` error
		return 42;
	}
)

// step 4:
.then( function(msg){
	console.log( msg );		// 42
} );


END EXAMPLE



    //weather: "THIS should be the await thing"//shouldn't I assign this to a variable here
    //because then it will be returned as a promise that I can then
    //resolve and use to fill in the dynamic content in my
    //angular.js app?? Maybe have to do something like:

    /*
var getData = function(){
    var lat = null;
    var lon = null;
    $.getJSON("http://freegeoip.net/json/", function(result){
        console.log("API 1 Reached");
    
        lat =  result.latitude;
        lon =  result.longitude;
        console.log("LAT = " + lat + " and LON = " + lon);
    return lat;
    return lon;
    })
    .done(function(response){
        let lat =  result.latitude;
        let lon =  result.longitude;
    })
}
*/
    //explore different options...above is just a thought




//};

/*
note that .then() takes two functions as arguments the first of 
which will be called if the promise is resolved, the second of 
which will be called if the promise is rejected.

*/




























/*
var lat = null;
var lon = null;
$.getJSON("http://freegeoip.net/json/", function(result){
    console.log("API 1 Reached");

    lat =  result.latitude;
    lon =  result.longitude;
    console.log("LAT = " + lat + " and LON = " + lon);
return lat;
return lon;
})
.done(function(response){
    let lat =  result.latitude;
    let lon =  result.longitude;
})
.always(console.log("Halfway through"))

.then(

console.log(/*Getting the wrong lat and lon *//*  "After Function Run lat = " + lat + " and lon = " + lon));
setTimeout(function(){console.log(/*Getting the correct variables*//*"After Function Run lat = " + lat + " and lon = " + lon)
}, 200);*//*

//the above code works but the api call / api fetch is failing

window.onload = function(){


var feedBack = $.getJSON("http://freegeoip.net/json/") 
var geoTrack = async function(){
    var lat = await feedBack.lat;
    var lon = await feedBack.lon;
    console.log("Lat = " + lat + " Lon = " + lon);
//callback Hell attempt at solution
async function dataBack(data){
    return new Promise(function(resolve, reject){
        $.getJSON("http://www.ip-api.com/json", function(response){
            
            dataBack(response, function  (lat, lon){
                const apiKey = "249aae0cc107073d30a1116d9ab51734";
                const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                return apiURL;
                $.get(apiURL, function(response){
                    console.log(response);
                    return response;
                })
            })
        }
            )
    })
    let lat = await data.lat;
    let lon = await data.lon;
    return lat;
    return lon;
    console.log(data + "lat = " + lat + " and lon = " + lon); 
    };
dataBack().then(function(data){
    console.log(data);
})
}
}    
})
console.log("At the end of this code.");
localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name', 'John');
console.log(sessionStorage.getItem('name'));

document.cookie = "username=John_Doe";

*/