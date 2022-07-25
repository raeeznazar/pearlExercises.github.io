import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  id: any;
  subject: any;
  time: any;
  date: any;
  comments: any;
  taskDetails: any;
  editMode: boolean = false;

  editOutDetails: any;

  constructor() {}

  ngOnInit() {}

  datePickerConfig = {
    format: "DD-MM-YYYY",
  };

  submit() {
    // var subject = this.subject;
    // var time = this.time;
    // var date = this.date;
    // var comments = this.comments;
    // console.log(this.editMode);
    if (this.editMode) {
      this.taskDetails = {
        id: this.id,
        subject: this.subject,
        time: this.time,
        date: this.date,
        comments: this.comments,
      };
      this.editMode = false;
    } else {
      this.taskDetails = {
        id: Date.now(),
        subject: this.subject,
        time: this.time,
        date: this.date,
        comments: this.comments,
      };
    }

    this.subject = "";
    this.time = "";
    this.date = "";
    this.comments = "";
  }

  editOut(event) {
    this.id = event.id;
    this.editMode = true;
    this.subject = event.subject;
    this.time = event.time;
    this.date = event.date;
    this.comments = event.comments;

    // for (let i = 0; i < this.editOutDetails.length; i++) {
    //   document.getElementById("#subject").innerHTML =
    //     this.editOutDetails.subject;
    // }
  }
}
