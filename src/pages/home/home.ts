import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { API } from './../../providers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    // private api: API,
    public navCtrl: NavController
  ) {
    // this.api.setBaseUrl('http://petstore.swagger.io/v2');
  }

  doGet(id: string) {
    // this.api.doGet('/pet', '/' + id).subscribe(res => console.log(res))
  }
}
