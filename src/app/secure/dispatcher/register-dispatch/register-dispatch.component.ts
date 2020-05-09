import { EmitterService } from "./../../../core/services/emitter.service";
import { constants } from "./../../../app.constants";
import { Validators } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { DispatcherService } from "./../../../core/services/dispatcher.service";
import { FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register-dispatch",
  templateUrl: "./register-dispatch.component.html",
  styleUrls: ["./register-dispatch.component.css"],
})
export class RegisterDispatchComponent implements OnInit {
  ngModalRef: NgbModalRef;
  registerDispatcherForm: FormGroup;
  date: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private dispatcherService: DispatcherService,
    private emitterService: EmitterService
  ) {}

  ngOnInit() {
    this.passengerForm();
  }

  passengerForm() {
    this.registerDispatcherForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phoneNo: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      dateOfJoin: this._getCurrentDate(),
      status: false,
    });
  }

  registerPassenger() {
    this.dispatcherService
      .registerDispatcher(this.registerDispatcherForm.value)
      .subscribe((result) => {
        console.log("Added");
        this.emitterService.emit(constants.events.loadDispatcherCount);
        this.ngModalRef.close(result);
      });
  }

  private _getCurrentDate() {
    return (
      this.date.getDate() +
      "-" +
      this.date.getMonth() +
      "-" +
      this.date.getFullYear()
    );
  }

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
