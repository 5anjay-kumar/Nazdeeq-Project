import { DispatcherService } from "./../../../core/services/dispatcher.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dispatcher-status",
  templateUrl: "./dispatcher-status.component.html",
  styleUrls: ["./dispatcher-status.component.css"],
})
export class DispatcherStatusComponent implements OnInit {
  chart = [];
  chartData = {};

  dispatchStatusSubscription: Subscription;

  constructor(private dispatcherService: DispatcherService) {}

  ngOnInit(): void {
    this._loadDispatcherStatusChart();
  }

  private _loadDispatcherStatusChart() {
    this.dispatchStatusSubscription = this.dispatcherService
      .getDispatcherCountByStatus()
      .subscribe((statusCount) => {
        this.chartData = {
          activeCount: statusCount[0].count,
          inactiveCount: statusCount[1].count,
          canvasName: "dispatcherStatusCanvas",
          label: {
            active: "Active Dispatcher",
            inactive: "Inactive Dispatcher",
          },
          title: "Dispatcher Status",
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
