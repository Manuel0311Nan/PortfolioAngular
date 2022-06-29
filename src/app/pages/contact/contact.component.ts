import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegister } from 'src/app/models/user-register';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent{
  public userRegisterForm: FormGroup;
  public submitted: boolean = false;
  passwordPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private formBuilder: FormBuilder) {
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      passwordRepeat: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
      email: ['', Validators.required, Validators.pattern(this.emailPattern)]
    })
  }

  public onSubmit(): void {
    this.submitted = true;
    if (this.userRegisterForm.valid) {
      const user: UserRegister = {
        name: this.userRegisterForm.get('name')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
        email: this.userRegisterForm.get('email')?.value,
      };
      console.log(user);
      this.userRegisterForm.reset();
      this.submitted = false;
    }
  }

}
