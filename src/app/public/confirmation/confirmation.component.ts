import { UserService } from "./../../core/services/user.service";
import { DispatcherService } from "./../../core/services/dispatcher.service";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.css"],
})
export class ConfirmationComponent implements OnInit {
  ngModalRef: NgbModalRef;
  data: any;
  isConfirm = true;

  constructor() {}

  ngOnInit(): void {}

  updateStatus(isConfirm) {
    if (isConfirm === true) {
      this.ngModalRef.close(this.data);
    } else {
      this.ngModalRef.dismiss("cancel click");
    }
  }

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
