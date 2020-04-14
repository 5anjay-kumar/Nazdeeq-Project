import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DriverService {
  constructor(private http: HttpClient) {}

  getDrivers() {
    return this.http.get("/secure/driver").pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
