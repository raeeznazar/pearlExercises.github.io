import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Subject } from "rxjs";

@Component({
  selector: "app-view-page",
  templateUrl: "./view-page.component.html",
  styleUrls: ["./view-page.component.css"],
})
export class ViewPageComponent implements OnInit {
  availableTasks: any = [];
  editDetails: any;
  constructor() {}

  @Input() detailsFromMainPage: {
    id: any;
    subject: any;
    date: any;
    time: any;
    comments: any;
  };

  @Output() editDetailsPass = new EventEmitter<{
    id: any;
    subject: any;
    date: any;
    time: any;
    comments: any;
  }>();

  ngOnInit() {}

  ngOnChanges() {
    if (this.detailsFromMainPage) {
      ////checking wheather id is already present in array or not
      let index = this.availableTasks.findIndex(
        (task) => task.id == this.detailsFromMainPage.id
      );
      console.log(index);
      /// if id is not presnt in the array
      if (index == -1) {
        this.availableTasks.push(this.detailsFromMainPage);
      }
      /// if id is already presnt in the array
      else {
        this.availableTasks[index] = this.detailsFromMainPage;
      }

      console.log(this.availableTasks);
    }
  }

  deleteBtn(id) {
    let deleteIndex = this.availableTasks.findIndex(
      (result) => result.id == id
    );

    // splice() method adds and/or removes array elements and also The splice() method overwrites the original array.

    this.availableTasks.splice(deleteIndex, 1);
    console.log(id);
  }
  editBtn(t: any) {
    this.editDetails = {
      id: t.id,
      subject: t.subject,
      date: t.date,
      time: t.time,
      comments: t.comments,
      edit: true,
    };
    console.log(this.editDetails);
    this.editDetailsPass.emit(this.editDetails);
  }
}
