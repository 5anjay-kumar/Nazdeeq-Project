import { DriverService } from "./../../../core/services/driver.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Chart } from "chart.js";

@Component({
  selector: "app-registered-driver",
  templateUrl: "./registered-driver.component.html",
  styleUrls: ["./registered-driver.component.css"],
})
export class RegisteredDriverComponent implements OnInit {
  chart = [];
  chartData = {};
  driverSubscription: Subscription;

  constructor(private driverService: DriverService) {}

  ngOnInit(): void {
    this._loadDriverByMonth();
  }

  private _loadDriverByMonth() {
    this.driverSubscription = this.driverService
      .getDriverCountByMonth()
      .subscribe((driverByMonth) => {
        // console.log(usersByMonth);
        this.chartData = {
          month2: driverByMonth[1].count,
          month3: driverByMonth[0].count,
          canvasName: "driverLineChart",
          label: "Drivers",
          title: "Monthly registred Drivers (2020)",
        };

        this.loadLineChart(this.chartData);
      });
  }

  loadLineChart(chartData) {
    Chart.defaults.global.defaultFontFamily = "Raleway";
    Chart.defaults.global.elements.line.fill = false;
    this.chart = new Chart(chartData.canvasName, {
      type: "line",
      data: {
        labels: [
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
          "January",
          "February",
        ],
        datasets: [
          {
            label: chartData.label,
            data: [chartData.month1, chartData.month2, chartData.month3],
            borderColor: "rgb(54, 162, 235)",
            fill: false,
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
          position: "top",
        },
      },
    });
  }
}
