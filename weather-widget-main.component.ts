import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit {

  WeatherData:any;
  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main : {},
      isDay: true
  };
    this.getWeatherData();
    console.log(this.WeatherData());
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q= " + city + " + &appid=" + APIkey')
    .then(response=>{response.json();}) 
    .then(data=>{this.setWeatherData(data);})
 // let data = JSON.parse('{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":297.15,"feels_like":297.4,"temp_min":297.15,"temp_max":297.15,"pressure":1013,"humidity":69},"visibility":3500,"wind":{"speed":3.6,"deg":300},"clouds":{"all":20},"dt":1580141589,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1580089441,"sunset":1580129884},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}');
 // this.setWeatherData(data);
  }

  setWeatherData(data)
    this.WeatherData = data;
    this.WeatherData.temp = (this.WeatherData.main.temp).toFixed(0);
    this.WeatherData.pressure = (this.WeatherData.main.pressure).toFixed(0);
    this.WeatherData.humidity = (this.WeatherData.main.humidity).toFixed(0);
  }

}
