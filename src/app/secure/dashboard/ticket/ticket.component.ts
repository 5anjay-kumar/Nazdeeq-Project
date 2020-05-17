import { TransactionService } from './../../../core/services/transaction.service';
import { DriverService } from "./../../../core/services/driver.service";
import { UserService } from "./../../../core/services/user.service";
import { DispatcherService } from "./../../../core/services/dispatcher.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-ticket",
  templateUrl: "./ticket.component.html",
  styleUrls: ["./ticket.component.css"],
})
export class TicketComponent implements OnInit, OnDestroy {
  totalEarning: number;
  dispatcherCount: number;
  passengerCount: number;
  driverCount: number;

  transactionSubscription: Subscription;
  dispatcherSubscription: Subscription;
  userSubscription: Subscription;
  driverSubscription: Subscription;

  constructor(
    private transactionService: TransactionService,
    private dispatcherService: DispatcherService,
    private userService: UserService,
    private driverService: DriverService
  ) {}

  ngOnInit(): void {
    this._loadTransactionPaidAmount();
    this._loadDispatcherCount();
    this._loadUserCount();
    this._loadDriverCount();
  }

  private _loadTransactionPaidAmount() {
   this.transactionSubscription =  this.transactionService
      .getTransactionPaidAmount()
      .subscribe((totalAmount) => {
        this.totalEarning = totalAmount[0].totalAmount;
      });
  }

  private _loadDispatcherCount() {
   this.dispatcherSubscription = this.dispatcherService.getDispatcherCount().subscribe((dispatch) => {
      this.dispatcherCount = dispatch[0].count;
    });
  }

  private _loadDriverCount() {
   this.driverSubscription = this.driverService.getDriversCount().subscribe((driver) => {
      this.driverCount = driver[0].count;
    });
  }

  private _loadUserCount() {
    this.userSubscription = this.userService.getUserCount().subscribe((user) => {
      this.passengerCount = user[0].count;
    });
  }

  ngOnDestroy() {
    // if (this.userSubscription) {
    //   this.userSubscription.unsubscribe();
    // }
  }
}
