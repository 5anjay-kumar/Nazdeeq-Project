import { ConfirmationComponent } from './../../public/confirmation/confirmation.component';
import { VehicleService } from "./../../core/services/vehicle.service";
import { EmitterService } from "./../../core/services/emitter.service";
import { constants } from "./../../app.constants";
import { DriverDetailsComponent } from "./driver-details/driver-details.component";
import { PopupService } from "./../../core/services/popup.service";
import { DriverService } from "./../../core/services/driver.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-driver",
  templateUrl: "./driver.component.html",
  styleUrls: ["./driver.component.css"],
})
export class DriverComponent implements OnInit {
  drivers = [];
  vehicles = [];
  vehicleData: any;
  searchText;
  subscription: Subscription;

  constructor(
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private popupService: PopupService,
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this.subscription = this.driverService.getDrivers().subscribe((driver) => {
      this.drivers = driver;
    });
  }

  populateVehicleDriverDetails(driverId) {
    this.vehicleService.getVehicleByDriver(driverId).subscribe((result) => {
      this.openDriverDetailsPopup(result);
    });
  }

  openDriverDetailsPopup(driver) {
    const driverDeatilsPopup = this.popupService.openPopup(
      DriverDetailsComponent,
      driver,
      {
        size: "lg",
      }
    );

    driverDeatilsPopup.result.then(
      (result) => {
        // this.drivers.push(result);
        this.emitterService.emit(constants.events.loadDispatcherCount);
      },
      () => {}
    );
  }

  openConfirmationPopup(data) {
    const confirmationPopup = this.popupService.openPopup(
      ConfirmationComponent,
      data,
      {
        size: "sm",
      }
    );

    confirmationPopup.result.then(
      (result) => {
        data.status = !data.status;
        this.driverService
          .updateDriverStatus(data)
          .subscribe((results) => {});
      },
      () => {}
    );
  }
}
