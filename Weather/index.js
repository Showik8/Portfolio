const myinput=document.getElementById(`searchinput`)
const headerinput=document.getElementById(`inpt`)
const cityname =document.getElementById(`cityname`)
const citycont= document.getElementById(`citydiv`)
const tempinfo =document.getElementById(`tempinfo`)
const tempH1= document.createElement(`h1`)
const tempCityCont=document.createElement(`div`)
const cityP=document.createElement(`p`)
const citySpan=document.createElement(`span`)
const img=document.createElement(`img`) 
const forTimeCont=document.getElementById(`forTime`)
const hour=document.createElement('div')
const weatherHistory=document.createElement(`div`)
const clock=document.createElement(`span`)
const weather=document.createElement(`p`)
const celsius= document.createElement(`span`)
const int=document.getElementById("interval")



const some = document.querySelector(`input`)
const valueOfSome=some.value
console.log(va)


function submitButton(e){
    int.classList.add(`hidden`)
    document.getElementsByTagName('body')[0].style = 'flex-direction: column;';
    console.log(e)
    fetch (`http://api.weatherapi.com/v1/forecast.json?key=2e2b94178a54407ea32113023240704&&city&&q=${e}`)
    .then(res => res.json())
     .then(data => {
    tempinfo.classList.remove(`hidden`)
    tempinfo.classList.add(`tempInfo`)
    tempH1.innerText=data.current.temp_c 
    tempinfo.appendChild(tempH1)
    tempCityCont.id=`citydiv`
    tempCityCont.classList.add("cityName")
    cityP.innerText=data.location.name;
    citySpan.innerText=data.location.localtime;
    img.src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
    tempCityCont.appendChild(cityP)
    tempCityCont.appendChild(citySpan)
    tempinfo.appendChild(tempCityCont)
    tempinfo.appendChild(img)
    let grubeli=document.getElementById(`cloudy`)
    grubeli.innerText=data.current.cloud
    grubeli.append()
    let qari=document.getElementById(`wind`)
    qari.innerText=data.current.wind_kph
    qari.append()
    let hum=document.getElementById(`humidity`)
    hum.innerText=data.current.humidity
    hum.append()
    let min=document.getElementById("Temp min")
    min.innerText=data.forecast.forecastday[0].day.mintemp_c
    min.append()
    let max=document.getElementById("Temp max")
    max.innerText=data.forecast.forecastday[0].day.maxtemp_c
    max.append()


    

    hour.classList.add(`hour`)
    weatherHistory.classList.add(`timeWeather`)    



    for (let i = 0; i < data.forecast.forecastday[0].hour.length; i++) {
        const hourDiv = document.createElement('div');
        hourDiv.classList.add('hour');

        const celsius = document.createElement('span');
        celsius.innerText = data.forecast.forecastday[0].hour[i].temp_c;
        hourDiv.appendChild(celsius);

        const clock = document.createElement('span');
        clock.innerText = data.forecast.forecastday[0].hour[i].time;
        hourDiv.appendChild(clock);
      
        const time = document.createElement('p');
        time.innerText = data.forecast.forecastday[0].hour[i].is_day;
        hourDiv.appendChild(time);
      
        const img = document.createElement('img');
        if (data.forecast.forecastday[0].hour[i].is_day > 0) {
          img.src = "https://cdn.weatherapi.com/weather/64x64/day/113.png";
          time.innerText="Day"
        } else {
          img.src = "https://cdn-icons-png.flaticon.com/128/547/547433.png";
          time.innerText="Nigth"
        }
        hourDiv.appendChild(img);
      
        forTimeCont.appendChild(hourDiv);
    }
  
})
}

    function submitButtonForheader(e){
        document.getElementsByTagName('body')[0].style = 'flex-direction: column;';
        console.log(e)
        fetch (`http://api.weatherapi.com/v1/forecast.json?key=2e2b94178a54407ea32113023240704&&city&&q=${e}`)
        .then(res => res.json())
         .then(data => {
        tempinfo.classList.remove(`hidden`)
        tempinfo.classList.add(`tempInfo`)
        tempH1.innerText=data.current.temp_c 
        tempinfo.appendChild(tempH1)
        tempCityCont.id=`citydiv`
        tempCityCont.classList.add("cityName")
        cityP.innerText=data.location.name;
        citySpan.innerText=data.location.localtime;
        img.src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
        tempCityCont.appendChild(cityP)
        tempCityCont.appendChild(citySpan)
        tempinfo.appendChild(tempCityCont)
        tempinfo.appendChild(img)
        let grubeli=document.getElementById(`cloudy`)
        grubeli.innerText=data.current.cloud
        grubeli.append()
        let qari=document.getElementById(`wind`)
        qari.innerText=data.current.wind_kph
        qari.append()
        let hum=document.getElementById(`humidity`)
        hum.innerText=data.current.humidity
        hum.append()
        let min=document.getElementById("Temp min")
        min.innerText=data.forecast.forecastday[0].day.mintemp_c
        min.append()
        let max=document.getElementById("Temp max")
        max.innerText=data.forecast.forecastday[0].day.maxtemp_c
        max.append()
    
    
        
    
        hour.classList.add(`hour`)
        weatherHistory.classList.add(`timeWeather`)    
    
    
    
        for (let i = 0; i < data.forecast.forecastday[0].hour.length; i++) {
            const hourDiv = document.createElement('div');
            hourDiv.classList.add('hour');
    
            const celsius = document.createElement('span');
            celsius.innerText = data.forecast.forecastday[0].hour[i].temp_c;
            hourDiv.appendChild(celsius);
    
            const clock = document.createElement('span');
            clock.innerText = data.forecast.forecastday[0].hour[i].time;
            hourDiv.appendChild(clock);
          
            const time = document.createElement('p');
            time.innerText = data.forecast.forecastday[0].hour[i].is_day;
            hourDiv.appendChild(time);
          
            const img = document.createElement('img');
            if (data.forecast.forecastday[0].hour[i].is_day > 0) {
              img.src = "https://cdn.weatherapi.com/weather/64x64/day/113.png";
              time.innerText="Day"
            } else {
              img.src = "https://cdn-icons-png.flaticon.com/128/547/547433.png";
              time.innerText="Nigth"
            }
            hourDiv.appendChild(img);
          
            forTimeCont.appendChild(hourDiv);
        }
      
    })
    }