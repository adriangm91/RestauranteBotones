import { Injectable } from '@angular/core';
import { Restaurant } from './table/restaurant.interface';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  public restaurants: Array <Restaurant> = [];
  
  constructor() { }
}
