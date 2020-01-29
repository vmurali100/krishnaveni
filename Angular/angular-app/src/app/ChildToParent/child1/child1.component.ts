import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
  styleUrls: ["./child1.component.css"]
})
export class Child1Component implements OnInit {
  // Creating a Custom Event Handler With Event Emitter Class
  @Output() sendData = new EventEmitter();
  @Output() sendObj = new EventEmitter();
  @Output() sendArr = new EventEmitter();
  // Step 1:
  message = "Message from Child Component";
  obj = {
    fname: "Murali"
  };
  arr = ["Ram", "Ravi", "Kiran"];
  constructor() {}

  ngOnInit() {}

  // Step 2:
  sendMessageToParent() {
    this.sendData.emit(this.message);
  }

  sendObjToParent() {
    this.sendObj.emit(this.obj);
  }

  sendArray() {
    this.sendArr.emit(this.arr);
  }
}
