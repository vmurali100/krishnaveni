import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent1",
  templateUrl: "./parent1.component.html",
  styleUrls: ["./parent1.component.css"]
})
export class Parent1Component implements OnInit {
  msgfromChild;
  receivedObj = {
    fname: ""
  };
  receiveArrray = [];
  constructor() {}

  ngOnInit() {}
  receiveData(msg) {
    this.msgfromChild = msg;
  }

  receiveObj(obj) {
    this.receivedObj = obj;
  }

  receiveArr(arr) {
    this.receiveArrray = arr;
  }
}
