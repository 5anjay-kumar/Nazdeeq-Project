import { constants } from './../../app.constants';
import { PopupService } from "./../../core/services/popup.service";
import { SocialSignupComponent } from "./../social-signup/social-signup.component";
import { LoginComponent } from "./../login/login.component";
import { EmitterService } from "./../../core/services/emitter.service";
import { AppService } from "./../../core/services/app.service";
import { ValidatorService } from "./../../core/services/validator.service";
import { UserService } from "./../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService as SocialAuthService } from "angularx-social-login";
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
} from "angularx-social-login";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  userRegisterForm: FormGroup;
  date: Date = new Date();
  login: LoginComponent;
  error = "";
  constructor(
    private userService: UserService,
    private socialAuthService: SocialAuthService,
    private popupService: PopupService,
    private emitterService: EmitterService
  ) {}

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.userRegisterForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        ValidatorService.emailValidator,
      ]),
      phoneNo: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      status: new FormControl(true),
      dateOfJoin: new FormControl(
        this._getCurrentDate()
      ),
    });
  }

  registerUser() {
    this.error = "";
    AppService.markAsDirty(this.userRegisterForm);
    if (!this.userRegisterForm.valid) {
      return;
    }

    console.log(this.userRegisterForm.value);
    this.userService.addUser(this.userRegisterForm.value).subscribe(
      (result) => {
        console.log("User Added!");
        this.emitterService.emit(constants.events.loadUserCount);
      },
      (error) => {
        console.log("Error is: " + error);
        this.error = error.errorMessage;
      }
    );

    this.userRegisterForm.reset(this.userRegisterForm.value);
  }

  signupWithGoogle(): void {
    this.error = "";
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log(userData);
        this.openSignupPopup(userData);
      },
      (error) => {
        console.log("Signup: " + error);
        this.error = error.errorMessage;
      }
    );
  }

  signupWithFacebook(): void {
    this.error = "";
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log(userData);
        this.openSignupPopup(userData);
      },
      (error) => {
        console.log("Error is: " + error);
        this.error = error.errorMessage;
      }
    );
  }

  openSignupPopup(socialUserData) {
    const data = {
      firstName: socialUserData.firstName,
      lastName: socialUserData.lastName,
      email: socialUserData.email,
      socialUserId: socialUserData.id,
      socialProvider: socialUserData.provider,
    };

    const registerPopup = this.popupService.openPopup(
      SocialSignupComponent,
      data,
      {
        size: "lg",
      }
    );

    registerPopup.result.then(
      (result) => {},
      () => {}
    );
  }

  private _getCurrentDate() {
    return (
      this.date.getDate() +
      "-" +
      this.date.getMonth() +
      "-" +
      this.date.getFullYear()
    );
  }

  clearError() {
    this.error = "";
  }
}
