import { EmitterService } from "./../../../core/services/emitter.service";
import { TripsService } from "./../../../core/services/trips.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recent-trips",
  templateUrl: "./recent-trips.component.html",
  styleUrls: ["./recent-trips.component.css"],
})
export class RecentTripsComponent implements OnInit {
  driverUserTrips = [];
  public isCollapsed = true;

  tripSubscription: Subscription;

  constructor(
    private tripsService: TripsService,
    private emitterService: EmitterService
  ) {}

  ngOnInit(): void {
    // this.tripSubscription = this.emitterService.get("text").subscribe(() => {});
  }

  showTrips() {
    this.isCollapsed = !this.isCollapsed;
    if (this.driverUserTrips.length === 0) {
      this.tripSubscription = this.tripsService
        .getDriverUserTrips()
        .subscribe((driverUserTrip) => {
          this.driverUserTrips = driverUserTrip;
        });
    }
  }
}
