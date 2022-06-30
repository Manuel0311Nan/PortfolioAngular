import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserRegister } from 'src/app/models/user-register';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  public userRegisterForm: FormGroup;
  public submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,) {
    this.userRegisterForm = this.formBuilder.group({
      name:  new FormControl( '', [Validators.required,]),
      email:new FormControl( '', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl( '', [Validators.required,  Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$")])
    })
  }
  public onSubmit(): void {
    this.submitted = true;
    if (this.userRegisterForm.valid) {
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        email: this.userRegisterForm.get('email')?.value,
        password: this.userRegisterForm.get('password')?.value,
      };
      console.log(user);
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
