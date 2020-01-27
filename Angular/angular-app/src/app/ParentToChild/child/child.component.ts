import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  //Configuring messageFromParent to receive data
  //Step 1:
  @Input() messageFromParent;
  @Input() objFromParent = {};
  @Input() arrayFromParent = [];
  constructor() {}

  ngOnInit() {}

  convertObjKrishna(hhh) {
    return Object.values(hhh);
  }
}
