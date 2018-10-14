
    
    var local = 'replace me';
    var temp = 'replace me';
    var weather = 'replace me';
    var graphic = 'few%20clouds.png';
    var weathercode = 800;
    var city = 'Seattle';
    
    window.onload = function(){
        document.getElementById('cityId').innerHTML = '<h3>You are currently in: '+local+'</h3>';
        document.getElementById('tempId').innerHTML = '<h3> The Temperature is: '+temp+'</h3>';
        document.getElementById('weatherId').innerHTML = '<h3> The weather is: '+weather+'</h3>';
        document.getElementById('logoId').innerHTML = '<img src="' + graphic + '">';
        document.body.style.backgroundImage = "/background%20images/clear%20sky.jpg";
        KtoF();
        KtoC();
        getLocation()
                .then((response) => {
                    var data = response;
                    var lat = data.latitude;
                    var lon = data.longitude;
                    apiKey = "249aae0cc107073d30a1116d9ab51734";
                    //eventually this  apiKey needs to be removed from the script for security purposes
                    var apiURL = " https://cors-everywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
                    return Promise.resolve (apiURL);
                })
                .then((apiURL) => {
                    console.log("here it is again" + apiURL);
                    return $.get(apiURL)
                    .then((res) => {
                        return res;
                        console.log(res);
                    });
                }).then((weatherData) => { 
                    local = weatherData.name;
                    temp = (Math.trunc(toCelsius(weatherData.main.temp))) + " °C";
                    tempK = weatherData.main.temp;
                    weather = weatherData.weather[0].main;
                    weathercode = weatherData.weather[0].id;
                    console.log(weathercode);
                    checkCode(weathercode);
                    return weathercode;
    
                })
               
                .then( () =>{
                    console.log('this is graphic: ' +graphic);
                    document.getElementById('cityId').innerHTML = '<h3>You are currently in: '+local+'</h3>';
                    document.getElementById('tempId').innerHTML = '<h3> The Temperature is: '+temp+'</h3>';
                    document.getElementById('weatherId').innerHTML = '<h3> The weather is: '+weather+'</h3>';
                    document.getElementById('logoId').innerHTML = '<img src="' + graphic + '">';
                    document.body.style.backgroundImage = "url("+ backgroundPic +")";
                    
                }
                )
                
                .catch((err) => {
                    console.error('error', err);
                });
    
            
       var searchButton = document.getElementById("citySearchBtn");
                searchButton.addEventListener("click", function (e){
                    var that = e.target._input || (e.target._input = document.getElementById("newCity"));
                    if (!that.value){return}
                    var _promise = (async function() {
                        return that.value;
                    }())
                    .then(function(res, reject){
                        console.log(res);
                        return res;
                        resolve(_promise);
                    })
                    .then(function(result) {
                        city = result;
                        apiKey = "249aae0cc107073d30a1116d9ab51734";
                        apiURL = "https://cors-everywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
                        console.log(apiURL);
                        return $.get(apiURL);

                    })
                  
                    .then((weatherData) => {
                        resCode = weatherData.cod;
                        if (resCode == 404){
                            alert("We could not find your city. Please check the spelling and try again.");
                        };
                        local = weatherData.name;
                        tempK = weatherData.main.temp;
                        temp = (Math.trunc(toCelsius(weatherData.main.temp))) + " °C";
                        weather = weatherData.weather[0].main;
                        weathercode = weatherData.weather[0].id;
                        console.log(weathercode);
                        checkCode(weathercode);
                        return weathercode;
            
                    })
                    .then( () =>{
                        console.log('this is graphic: ' +graphic);
                        document.getElementById('cityId').innerHTML = '<h3>You are currently in: '+local+'</h3>';
                        document.getElementById('tempId').innerHTML = '<h3> The Temperature is: '+temp+'</h3>';
                        document.getElementById('weatherId').innerHTML = '<h3> The weather is: '+weather+'</h3>';
                        document.getElementById('logoId').innerHTML = '<img src="' + graphic + '">';
                        document.body.style.backgroundImage = "url("+ backgroundPic +")";
                    }
                    )
                    .catch((err) => {
                        console.error('error', err);
                        alert("Sorry, there has been an error. Please check the spelling and search again.");
                    })
                    

                    console.log(_promise);
                }, false)
             
            };
   
            function getLocation() { 
                return new Promise (function (resolve, reject){
                $.get('https://freegeoip.net/json/', () => {
                    resolve (response);
                });
            })}
        
        
        function KtoF(){
            var toFBtn = document.getElementById("toFBtn");
            toFBtn.addEventListener("click", function (){
                console.log("F button clicked");
                temp = Math.trunc(toFahrenheit(tempK));
                document.getElementById('tempId').innerHTML = '<h3> The Temperature is: '+temp+ " °F" +'</h3>';
            });
        }
        
        function KtoC(){
            var toCBtn = document.getElementById("toCBtn");
            toCBtn.addEventListener("click", function (){
                console.log("C button clicked")
                temp = Math.trunc(toCelsius(tempK));
                document.getElementById('tempId').innerHTML = '<h3> The Temperature is: '+temp +" °C" + '</h3>';
            });
        }
            function checkCode(weathercode){
                console.log("checking weather code...")
                if (weathercode >=200 && weathercode <= 250){
                     graphic = 'thunderstorm.png';
                     backgroundPic = 'background%20images/thunderstorm.jpg';
                }else if (weathercode >= 300 && weathercode <= 350){
                     graphic = 'shower%20rain.png';
                     backgroundPic = 'background%20images/shower%20rain.jpg';
                     
                }else if (weathercode >= 500 && weathercode <= 550) {
                     graphic = 'rain.png';
                     backgroundPic = 'background%20images/rain.jpg';
                     
                }else if (weathercode >= 600 && weathercode <= 622){
                     graphic = 'snow.png';
                     backgroundPic = 'background%20images/snow.jpg';
                     
                }else if (weathercode >= 700 && weathercode <= 751){
                     graphic = 'mist.png';
                     backgroundPic = 'background%20images/mist.jpg';
                     
                }else if (weathercode == 800) {
                     graphic = 'clear.png';
                     backgroundPic = 'background%20images/clear%20sky.jpg';
                     
                }else if (weathercode >= 801 && weathercode <= 802) {
                     graphic = 'few%20clouds.png';
                     backgroundPic = 'background%20images/few%20clouds.jpg';
                     
                }else if (weathercode >= 803 && weathercode <= 810) {
                     graphic = 'broken%20clouds.png';
                     backgroundPic = 'background%20images/broken%20clouds.jpg';
                     
                }else if (811 <= weathercode) {
                     graphic = 'crazy.jpg';
                     backgroundPic = 'background%20images/crazy.jpg';
                     
                }else if (weathercode <= 201) {
                     graphic = 'crazy.jpg';
                     backgroundPic = 'background%20images/crazy.jpg';
                }
                else{console.log("Weather Code checkCode () function failure")}
            }
        

        
            
            function getLocation() {
                return Promise.resolve ( $.get(' https://cors-everywhere.herokuapp.com/http://freegeoip.net/json/'));
            }
            
            function getWeather() {
                return $.get(apiURL);
            }
    
            //converts the oddly chosen Kelvin temp to celsius - unneeded with fcc weather api call 
            function toCelsius(tempK){
                return tempK  - 273.15 
            }
            //converts the oddly chosen Kelvin temp to Fahrenheit - unneeded with fcc weather api call 
            function toFahrenheit(tempK){
                return ((tempK * (9/5)) - 459.76)
            }
    