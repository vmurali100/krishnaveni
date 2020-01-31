import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-comp2",
  templateUrl: "./comp2.component.html",
  styleUrls: ["./comp2.component.css"]
})
export class Comp2Component implements OnInit {
  msgFromCom1;
  objFromComp1: any = {
    fname: "",
    lname: ""
  };
  arraFromComp1: any = [];
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.receiveAndSend.subscribe(data => {
      console.log(data);
      this.msgFromCom1 = data;
    });

    this.commonService.receiveAndSendObj.subscribe(obj => {
      this.objFromComp1 = obj;
    });

    this.commonService.receiveAndSendArr.subscribe(arr => {
      this.arraFromComp1 = arr;
    });
  }
}
