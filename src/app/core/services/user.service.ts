import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set("Content-Type", "application/json");

  getUsers() {
    return this.http.get("/secure/passenger").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  addUser(data): Observable<any> {
    return this.http.post("/local/signup", data);
  }

  getOneUser(userId: string) {
    return this.http.get("/secure/passenger/" + userId);
  }

  updatePassengerStatus(data): Observable<any> {
    return this.http
      .put("/secure/passenger/" + data._id, data, {
        headers: this.headers,
      })
      .pipe();
  }
}
