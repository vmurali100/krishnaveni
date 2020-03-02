import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user = {
    fname: "",
    lname: ""
  };
  users = [];
  index: any;
  constructor() {}

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"));
  }

  addUser(userForm) {
    this.users.push(userForm.value);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  deleteUse(i) {
    this.users.splice(i, 1);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  editUser(i) {
    this.index = i;
    this.user = Object.assign({}, this.users[this.index]);
  }
  updateUser() {
    this.users[this.index] = this.user;
    localStorage.setItem("users", JSON.stringify(this.users));
  }
}
