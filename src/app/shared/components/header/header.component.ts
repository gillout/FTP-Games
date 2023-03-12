import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = false;
  username = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // Permet de vérifier, lors d'un raffraichissement, si un utilisateur est connecté
    this.loggedIn = this.authService.isLogged();
    this.authService.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if (this.loggedIn) {
        this.username = this.authService.getUsername();
      }
    });
  }

  goToConnection() {
    this.router.navigate(['/connection']);
  }

  disconnection() {
    this.authService.logout();
  }

  goToRegistration() {
    this.router.navigate(['/registration']);
  }

}
