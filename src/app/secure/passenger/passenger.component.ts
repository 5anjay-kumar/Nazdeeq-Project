import { MessageComponent } from "./../../public/message/message.component";
import { TripsService } from "./../../core/services/trips.service";
import { PassengerDetailsComponent } from "./passenger-details/passenger-details.component";
import { PopupService } from "./../../core/services/popup.service";
import { UserService } from "./../../core/services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passenger",
  templateUrl: "./passenger.component.html",
  styleUrls: ["./passenger.component.css"],
})
export class PassengerComponent implements OnInit {
  passengers = [];
  message = {};
  isMenuCollapsed = true;
  constructor(
    private passengerService: UserService,
    private popupService: PopupService,
    private tripsService: TripsService
  ) {}

  ngOnInit() {
    this.passengerService.getUsers().subscribe((passenger) => {
      this.passengers = passenger;
    });
  }

  populateUserTripDetails(userId, firstName) {
    this.tripsService.getTripByUser(userId).subscribe((result) => {
      if (Object.keys(result).length !== 0) {
        this.openDriverDetailsPopup(result);
      } else {
        this.message = {
          title: "Passenger Details",
          name: firstName,
          body: "don't have any trip yet",
        };
        this.openMessagePopup(this.message);
      }
    });
  }

  openMessagePopup(message) {
    const messagePopup = this.popupService.openPopup(
      MessageComponent,
      message,
      {
        size: "sm",
      }
    );

    messagePopup.result.then(
      (result) => {
        // this.drivers.push(result);
        // this.emitterService.emit(constants.events.loadDispatcherCount);
      },
      () => {}
    );
  }

  openDriverDetailsPopup(user) {
    const passengerDeatilsPopup = this.popupService.openPopup(
      PassengerDetailsComponent,
      user,
      {
        size: "lg",
      }
    );

    passengerDeatilsPopup.result.then(
      (result) => {
        // this.drivers.push(result);
        // this.emitterService.emit(constants.events.loadDispatcherCount);
      },
      () => {}
    );
  }
}
