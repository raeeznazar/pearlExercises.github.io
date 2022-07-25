import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { DpDatePickerModule } from "ng2-date-picker";
import { FormsModule } from "@angular/forms";

import { ViewPageComponent } from "./view-page/view-page.component";

@NgModule({
  declarations: [AppComponent, MainPageComponent, ViewPageComponent],
  imports: [BrowserModule, AppRoutingModule, DpDatePickerModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
