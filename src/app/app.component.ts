import {Component, OnInit} from '@angular/core';
import {Car} from './domain/car';
import {CarService} from './services/carservice';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CarService]
})
export class AppComponent implements OnInit {

    // selectedValue = 'val2';

    myForm: FormGroup;

    constructor(private carService: CarService, private fb: FormBuilder) {
        this.myForm = this.fb.group({
            myRadio: this.fb.control('val2', Validators.required)
        });
    }

    ngOnInit() {
    }

}
