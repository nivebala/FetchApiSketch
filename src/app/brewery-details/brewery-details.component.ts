import { Component, OnInit } from '@angular/core';
import {BreweryService} from '../brewery.service';
import { Brewery} from '../brewery';
@Component({
  selector: 'app-brewery-details',
  templateUrl: './brewery-details.component.html',
  styleUrls: ['./brewery-details.component.css']
})
export class BreweryDetailsComponent implements OnInit {
  name:string;
  breweryObj: Brewery;
  BreweryList:any=[];
  isDataAvailable:boolean=false;
  constructor(private _breweryService: BreweryService) { }

  ngOnInit(): void {
  }
  getBreweriesbyname() {
    this._breweryService.getBreweriesbyname(this.name).subscribe((result) => {
      this.BreweryList = result;
      this.isDataAvailable=true;
    });
  }
}
