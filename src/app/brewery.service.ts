import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Brewery} from './brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient) { 
    
  }
  getBreweries() {
    // now returns an Observable of Config
    return this.http.get<Brewery>("https://api.openbrewerydb.org/breweries");
  }
  
  getBreweriesbyname(name:string) {
    // now returns an Observable of Config
    let url="https://api.openbrewerydb.org/breweries?by_name={name}".replace("{name}",name);
    return this.http.get<Brewery>(url);
  }
}
