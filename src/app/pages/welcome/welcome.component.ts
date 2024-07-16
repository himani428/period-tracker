import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {

  constructor(private navCtrl: NavController, private router: Router) { }
  next() {
    // Example navigation to the next page
    this.router.navigate(['/user-info']);
  }

}
