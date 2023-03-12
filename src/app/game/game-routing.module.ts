import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {GameHomePageComponent} from "./pages/game-home-page/game-home-page.component";
import {GameGuard} from "../core/guards/game.guard";

const routes = [
  {path: '', component: GameHomePageComponent, canActivate: [GameGuard]},
  {path: ':id', component: GameHomePageComponent, canActivate: [GameGuard]},
  {path: '**', loadChildren: () => import('../auth/auth.module').then(module => module.AuthModule)}
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
export class GameRoutingModule {
}
