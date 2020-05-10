import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient) {}
  getServiceTypes() {
    return this.http.get("/secure/servicetype").pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
