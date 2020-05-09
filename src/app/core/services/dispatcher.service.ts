import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(private http: HttpClient) {}
  getDispatchers() {
    return this.http.get("/secure/dispatcher").pipe(
      map((data: any) => {
        return data;
      })
    );
  }


  registerDispatcher(data): Observable<any> {
    return this.http.post("/secure/dispatcher", data);
  }
}
