import { UserService } from "./../../../core/services/user.service";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-driver-details",
  templateUrl: "./driver-details.component.html",
  styleUrls: ["./driver-details.component.css"],
})
export class DriverDetailsComponent implements OnInit {
  ngModalRef: NgbModalRef;
  data: any;

  constructor() {}

  ngOnInit(): void {
  }

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
