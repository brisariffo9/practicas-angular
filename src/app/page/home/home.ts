import { Component } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {
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
        descripcion:"Foto de cartera LV rosa",
        fechapublicacion:25
      },
      {
        id:"5T",
        img:"../../../../assets/carteramarron.jpg",
        alt:"cartera marron",
        titulo:"cartera marron basica ",
        descripcion:"Foto de cartera marron",
        fechapublicacion:25
      },
      {
        id:"6T",
        img:"../../../../assets/pandora.jpg",
        alt:"plusera plateada y rosa",
        titulo:"pulsera pandora plateada con detalles en rosa ",
        descripcion:"Foto de pandora",
        fechapublicacion:25
      },
      {
        id:"7T",
        img:"../../../../assets/cereza.jpg",
        alt:"aros de cereza",
        titulo:"aros colgantes de cereza ",
        descripcion:"Foto de colgantes de cereza",
        fechapublicacion:25
      },
      {
        id:"8T",
        img:"../../../../assets/llaverocere.jpg",
        alt:"llavero de cereza",
        titulo:"llavero de cereza ",
        descripcion:"foto del llavero",
        fechapublicacion:25
      },
    ]
  }
  tarjetaseleccionada:any = null
  
  verMas(tarjeta:any){
    this.tarjetaseleccionada = tarjeta;
  }
  
}
