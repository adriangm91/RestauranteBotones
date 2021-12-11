import { RestaurantEstatusEnum } from "./estatus.interface";

export interface Restaurant {
    name: string;
    address: string;
    stars: number;
    dateCreated?: Date;
    status: RestaurantEstatusEnum;
}