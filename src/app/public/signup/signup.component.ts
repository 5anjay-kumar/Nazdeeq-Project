import { AppService } from './../../core/services/app.service';
import { ValidatorService } from "./../../core/services/validator.service";
import { UserService } from "./../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  userRegisterForm: FormGroup;
  date: Date = new Date();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.userRegisterForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        ValidatorService.emailValidator,
      ]),
      phoneNo: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      status: new FormControl(true),
      dateOfJoin: new FormControl(
        this.date.getDate() +
          "-" +
          this.date.getMonth() +
          "-" +
          this.date.getFullYear()
      ),
    });
  }

  registerUser() {
    AppService.markAsDirty(this.userRegisterForm);
    if (!this.userRegisterForm.valid) {
      return;
    }

    console.log(this.userRegisterForm.value);
    this.userService
      .addUser(this.userRegisterForm.value)
      .subscribe((result) => {
        console.log("User Added!");
      });
  }
}
