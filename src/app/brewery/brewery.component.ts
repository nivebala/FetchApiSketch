import { Component, OnInit } from '@angular/core';
import {BreweryService} from '../brewery.service';
import { Brewery} from '../brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})
export class BreweryComponent implements OnInit {
  breweryObj: Brewery;
  BreweryList:any=[];

  constructor( private _breweryService: BreweryService) { }

  ngOnInit(): void {
    this.getBreweries();
  }
  getBreweries() {
    this._breweryService.getBreweries().subscribe((result) => {
      this.BreweryList = result;
    });
  }
}
