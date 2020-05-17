import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
    this._googleMap();
  }

  private _googleMap() {
    // this.map.getLocation().subscribe((result) => {
    //   console.log(result);
    //   this.lat = result.latitude;
    //   this.lng = result.longitude;
    // });
  }

  ngOnDestroy() {}
}
