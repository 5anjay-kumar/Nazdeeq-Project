import { constants } from './../../app.constants';
import { EmitterService } from './../../core/services/emitter.service';
import { UserService } from "./../../core/services/user.service";
import { DispatcherService } from "./../../core/services/dispatcher.service";
import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  dispatcherCount: number;
  passengerCount: number;
  driverCount: number;

  constructor(
    private dispatcherService: DispatcherService,
    private userService: UserService,
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this._loadDispatcherCount();
    this._loadUserCount();

    this.emitterService.subscribe(constants.events.loadDispatcherCount, () => this._loadDispatcherCount());
    this.emitterService.subscribe(constants.events.loadUserCount, () => this._loadUserCount());
  }

  private _loadDispatcherCount() {
    this.dispatcherService.getDispatchers().subscribe(dispatch => {
      this.dispatcherCount = dispatch.length;
    });
  }

  private _loadUserCount() {
    this.userService.getUsers().subscribe(user => {
      this.passengerCount = user.length;
    });
  }

  ngOnDestroy() {
    this.emitterService.unsubscribe(constants.events.loadDispatcherCount);
    this.emitterService.unsubscribe(constants.events.loadUserCount);
  }
}
