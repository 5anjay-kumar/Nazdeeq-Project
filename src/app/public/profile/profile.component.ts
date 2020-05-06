import { AuthService } from "./../../core/services/auth.service";
import { constants } from "./../../app.constants";
import { LoginUser } from "./../../core/model/login-user";
import { EmitterService } from "./../../core/services/emitter.service";
import { Router } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  loggedInUser: LoginUser;

  constructor(private router: Router, private emitterService: EmitterService) {}

  ngOnInit(): void {
    this._loadLoggedInUser();
    this.emitterService.subscribe(constants.events.loadLoggedInUser, () =>
      this._loadLoggedInUser()
    );
  }

  private _loadLoggedInUser() {
    this.isAuthenticated = AuthService.isAuthenticated();
    if (this.isAuthenticated) {
      this.loggedInUser = AuthService.getLoginUser();
    } else {
      this.loggedInUser = undefined;
    }
  }

  logout() {
    AuthService.logout();
    this._loadLoggedInUser();
    this.router.navigate(["/login"]);
  }

  ngOnDestroy() {
    this.emitterService.unsubscribe(constants.events.loadLoggedInUser);
  }
}
