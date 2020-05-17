import { UserService } from "./../../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";
import { Subscription } from "rxjs";

@Component({
  selector: "app-registered-user",
  templateUrl: "./registered-user.component.html",
  styleUrls: ["./registered-user.component.css"],
})
export class RegisteredUserComponent implements OnInit {
  chart = [];
  chartData = {};
  userSubscription: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this._loadUserByMonth();
  }

  private _loadUserByMonth() {
    this.userSubscription = this.userService
      .getUserCountByMonth()
      .subscribe((usersByMonth) => {
        // console.log(usersByMonth);
        this.chartData = {
          month1: usersByMonth[2].count,
          month2: usersByMonth[1].count,
          month3: usersByMonth[0].count,
          canvasName: "userLineChart",
          label: "Users",
          title: "Monthly registred Users (2020)",
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
