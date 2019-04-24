import { Component, OnInit } from '@angular/core';
import {CarserviceService} from 'src/app/carservice.service';
@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.css']
})
export class CarBrandsComponent implements OnInit {

  constructor(private carser:CarserviceService) { }
  carData;
  ngOnInit() {
    this.carser.getcarDetails()
    .subscribe(res=>
      {
        this.carData=res;
        console.log(this.carData)
      })
  }

}

