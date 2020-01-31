import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-comp1",
  templateUrl: "./comp1.component.html",
  styleUrls: ["./comp1.component.css"]
})
export class Comp1Component implements OnInit {
  message = "Message From Comp1";
  obj = { fname: "Murali", lname: "Krishna" };
  users = ["Ram", "Ravi", "Kiran", "Sam"];
  //Adding Common Service to Comp1 (Constuctor and ngOnInit are called lifecycles)
  constructor(private commonService: CommonService) {
    console.log("I am Also Running every time");
  }

  //This ngOnInit method will run every time , Whenever component Renders
  ngOnInit() {}

  sendDataToService() {
    this.commonService.sendDataToComp2(this.message);
  }

  sendObjToService() {
    this.commonService.sendObjToComp2(this.obj);
  }

  sendArrayToService() {
    this.commonService.sendArrayToComp2(this.users);
  }
}
