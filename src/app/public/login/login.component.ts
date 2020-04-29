import { constants } from './../../app.constants';
import { LoginUser } from './../../core/model/login-user';
import { AppService } from './../../core/services/app.service';
import { EmitterService } from "./../../core/services/emitter.service";
import { AuthService } from "./../../core/services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private emitterService: EmitterService
  ) {}

  isAdmin: boolean;
  isUser: boolean;
  loginForm: FormGroup;

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
    AppService.markAsDirty(this.loginForm);
    if (!this.loginForm.valid) {
      return;
    }
    const data = this.loginForm.value;
    data.loginAs = loginAs;
    this.authService.login(data).subscribe((loginUser: LoginUser) => {
      console.log(loginUser);
      const landingPage = AppService.getDefaultRouteForLoggedInUser(loginUser);
      this.emitterService.emit(constants.events.loadLoggedInUser);
      this.router.navigate([landingPage]);
    });
  }
}
