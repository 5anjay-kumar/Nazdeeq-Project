import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class DriverService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set("Content-Type", "application/json");

  getDrivers() {
    return this.http.get("/secure/driver").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getDriverUser(driverId: string) {
    return this.http.get(
      "/secure/driver/" + driverId
    );
  }


  updateDriverStatus(data): Observable<any> {
    return this.http
      .put("/secure/driver/" + data._id, data, {
        headers: this.headers
      })
      .pipe();
  }
}
