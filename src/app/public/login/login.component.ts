import { SocialSignupComponent } from "./../social-signup/social-signup.component";
import { PopupService } from "./../../core/services/popup.service";
import { constants } from "./../../app.constants";
import { LoginUser } from "./../../core/model/login-user";
import { AppService } from "./../../core/services/app.service";
import { EmitterService } from "./../../core/services/emitter.service";
import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";
import {
  AuthService as SocialAuthService,
  SocialUser,
} from "angularx-social-login";
import { Subscription } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private emitterService: EmitterService,
    private authService: AuthService,
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService,
  ) {}

  isAdmin: boolean;
  isUser: boolean;
  loginForm: FormGroup;
  error = "";
  subscription: Subscription;
  ngOnInit() {
    this.loadLoginForm();
  }

  loadLoginForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login(loginAs: string) {
    this.error = "";
    AppService.markAsDirty(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    const data = this.loginForm.value;
    data.loginAs = loginAs;
    this.subscription = this.authService.login(data).subscribe(
      (loginUser: LoginUser) => {
        console.log(loginUser);
        const landingPage = AppService.getDefaultRouteForLoggedInUser(
          loginUser
        );
        this.emitterService.emit(constants.events.loadLoggedInUser);
        this.router.navigate([landingPage]);
      },
      (error) => {
        console.log(error);
        this.error = error.errorMessage;
      }
    );
  }

  signInWithGoogle(): void {
    this.error = "";
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
        this.subscription = this.authService
          .signinSocialUser({ socialUserId: userData.id })
          .subscribe(
            (result) => {
              const landingPage = AppService.getDefaultRouteForLoggedInUser(
                result
              );
              this.emitterService.emit(constants.events.loadLoggedInUser);
              this.router.navigate([landingPage]);
            },
            (error) => {
              console.log(error);
              this.error = error.errorMessage;
            }
          );
      });
  }

  signInWithFacebook(): void {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((userData) => {
        console.log(userData);
        this.subscription = this.authService
          .signinSocialUser({ socialUserId: userData.id })
          .subscribe(
            (result) => {
              const landingPage = AppService.getDefaultRouteForLoggedInUser(
                result
              );
              this.emitterService.emit(constants.events.loadLoggedInUser);
              this.router.navigate([landingPage]);
            },
            (error) => {
              console.log(error);
              this.error = error.errorMessage;
            }
          );
        // this.openSignupPopup(userData);
      });
  }



  clearError() {
    this.error = "";
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
