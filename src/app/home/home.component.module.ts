import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TopBarComponent } from "../commons/components/top-bar/top-bar.component";
import { HomeRoutingModule } from "./home-routing.component";

import { HomeComponent } from "./home.component";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [HomeRoutingModule],
  declarations: [HomeComponent, TopBarComponent],
  exports: [],
  providers: [],
})
export class HomeModule {}
