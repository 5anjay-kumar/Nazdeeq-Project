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
  searchText;

  constructor(
    private vehicleService: VehicleService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.vehicleService.getVehicles().subscribe((vehicle) => {
      this.vehicles = vehicle;
    });
  }
}
