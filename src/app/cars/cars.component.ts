import { Component, OnInit } from '@angular/core';
import {cars} from '../../menu/cars';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
cars: any[] = cars;
  constructor() { }

  ngOnInit(): void {
  }

}
