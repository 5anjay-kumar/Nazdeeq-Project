import { constants } from "./../../app.constants";
import { AppService } from "./../../core/services/app.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { EmitterService } from "./../../core/services/emitter.service";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-social-signup",
  templateUrl: "./social-signup.component.html",
  styleUrls: ["./social-signup.component.css"],
})
export class SocialSignupComponent implements OnInit, OnDestroy {
  ngModalRef: NgbModalRef;
  socialSignupForm: FormGroup;
  data: any;
  subscription: Subscription;
  date: Date = new Date();
  error = "";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private emitterService: EmitterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm();
  }

  signupForm() {
    this.socialSignupForm = this.fb.group({
      phoneNo: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
    });
  }

  registerUser() {
    this.error = "";
    const formData = this.socialSignupForm.value;
    this.data.phoneNo = formData.phoneNo;
    this.data.gender = formData.gender;
    this.data.status = true;
    this.data.dateOfJoin = this._getCurrentDate();

    this.subscription = this.authService.signupSocialUser(this.data).subscribe(
      (result) => {
        console.log("Added");
        this.emitterService.emit(constants.events.loadUserCount);
        this.ngModalRef.close(result);
      },
      (error) => {
        console.log("Sign up popup: " + error);
        this.error = error.errorMessage;
        this.ngModalRef.close();
      }
    );
    this.authService.signinBySignupSocialUser({socialUserId: this.data.socialUserId}).subscribe((result) => {
      const landingPage = AppService.getDefaultRouteForLoggedInUser(
        result
      );
      this.emitterService.emit(constants.events.loadLoggedInUser);
      this.router.navigate([landingPage]);
    });
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

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
