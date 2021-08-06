import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  uid:string
  constructor() { }

  setUid(_uid:string){
    this.uid = _uid
    console.log(_uid);
  }

  getUid(){
    return this.uid;
  }

}
