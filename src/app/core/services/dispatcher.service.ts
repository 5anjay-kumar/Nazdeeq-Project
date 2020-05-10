import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(private http: HttpClient) {}
  headers = new HttpHeaders().set("Content-Type", "application/json");

  getDispatchers() {
    return this.http.get("/secure/dispatcher").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  updateDispatcherStatus(data): Observable<any> {
    return this.http
      .put("/secure/dispatcher/" + data._id, data, {
        headers: this.headers
      })
      .pipe();
  }


  registerDispatcher(data): Observable<any> {
    return this.http.post("/secure/dispatcher", data);
  }
}
