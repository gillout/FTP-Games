import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameDetailComponent} from './components/game-detail/game-detail.component';
import {GameHomePageComponent} from './pages/game-home-page/game-home-page.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLinkWithHref} from "@angular/router";
import {GameRoutingModule} from "./game-routing.module";

@NgModule({
  declarations: [
    GameDetailComponent,
    GameHomePageComponent
  ],
  exports: [
    GameDetailComponent,
    GameHomePageComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    RouterLinkWithHref
  ]
})
export class GameModule {
}
