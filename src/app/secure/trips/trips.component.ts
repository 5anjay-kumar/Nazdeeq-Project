import { TripsService } from "./../../core/services/trips.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-trips",
  templateUrl: "./trips.component.html",
  styleUrls: ["./trips.component.css"],
})
export class TripsComponent implements OnInit {
  trips = [];

  constructor(private tripsService: TripsService) {}

  ngOnInit(): void {
    this.tripsService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }
}
