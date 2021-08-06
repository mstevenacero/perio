import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ImgService {
 imagenes: any[]=[
   
  {
       imagen1:"../../assets/imagenes/logoUnall",
       imagen2:"http://www.posgrados.unal.edu.co/tesis3minutos/images/logoUnall.png",

  }]

  constructor() { }
  getImagen(){

    return [...this.imagenes]
  }
}
