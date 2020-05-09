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
  ) {}

  ngOnInit() {
    this.passengerService.getUsers().subscribe((passenger) => {
      this.passengers = passenger;
    });
  }

}
