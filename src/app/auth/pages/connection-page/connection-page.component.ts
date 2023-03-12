import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../../shared/services/user.service";
import {LoginRequestPayload} from "../../models/login-request-payload";
import {filter} from "rxjs";

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss']
})
export class ConnectionPageComponent implements OnInit {

  title = 'Connexion';
  user = {
    username: '',
    email: '',
    password: '',
    role: ''
  };
  error = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe(filter(
      params => params.has('error'))
    ).subscribe(params => {
      this.error = true;
    });
  }

  loginUser(form: NgForm) {
    const loginRequestPayLoad: LoginRequestPayload = {
      email: form.value.email,
      password: form.value.pwd
    };

    this.authService.login(loginRequestPayLoad).subscribe(
    loggedIn => {
        if (loggedIn) {
          this.router.navigate(['/games']);
        } else {
          this.router.navigate(['/connection'], {
            queryParams: {
              error: true
            }
          });
        }
      }
    );
  }
}
