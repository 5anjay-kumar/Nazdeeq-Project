import { UserService } from "./../../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-add-passenger",
  templateUrl: "./add-passenger.component.html",
  styleUrls: ["./add-passenger.component.css"],
})
export class AddPassengerComponent implements OnInit {
  ngModalRef: NgbModalRef;
  addPassengerForm: FormGroup;
  selectedFile: File = null;
  constructor(private fb: FormBuilder, private passengerService: UserService) {}

  ngOnInit() {
    this.passengerForm();
  }

  passengerForm() {
    this.addPassengerForm = this.fb.group({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      phoneNo: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      dateOfJoin: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
      // imgFile: fd.append("image", this.selectedFile),
    });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  registerPassenger() {
    this.passengerService
      .addUser(this.addPassengerForm.value)
      .subscribe((result) => {
        console.log("Added");
        this.ngModalRef.close(result);
      });
  }

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
