import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}
  getTransactions() {
    return this.http.get("/secure/transaction").pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  getTransactionTripByUser(userId: string) {
    return this.http.get("/secure/transaction/trip/user/" + userId);
  }
}
