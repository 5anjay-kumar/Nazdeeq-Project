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

  constructor(private dispatcherService: DispatcherService) {}

  ngOnInit(): void {}

  update(isConfirm) {
    if (isConfirm === true) {
      if (this.data.status === true) {
        this.data.status = false;
      } else {
        this.data.status = true;
      }

      this.dispatcherService
        .updateDispatcherStatus(this.data)
        .subscribe((result) => {
          this.ngModalRef.close(result);
        });
    } else {
      this.ngModalRef.dismiss("cancel click");
    }
  }

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
