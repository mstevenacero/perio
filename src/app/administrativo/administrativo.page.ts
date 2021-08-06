import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router'

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.page.html',
  styleUrls: ['./administrativo.page.scss'],
})
export class AdministrativoPage implements OnInit {

  constructor(private router:Router) { }
  goAgenda(){


    this.router.navigate(['administrativo/agenda'])
   }

  ngOnInit() {
  }

}
