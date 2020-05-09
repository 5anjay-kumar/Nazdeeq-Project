import { EmitterService } from "./../../core/services/emitter.service";
import { PopupService } from "./../../core/services/popup.service";
import { VehicleService } from "./../../core/services/vehicle.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-vehicle",
  templateUrl: "./vehicle.component.html",
  styleUrls: ["./vehicle.component.css"],
})
export class VehicleComponent implements OnInit {
  vehicles = [];
  subscription: Subscription;

  constructor(
    private vehicleService: VehicleService,
    private popupService: PopupService,
    private emitterService: EmitterService
  ) {}

  ngOnInit(): void {
    this.subscription = this.vehicleService.getVehicles().subscribe((vehicle) => {
      this.vehicles = vehicle;
    });
  }
}
