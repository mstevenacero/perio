import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{ImgService} from './../servicios/img.service';
import{Router}from'@angular/router'
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.page.html',
  styleUrls: ['./autenticacion.page.scss'],
})
export class AutenticacionPage implements OnInit {
  img:any;
  itemRef: any;
  loginForm:FormGroup;

  constructor(private imagenes:ImgService,private router:Router ,private db: AngularFireDatabase,private auth:AngularFireAuth,private fb:FormBuilder) { 

  this.img=imagenes.getImagen();
  }
  
  goUsuario(){

    this.router.navigate(['/perfil'])
  }
  
  ngOnInit() {

    this.loginForm=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]



    })
    this.itemRef = this.db.object('test');
this.itemRef.snapshotChanges().subscribe(action => {
  console.log(action.type);
  console.log(action.key)
  console.log(action.payload.val())
});
  }
  login(){
    this.auth.signInWithEmailAndPassword(
      this.loginForm.controls['email'].value,
      this.loginForm.controls['password'].value
    ).then(userData=>{
      console.log(userData);
      this.router.navigateByUrl('perfil');
    })
    console.log(this.loginForm.value);
  }

}
