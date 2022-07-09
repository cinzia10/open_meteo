import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { City } from '../model/city';
import { Meteo } from '../model/meteo';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly CITY_URL = 'https://geocoding-api.open-meteo.com/v1/search';
  private readonly METEO_URL = 'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,relativehumidity_2m,pressure_msl,rain,weathercode,cloudcover,windspeed_10m,winddirection_10m';

  lat = '41.89193'
  long = '12.51133'

  searchedCity: string = ''

  constructor(private http: HttpClient) { }

  getCity(): Observable<City[]>{
      const url = this.CITY_URL + '?name=' + this.searchedCity
      return this.http.get(url).pipe(
          map(cities => this.parseCityData(cities))
      )
  }

  parseCityData(data: any){
    let cityArray: City[] = [];
    return cityArray = data.results
  }

  getMeteo(){
    const url = this.METEO_URL + '&latitude=' + this.lat +'&longitude=' + this.long;
    return this.http.get<Meteo[]>(url).pipe(
      map(data => this.parseMeteoData(data))
    )
  }

  parseMeteoData(data: any) {
    const temperatureArray = data.hourly.temperature_2m;
    const timeArray = data.hourly.time;
    const humidityArray = data.hourly.relativehumidity_2m;
    const rainArray = data.hourly.rain;
    const pressureArray = data.hourly.pressure_msl;
    const cloudCoverArray = data.hourly.cloudcover;
    const windSpeedArray = data.hourly.windspeed_10m;
    const windDirectionArray = data.hourly.winddirection_10m;
    const weatherCodeArray = data.hourly.weathercode;

    const forecastArray: Meteo[] = [];

    for (let i = 0; i < temperatureArray.length; i++) {
      const temperature = temperatureArray[i];
      const time = timeArray[i];
      const humidity = humidityArray[i];
      const rain = rainArray[i];
      const pressure = pressureArray[i];
      const cloudCover = cloudCoverArray[i];
      const windSpeed = windSpeedArray[i];
      const windDirection = windDirectionArray[i];
      const weatherCode = weatherCodeArray[i];

      const forecast: Meteo = {
        date: time,
        temperature: temperature,
        humidity:humidity,
        rain: rain,
        pressure: pressure,
        cloudCover: cloudCover,
        windSpeed: windSpeed,
        windDirection: windDirection,
        code: weatherCode
      };

      forecastArray.push(forecast);
    }

    return forecastArray
  }

  search(searchString: string){
      this.searchedCity = searchString;
  }

  getLatAndLon(lat: number, long: number){
    this.lat = lat.toString();
    this.long = long.toString();
  }

}
