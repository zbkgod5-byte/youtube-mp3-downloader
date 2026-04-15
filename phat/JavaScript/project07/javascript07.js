// fetch("https://api.open-meteo.com/v1/forecast?latitude=11.56&longitude=104.92&daily=temperature_2m_max,temperature_2m_min&timezone=auto")

let temperature= document.getElementById("temperature")
let dateNumbe = document.getElementById("dateNumber")
let dayName = document.getElementById("dayName")
let wind = document.getElementById("windValue")
let humidityValue = document.getElementById("humidityValue")
let conditionText = document.getElementById("conditionText")
let moment = document.getElementById("moment")
fetch("https://api.open-meteo.com/v1/forecast?latitude=13.10&longitude=103.50&current_weather=true")
.then(function (Result1) {
  return Result1.json();
})
.then( function(Result2){
console.log(Result2)
let windValue =Result2.current_weather.windspeed
let HeatResults=Result2.current_weather.temperature
let direction=Result2.current_weather.winddirection
let condition=Result2.current_weather.weathercode
let momentResult2=Result2.current_weather.is_day
temperature.innerText=HeatResults
wind.innerText=windValue
humidityValue.innerText=direction
moment.innerText=  night[ momentResult2]
let match = weatherConditions.find(item => item.code === condition);
console.log(match)
conditionText.innerText=match.status

});
const days = [
  "អាទិត្យ", 
  "ច័ន្ទ", 
  "អង្គារ", 
  "ពុធ", 
  "ព្រហស្បតិ៍", 
  "សុក្រ", 
  "សៅរ៍"
];
const night =["ពេលយប់","ពេលថ្ងៃ"]
const weatherConditions = [
    { code: 0, status: "មេឃស្រឡះ", icon: "sunny.png" },
    { code: 1, status: "មេឃស្រឡះច្រើន", icon: "mostly_clear.png" },
    { code: 2, status: "មេឃមានពពកខ្លះ", icon: "partly_cloudy.png" },
    { code: 3, status: "មេឃអាប់អួ", icon: "cloudy.png" },
    { code: 45, status: "មានចុះអ័ព្ទ", icon: "fog.png" },
    { code: 48, status: "មានចុះអ័ព្ទខ្លាំង", icon: "heavy_fog.png" },
    { code: 51, status: "ភ្លៀងរលឹមតិចៗ", icon: "drizzle.png" },
    { code: 61, status: "មានភ្លៀងធ្លាក់", icon: "rain.png" },
    { code: 95, status: "មានផ្គររន្ទះ", icon: "thunderstorm.png" }
];
const today = new Date();
const dayKhmer=days[today.getDay()]
const formattedDate = today.toLocaleDateString('en-GB');
dateNumbe.innerText = formattedDate;
dayName.innerText = dayKhmer;
console.log(formattedDate);
console.log(dayKhmer)