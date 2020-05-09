import { Router } from "@angular/router";
import { EmitterService } from "./../../../core/services/emitter.service";
import { LoginUser } from "./../../../core/model/login-user";
import { constants } from "./../../../app.constants";
import { AuthService } from "./../../../core/services/auth.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isAuthenticated = false;
  loggedInUser: LoginUser;

  constructor(private router: Router, private emitterService: EmitterService) {}

  ngOnInit() {
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

  toggleSideBar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
