import { RateAndReviewService } from "./../../core/services/rate-and-review.service";
import { Component, OnInit } from "@angular/core";
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-rate-and-review",
  templateUrl: "./rate-and-review.component.html",
  styleUrls: ["./rate-and-review.component.css"],
})
export class RateAndReviewComponent implements OnInit {
  rateAndReviews = [];
  constructor(private rateAndReviewService: RateAndReviewService, config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    this.rateAndReviewService.getRateAndReviews().subscribe((rateAndReview) => {
      this.rateAndReviews = rateAndReview;
    });
  }
}
