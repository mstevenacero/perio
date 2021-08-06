import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router'


@Component({
  selector: 'app-perioperatorio',
  templateUrl: './perioperatorio.page.html',
  styleUrls: ['./perioperatorio.page.scss'],
})
export class PerioperatorioPage implements OnInit {
  show:boolean=false;
  show1:boolean=false;
  show2:boolean=false;

  constructor(private router:Router) { 

    
  }
  
  getPerio(){

    this.router.navigate(['./perioperatorio'])
  }
  
  ngOnInit() {
  }

}
