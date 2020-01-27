import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  // Step 3:
  message = "I am From Parent";

  objParent = {
    fname: "Murali",
    lname: "Krishna"
  };
  arrayParent = [
    {
      fname: "Nichole",
      lname: "Winder",
      tel: "(999)147-9919",
      address: "5907 Eros St",
      city: "Winston Salem",
      state: "IN",
      zip: 80436
    },
    {
      fname: "Shannon",
      lname: "Slocum",
      tel: "(502)291-6071",
      address: "7933 Augue Rd",
      city: "Evanston",
      state: "ND",
      zip: 36589
    },
    {
      fname: "Arturo",
      lname: "Balasubramanian",
      tel: "(631)339-9975",
      address: "4173 Magna Dr",
      city: "Denver",
      state: "MI",
      zip: 24877
    },
    {
      fname: "Raphael",
      lname: "Souther",
      tel: "(111)007-0755",
      address: "7384 Neque Ln",
      city: "Seaside",
      state: "NJ",
      zip: 56956
    },
    {
      fname: "Ian",
      lname: "Logsden",
      tel: "(783)375-3218",
      address: "9523 Fringilla Rd",
      city: "Jersey Shore",
      state: "IL",
      zip: 85649
    }
  ];
  constructor() {}

  ngOnInit() {}
}
