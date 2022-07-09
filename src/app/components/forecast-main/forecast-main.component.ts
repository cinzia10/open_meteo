import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/model/city';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-forecast-main',
  templateUrl: './forecast-main.component.html',
  styleUrls: ['./forecast-main.component.scss']
})


export class ForecastMainComponent implements OnInit {

  public searchString: string = '';
  public isShow = false
  cityArray: City[] = []


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  viewMeteo(city: City){
    if(city){
    this.dataService.getLatAndLon(city.latitude, city.longitude)
    this.isShow = false}
  }

  getCity(){
    this.dataService.getCity().subscribe({
      next: res => this.cityArray = res,
      error: err => console.log(err)
    })
  }

  search(){
    this.dataService.search(this.searchString);
    this.isShow = true;
    this.getCity();
  }
}
