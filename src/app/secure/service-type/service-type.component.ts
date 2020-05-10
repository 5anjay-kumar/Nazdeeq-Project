import { ServiceTypeService } from "./../../core/services/service-type.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-service-type",
  templateUrl: "./service-type.component.html",
  styleUrls: ["./service-type.component.css"],
})
export class ServiceTypeComponent implements OnInit {
  serviceTypes = [];

  constructor(private serviceTypeService: ServiceTypeService) {}

  ngOnInit(): void {
    this.serviceTypeService.getServiceTypes().subscribe((serviceType) => {
      this.serviceTypes = serviceType;
    });
  }
}
