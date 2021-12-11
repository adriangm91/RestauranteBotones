import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { RestaurantEstatusEnum } from '../table/estatus.interface';
import { Restaurant } from '../table/restaurant.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    public restaurant: Restaurant = { 
      name: '',
      stars: 0,
      address:'',
      status: RestaurantEstatusEnum.CLOSED
    };

    // @Output() onRestaurantCreated = new EventEmitter<Restaurant>();
    public onSubmit(){
      this.restaurant.dateCreated = new Date();
      console.log(this.restaurant);
      alert("El restaurante ha sido creado exitosamente");
      this._restaurantService.restaurants.push({...this.restaurant});
      console.log(this._restaurantService.restaurants);     
    }
    
    
  constructor(private _restaurantService: RestaurantService) { }

  ngOnInit(): void {
  }

}
