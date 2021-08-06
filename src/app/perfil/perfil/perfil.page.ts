import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import{Router}from'@angular/router'
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage  {

  constructor(private menu: MenuController,private router:Router) {
    
    
   }
   


   GOper(){


    this.router.navigate(['/perioperatorio'])
   }
   goAdmi(){

    this.router.navigate(['/administrativo'])
   }
   goReport(){

    this.router.navigate(['/reporte'])
   }
   
   goAu(){

    this.router.navigate(['/autenticacion'])
   }
  

  ngOnInit() {

    
    
    
  }

}
