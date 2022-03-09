let weather = {
    "apiKey": "c4758a4fc22c4cc094c144e1f1f2fde1",

    
    fetchWeather: function( lat,lon) {

        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+this.apiKey)
        .then((response ) => response.json())
        .then((data) =>  this.displayWeather(data));    
        
    },

     displayWeather: function(data){
         console.log(data)
         const{name } = data;
         const {humidity,temp} = data.main;
         const {country,sunrise}= data.sys;
         const {speed} = data.wind
         const {icon,description} = data.weather[0]
        console.log({name,humidity,temp,country,sunrise,speed,icon,description});
         document.querySelector(".city").innerText = "weather in " +name;
         document.querySelector(".description").innerText = description;
         document.querySelector(".temp").innerText = temp;
         document.querySelector(".humidity").innerText = humidity + "%";
         document.querySelector(".wind").innerText = speed;
         
       
    },
    
    search:function(){
        const lat = document.querySelector(".search-bar").value  ;
        const lon = document.querySelector(".search--bar--two").value;    
        this.fetchWeather(lat,lon);
    }
   
  
};
  

document.querySelector(".button").addEventListener("click",function(){
    weather.search();

});

/* document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        weather.search();
    }
})
*/

document.querySelector(".search--bar--two").addEventListener("keyup",function(){
    weather.search();
});

weather.fetchWeather(52,8);