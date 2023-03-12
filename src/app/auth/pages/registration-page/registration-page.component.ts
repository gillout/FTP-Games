import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  title = 'Inscription';

  registerForm!: FormGroup;
  usernameRegex!: RegExp;
  emailRegex!: RegExp;
  passwordRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.usernameRegex = /^[a-zA-Z0-9\-]{4,20}$/;
    // this.emailRegex = /^[[:alnum:]]([-_.]?[[:alnum:]])*@[[:alnum:]]([-.]?[[:alnum:]])*\.([a-z]{2,4})$/;
    this.emailRegex = /(.+)@(.+){2,}\.(.+){2,}/;
    /* Le mot de passe doit contenir :
      - au moins un caractère alphabétique minuscule
      - au moins un caractère alphabétique majuscule
      - au moins un chiffre
      - au moins un caractère spécial
      - au moins 8 caractères, et 32 caractères au maximum
    */
    // this.passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})/;
    this.registerForm = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      // password: [null, [Validators.required,Validators.pattern(this.passwordRegex)]]
      username: [null, [Validators.required, Validators.pattern(this.usernameRegex)]],
      email: [null, [Validators.required, Validators.pattern(this.emailRegex)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      pwdConfirm: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
    });
  }

  onRegisterForm() {
    console.log(this.registerForm.value);
  }
}
