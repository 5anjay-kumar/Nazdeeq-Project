import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RateAndReviewService {

  constructor(private http: HttpClient) {}
  getRateAndReviews() {
    return this.http.get("/secure/rateandreview").pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}
