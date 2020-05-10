import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.css"],
})
export class MessageComponent implements OnInit {
  ngModalRef: NgbModalRef;
  data: any;

  constructor() {}

  ngOnInit(): void {}

  closeWindow() {
    this.ngModalRef.dismiss("Cross Click");
  }
}
