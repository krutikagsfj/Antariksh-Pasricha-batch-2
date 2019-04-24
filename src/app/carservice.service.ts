import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CarserviceService {

  constructor(private http:HttpClient) { }
  getcarDetails()
  {
    return this.http.get('assets/productBrands.json');
  }
}
