import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
public infotarjeta: Tarjeta[];

constructor(){
  this.infotarjeta = [
    { id:"1T",
      img:"../../../../assets/diesel.jpg",
      alt:"cartera diesel",
      titulo:"cartera Diesel",
      descripcion:"Foto de cartera",
      fechapublicacion:25
    },
    {
      id:"2T",
      img:"../../../../assets/aros.jpg",
      alt:"aros",
      titulo:"aros dorados",
      descripcion:"Foto de aros",
      fechapublicacion:25
    },
    {
      id:"3T",
      img:"../../../../assets/lv.jpg",
      alt:"cartera lv",
      titulo:"cartera LV ",
      descripcion:"Foto decartera LV",
      fechapublicacion:25
    },
    {
      id:"4T",
      img:"../../../../assets/cartera rosa lv.jpg",
      alt:"cartera lv rosa",
      titulo:"cartera LV rosada ",
      descripcion:"Foto decartera LV rosa",
      fechapublicacion:25
    },
  ]
}
tarjetaseleccionada:any = null

verMas(tarjeta:any){
  this.tarjetaseleccionada = tarjeta;
}

}
