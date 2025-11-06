import { Component } from '@angular/core';
import { joyas } from '../../../../models/joyas';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../products';
@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {
  private contadorId = 1;
  /*propiedad privada informacion sencible*/

  coleccionproductos: joyas[] = []
  nuevoProducto = new FormGroup({
    nombre: new FormControl("", Validators.required),
    descripcion: new FormControl("", Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(""),
    alt: new FormControl(""),
    
    /* nombrepropiedad:new control
    string`` /numer null 
    validators.required valuidado como valor requerido estrictamente*/

  })
  /** 
   * metodo de creacion de procuctos segun interfaz "Producto"
   */
  crearProducto():void{
    if (this.nuevoProducto.valid) {
      const nuevoProducto:joyas = {
        id:this.contadorId++,
        
        //a id le asuignamos contador para qure sea autoincrementante
        nombre:this.nuevoProducto.value.nombre!,
        descripcion:this.nuevoProducto.value.descripcion!,
        precio:this.nuevoProducto.value.precio!,

        //resto de propiedaades ,asignamos desde el formulario el valor quese recuibio desde su casilla o formControlName
      }
      this.coleccionproductos.push(nuevoProducto);

      console.log("producto agregado: ",nuevoProducto);
      console.log("coleccion actual de productos: ",this.coleccionproductos);

      this.nuevoProducto.reset();

    }
  }
}
