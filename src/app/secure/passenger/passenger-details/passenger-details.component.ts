import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-passenger-details",
  templateUrl: "./passenger-details.component.html",
  styleUrls: ["./passenger-details.component.css"],
})
export class PassengerDetailsComponent implements OnInit {
  ngModalRef: NgbModalRef;
  data: any;

  constructor() {}

  ngOnInit(): void {}

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
