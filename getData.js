import {toCel} from "./fomatTemp.js";

let cityName;
let isClicked= true;

function updateHtml(data,cityElement){
    const kelvinTemp = data.list[0].main.temp;
    let tempStatus = "";
    if(toCel(kelvinTemp) > 20 && toCel(kelvinTemp) < 40) tempStatus = "Not too hot"
    else if(toCel(kelvinTemp) > 40) tempStatus = "Hot";
    else if(toCel(kelvinTemp) < 20 && toCel(kelvinTemp) > 10) tempStatus= "Little cold";
    else if(toCel(kelvinTemp) < 10) tempStatus = "Cold";

        const dataHtml=
        `
            <div class="city-name"><h1>${cityElement}</h1></div>
    <div class="display-temp"><h2>Temperture:${toCel(kelvinTemp)} degrees</h2></div>
    <div class="other-info">
        <div class="humidity"><h3>Feels Like:${toCel(data.list[0].main.feels_like)}</h3></div>
        <div class="Status"><h3>Status:${tempStatus}</h3></div>
        `;  

        document.querySelector(".info-js").innerHTML = dataHtml;


}

function creatDataHistory(data){
   

        document.querySelector(".js-future").innerHTML = `
        <div class = "day-data">
                <div class="date-display">
                Date: ${data.list[1].dt_txt.slice(0,10)}</div>
                <div class="time-display">Time: ${data.list[1].dt_txt.slice(11)}</div>
                
                Temperature:${toCel(data.list[1].main.temp)}

            </div>

        <div class = "day-data">
                <div class="date-display">
                Date: ${data.list[2].dt_txt.slice(0,10)}</div>
                <div class="time-display">Time: ${data.list[2].dt_txt.slice(11)}</div>
                
                Temperature:${toCel(data.list[2].main.temp)}

            </div>

        <div class = "day-data">
                <div class="date-display">
                Date: ${data.list[3].dt_txt.slice(0,10)}</div>
                <div class="time-display">Time: ${data.list[3].dt_txt.slice(11)}</div>
                
                Temperature:${toCel(data.list[3].main.temp)}

            </div>

            <div class = "day-data">
                <div class="date-display">
                Date: ${data.list[4].dt_txt.slice(0,10)}</div>
                <div class="time-display">Time: ${data.list[4].dt_txt.slice(11)}</div>
                
                Temperature:${toCel(data.list[4].main.temp)}

            </div>

            <div class = "day-data">
                <div class="date-display">
                Date: ${data.list[5].dt_txt.slice(0,10)}</div>
                <div class="time-display">Time: ${data.list[5].dt_txt.slice(11)}</div>
                
                Temperature:${toCel(data.list[5].main.temp)}

            </div>
    `;
    
}


export default function getData(cityElement){

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=a01b5f4cf696c05af571546153b24383
    `).then(function (response) {
        if (!response.ok) {
            throw new Error("Cant get data");
        }
        else {
            return response.json();
        }
    }).then(function (data) {
        updateHtml(data,cityElement);

        creatDataHistory(data);

        
        
    }).then(function (error) {
        if(error) alert("You may have wrong City name Enter");
    })
} 


document.querySelector('.Search-button').addEventListener('click',()=>{
    cityName = document.querySelector('.input-city-name').value;
    getData(cityName);
        
})

