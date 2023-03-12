import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConnectionPageComponent} from './pages/connection-page/connection-page.component';
import {RegistrationPageComponent} from './pages/registration-page/registration-page.component';
import {CoreModule} from "../core/core.module";
import {SharedModule} from "../shared/shared.module";
import {RouterLinkWithHref} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";

@NgModule({
  declarations: [
    ConnectionPageComponent,
    RegistrationPageComponent
  ],
  exports: [
    ConnectionPageComponent,
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLinkWithHref
  ]
})
export class AuthModule {
}
