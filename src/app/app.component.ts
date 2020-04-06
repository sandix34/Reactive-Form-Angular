import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup ({
      name: new FormControl('', [/*Validators.required, Validators.minLength(4), */this.forbiddenNameValidator(/bob/i)]),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  // custom validator to detect a specific forbidden name and returns a validator function
  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

  submit() {
    console.log(this.myForm.valid);
    
  }
}
