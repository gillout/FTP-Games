import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/auth/connection', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  {path: 'games', loadChildren: () => import('./game/game.module').then(module => module.GameModule)},
  {path: '**', redirectTo: '/auth/connection'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
