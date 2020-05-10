import { ConfirmationComponent } from "./../../public/confirmation/confirmation.component";
import { RegisterDispatchComponent } from "./register-dispatch/register-dispatch.component";
import { PopupService } from "./../../core/services/popup.service";
import { DispatcherService } from "./../../core/services/dispatcher.service";
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dispatcher",
  templateUrl: "./dispatcher.component.html",
  styleUrls: ["./dispatcher.component.css"],
})
export class DispatcherComponent implements OnInit, OnDestroy {
  dispatcher = [];
  subscription: Subscription;

  constructor(
    private dispatcherService: DispatcherService,
    private popupService: PopupService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.subscription = this.dispatcherService
      .getDispatchers()
      .subscribe((dispatcher) => {
        // console.log(dispatcher);
        this.dispatcher = dispatcher;
      });
  }

  openRegisterDispatchPopup() {
    const registerPopup = this.popupService.openPopup(
      RegisterDispatchComponent,
      null,
      {
        size: "lg",
      }
    );

    registerPopup.result.then(
      (result) => {
        this.dispatcher.push(result);
      },
      () => {}
    );
  }

  openConfirmationPopup(data) {
    this.popupService.openPopup(
      ConfirmationComponent,
      data,
      {
        size: "sm",
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
