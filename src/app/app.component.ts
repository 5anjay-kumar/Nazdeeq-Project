import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "nazdeeq";
  constructor(public http: HttpClient) {}

  makeHttpCall() {
    this.http
      .get("https://jsonplaceholder.typicode.com/comments")
      .subscribe((r) => {
        console.log(r);
      });
  }
}
