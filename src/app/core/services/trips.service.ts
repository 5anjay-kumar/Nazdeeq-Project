import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TripsService {
  constructor(private http: HttpClient) {}
  getTrips() {
    return this.http.get("/secure/trips").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getDriverUserTrips() {
   return this.http.get("/secure/driver/user/trip").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getTripByUser(userId: string) {
    return this.http.get("/secure/trip/user/" + userId);
  }

  // addTips(data): Observable<any> {
  //   return this.http.post("/local/signup", data);
  // }
}
