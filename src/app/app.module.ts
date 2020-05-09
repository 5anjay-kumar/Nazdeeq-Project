import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./core/interceptor/loader-interceptor";
import { LoaderService } from "./core/services/loader.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CoreModule } from "./core/core.module";
import { LoginComponent } from "./public/login/login.component";
import { PublicComponent } from "./public/public.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SignupComponent } from "./public/signup/signup.component";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule,
  AuthServiceConfig,
} from "angularx-social-login";
import { SocialSignupComponent } from "./public/social-signup/social-signup.component";
import { MyLoaderComponent } from "./public/my-loader/my-loader.component";
import { BusyComponent } from "./public/busy/busy.component";
import { NgBusyModule } from "ng-busy";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "801992059001-ihk536e4bkg62dbmdq7slgas3t4din8d.apps.googleusercontent.com"
    ),
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("240671880525684"),
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    SignupComponent,
    SocialSignupComponent,
    MyLoaderComponent,
    BusyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule,
    NgBusyModule.forRoot({
      backdrop: true,
      template: BusyComponent,
      wrapperClass: "ng-busy",
      delay: 0,
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    LoaderService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoaderInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
