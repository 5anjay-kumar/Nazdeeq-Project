import { DriverService } from "./../../../core/services/driver.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { Subscription } from "rxjs";

@Component({
  selector: "app-driver-status",
  templateUrl: "./driver-status.component.html",
  styleUrls: ["./driver-status.component.css"],
})
export class DriverStatusComponent implements OnInit {
  chart = [];
  chartData = {};
  driverStatusSubscription: Subscription;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this._loadDriverStatusChart();
  }

  private _loadDriverStatusChart() {
    this.driverStatusSubscription = this.driverService
      .getDriversCountByStatus()
      .subscribe((statusCount) => {
        this.chartData = {
          activeCount: statusCount[0].count,
          inactiveCount: statusCount[1].count,
          canvasName: "driverStatusCanvas",
          label: {
            active: "Active Driver",
            inactive: "Inactive Driver",
          },
          title: "Driver Status",
        };

        this.loadChart(this.chartData);
      });
  }

  loadChart(chartData) {
    Chart.defaults.global.defaultFontFamily = "Raleway";
    this.chart = new Chart(chartData.canvasName, {
      type: "doughnut",
      data: {
        labels: [chartData.label.active, chartData.label.inactive],
        datasets: [
          {
            label: "Driver",
            data: [chartData.activeCount, chartData.inactiveCount],
            backgroundColor: ["#7DCEA0", "#FF7588"],
            borderWidth: 3,
            borderColor: "white",
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: chartData.title,
          fontSize: 20,
        },
        legend: {
          position: "right",
        },
      },
    });
  }
}
