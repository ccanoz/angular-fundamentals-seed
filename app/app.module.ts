import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";

// Module contains all of our components
@NgModule({
  // registers components into module
  declarations: [
    AppComponent
  ],
  // registers other modules
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  // only root has bootstrap property
  bootstrap: [AppComponent]
})
export class AppModule {

}
