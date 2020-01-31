import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  //Can receive Data from One side and Send to Other side
  receiveAndSend = new Subject();
  receiveAndSendObj = new Subject();
  receiveAndSendArr = new Subject();
  constructor() {}

  //Will reveive data from Comp1
  sendDataToComp2(data) {
    this.receiveAndSend.next(data);
  }

  sendObjToComp2(obj) {
    this.receiveAndSendObj.next(obj);
  }

  sendArrayToComp2(arr) {
    this.receiveAndSendArr.next(arr);
  }
}
