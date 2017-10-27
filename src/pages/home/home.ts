import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { API } from './../../services'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    private api: API,
    public navCtrl: NavController) {
    this.api.setBaseUrl('http://petstore.swagger.io/v2');
  }

  doGet() {
    this.api
      .doGet('/pet', '/1')
      .subscribe((res) => {
        console.log(res);
      })
  }

  doPost() {
    this.api
      .doPost('/user', {
        "id": 99,
        "username": "colwob",
        "firstName": "colum",
        "lastName": "bennett",
        "email": "cbennett@redhat.com",
        "password": "test",
        "phone": "12345678",
        "userStatus": 0
      })
      .subscribe((res) => {
        console.log(res);
      })
  }

}
