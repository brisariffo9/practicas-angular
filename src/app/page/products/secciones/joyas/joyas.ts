import { Component } from '@angular/core';
import { Tarjeta } from '../../../../models/tarjeta';
@Component({
  selector: 'app-joyas',
  imports: [],
  templateUrl: './joyas.html',
  styleUrl: './joyas.css'
})
export class Joyas {
 public infoJoyas: Tarjeta[];
constructor(){this.infoJoyas=[
  {
      id:"2T",
      img:"../../../../assets/aros.jpg",
      alt:"aros",
      titulo:"aros dorados",
      descripcion:"Foto de aros",
      fechapublicacion:25,
      precio:"$3300",
    },
]

}
}

