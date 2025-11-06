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
public infoCarteras: Tarjeta[];
  public infoJoyas: Tarjeta[] = [];
public infoMaquillaje: Tarjeta[];

constructor(){
  this.infoCarteras = [

    { id:"1T",
      img:"../../../../assets/diesel.jpg",
      alt:"cartera diesel",
      titulo:"cartera Diesel",
      descripcion:"Foto de cartera",
      fechapublicacion:25,
      precio:"$80000",
    },
    
    {
      id:"3T",
      img:"../../../../assets/lv.jpg",
      alt:"cartera lv",
      titulo:"cartera LV ",
      descripcion:"Foto decartera LV",
      fechapublicacion:25,
       precio:"$3300",
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
    {
      id:"9T",
      img:"../../../../assets/pinzaco.jpg",
      alt:"pinza de pelo",
      titulo:"pinza de lazo",
      descripcion:"pinza de lazo plateado",
      fechapublicacion:25
    },
    {
      id:"10T",
      img:"../../../../assets/collarlazos.jpg",
      alt:"collar",
      titulo:"collar plateado ",
      descripcion:"collar plateado con moños o lazos estilo coquette",
      fechapublicacion:25
    },
    {
      id:"11T",
      img:"../../../../assets/cadenacintura.jpg",
      alt:"cadena",
      titulo:"cadena para la cintura ",
      descripcion:"cadena fina,plateada de flores estilo margaritas ",
      fechapublicacion:25
    },
    {
      id:"12T",
      img:"../../../../assets/llaverosperlas.jpg",
      alt:"colgantes de celular",
      titulo:"colgante para celular  ",
      descripcion:"colgante de perlas",
      fechapublicacion:25
    },
    
  ]


this.infoMaquillaje=[]
}
tarjetaseleccionada:any = null

verMas(tarjeta:any){
  this.tarjetaseleccionada = tarjeta;
}

}
