import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
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
}
