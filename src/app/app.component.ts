import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myForm: FormGroup;
  
  ngOnInit() {
    this.myForm = new FormGroup ({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }

  submit() {
    console.log(this.myForm);
  }
}
