import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {ConnectionPageComponent} from "./pages/connection-page/connection-page.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";

const routes = [
  {path: 'connection', component: ConnectionPageComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: '**', redirectTo: '/auth/connection'}
];

@NgModule({
  declarations: [
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule {
}
