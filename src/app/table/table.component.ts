import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantEstatusEnum } from './estatus.interface';
import { Restaurant } from './restaurant.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public restaurants: Array<Restaurant> = [];

  public status = RestaurantEstatusEnum;
  public changeStatus(index: number, newStatus: RestaurantEstatusEnum ){
  this.restaurants[index].status = newStatus;

  }
  public onDelete(index: number){
  this.restaurants.splice(index,1);
  }

  constructor(private _restaurantService: RestaurantService) {
    this.restaurants = this._restaurantService.restaurants;
   }

  ngOnInit(): void {
  }

}
