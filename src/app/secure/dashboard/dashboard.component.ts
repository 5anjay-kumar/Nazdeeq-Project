import { TripsService } from "./../../core/services/trips.service";
import { VehicleService } from "./../../core/services/vehicle.service";
import { DriverService } from "./../../core/services/driver.service";
import { UserService } from "./../../core/services/user.service";
import { DispatcherService } from "./../../core/services/dispatcher.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  dispatcherCount: number;
  passengerCount: number;
  driverCount: number;
  vehicleCount: number;
  driverUserTrips = [];
  date: Date = new Date();
  chart = [];
  chartData = {};
  public isCollapsed = true;

  chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
  };

  constructor(
    private dispatcherService: DispatcherService,
    private userService: UserService,
    private driverService: DriverService,
    private vehicleService: VehicleService,
    private tripsService: TripsService
  ) {}

  ngOnInit() {
    this._loadDispatcherCount();
    this._loadUserCount();
    this._loadDriverCount();
    this._loadVehicleCount();
    this._loadDriverStatusChart();
    this._loadDispatcherStatusChart();
    this.loadLineChart();

    this.tripsService.getDriverUserTrips().subscribe((driverUserTrip) => {
      this.driverUserTrips.push.apply(this.driverUserTrips, driverUserTrip);
    });

    // this.map.getLocation().subscribe((result) => {
    //   console.log(result);
    //   this.lat = result.latitude;
    //   this.lng = result.longitude;
    // });
  }

  private _loadDispatcherCount() {
    this.dispatcherService.getDispatcherCount().subscribe((dispatch) => {
      this.dispatcherCount = dispatch[0].count;
    });
  }

  private _loadDriverStatusChart() {
    this.driverService.getDriversCountByStatus().subscribe((statusCount) => {
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

  private _loadDispatcherStatusChart() {
    this.dispatcherService
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

  private _loadUserCount() {
    this.userService.getUserCount().subscribe((user) => {
      this.passengerCount = user[0].count;
    });
  }

  private _loadDriverCount() {
    this.driverService.getDriversCount().subscribe((driver) => {
      this.driverCount = driver[0].count;
    });
  }

  private _loadVehicleCount() {
    this.vehicleService.getVehicleCount().subscribe((vehicle) => {
      this.vehicleCount = vehicle[0].count;
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

  loadLineChart() {
    Chart.defaults.global.defaultFontFamily = "Raleway";
    Chart.defaults.global.elements.line.fill = false;
    this.chart = new Chart("lineChart", {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
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
        ],
        datasets: [
          {
            label: "Users",
            data: [25, 50, 12, 45, 150],
            borderColor: this.chartColors.green,
            fill: false
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Line data",
          fontSize: 20,
        },
        legend: {
          position: "top",
        },
      },
    });
  }

  ngOnDestroy() {}
}
