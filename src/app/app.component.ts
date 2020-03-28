import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers : []
})
export class AppComponent implements OnInit {

    buttonClicked = false;

    loginForm: FormGroup;

    constructor( private formBuilder: FormBuilder) {}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username : ['', Validators.required],
        password : ['', Validators.required]
      });
    }

    displayToast($event) {
      if (!this.buttonClicked) {
        console.log('displayToast');
      }
      this.buttonClicked = this.buttonClicked ? this.buttonClicked : !this.buttonClicked;
    }

    onSubmit() {
      console.log(this.loginForm.controls.username.value);
      console.log(this.loginForm.controls.password.value);
    }
}
