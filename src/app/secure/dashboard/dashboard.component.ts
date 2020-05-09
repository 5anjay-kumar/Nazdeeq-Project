import { VehicleService } from './../../core/services/vehicle.service';
import { DriverService } from './../../core/services/driver.service';
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
  vehicleCount: number;

  constructor(
    private dispatcherService: DispatcherService,
    private userService: UserService,
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this._loadDispatcherCount();
    this._loadUserCount();
    this._loadDriverCount();
    this._loadVehicleCount();

    this.emitterService.subscribe(constants.events.loadDispatcherCount, () => this._loadDispatcherCount());
    this.emitterService.subscribe(constants.events.loadUserCount, () => this._loadUserCount());
    this.emitterService.subscribe(constants.events.loadDriverCount, () => this._loadDriverCount());
    this.emitterService.subscribe(constants.events.loadVehicleCount, () => this._loadVehicleCount());
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

  private _loadDriverCount() {
    this.driverService.getDrivers().subscribe(driver => {
      this.driverCount = driver.length;
    });
  }

  private _loadVehicleCount() {
    this.vehicleService.getVehicles().subscribe(vehicle => {
      this.vehicleCount = vehicle.length;
    });
  }

  ngOnDestroy() {
    this.emitterService.unsubscribe(constants.events.loadDispatcherCount);
    this.emitterService.unsubscribe(constants.events.loadUserCount);
    this.emitterService.unsubscribe(constants.events.loadDriverCount);
    this.emitterService.unsubscribe(constants.events.loadVehicleCount);
  }
}
