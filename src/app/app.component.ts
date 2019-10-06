import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers : []
})
export class AppComponent implements OnInit {

    buttonClicked = false;
    constructor() {}

    ngOnInit() {}

    displayToast($event) {
      if (!this.buttonClicked) {
        console.log('displayToast');
      }
      this.buttonClicked = this.buttonClicked ? this.buttonClicked : !this.buttonClicked;
    }

}
