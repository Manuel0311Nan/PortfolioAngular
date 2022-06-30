import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
      email: new FormControl('', [Validators.required]),
      phone:new FormControl( '', [Validators.required]),

    })
  }
onSubmit(){
    // this.submitted = true;
    if (this.userRegisterForm.valid) {
      console.log("Form Submitted")
      // const user: UserRegister = {
      //   name: this.userRegisterForm.get('name')?.value,
      //   email: this.userRegisterForm.get('email')?.value,
      //   phone: this.userRegisterForm.get('phone')?.value,
      // };
      // console.log(user);
      this.userRegisterForm.reset();
      // this.submitted = false;
    }
  }

}
