import { Component, OnInit } from '@angular/core';
import { Meteo } from 'src/app/model/meteo';
import { DataService } from 'src/app/services/data.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-forecast-meteo',
  templateUrl: './forecast-meteo.component.html',
  styleUrls: ['./forecast-meteo.component.scss']
})
export class ForecastMeteoComponent implements OnInit {

  public forecastArray: Meteo[] = []

  constructor(private dataService: DataService) { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.dataService.getMeteo().subscribe({
      next: res => this.forecastArray = res,
      error: err => console.log(err)
    });
  }

}


