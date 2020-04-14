import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./public/login/login.component";
import { PublicComponent } from "./public/public.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, PublicComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
