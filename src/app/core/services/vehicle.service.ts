import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicles() {
    return this.http.get("/secure/vehicle").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getVehicleDriver(vehicleId: string) {
    return this.http.get("/secure/vehicle/" + vehicleId);
  }

  getVehicleByDriver(driverId: string) {
    return this.http.get("/secure/vehicle/driver/" + driverId);
  }
}
