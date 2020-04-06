import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup ({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    console.log(this.myForm.valid);
    
  }
}
