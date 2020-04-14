import { AddPassengerComponent } from './add-passenger/add-passenger.component';
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
  constructor(
    private passengerService: UserService,
    private popupService: PopupService
  ) {}

  ngOnInit() {
    this.passengerService.getUsers().subscribe((passenger) => {
      console.log(passenger);
      this.passengers = passenger;
    });
  }

  openRegisterPassengerPopup() {
    const registerPopup = this.popupService.openPopup(
      AddPassengerComponent,
      null,
      {
        size: "lg",
      }
    );

    registerPopup.result.then(
      (result) => {
        this.passengers.push(result);
      },
      () => {}
    );
  }
}
