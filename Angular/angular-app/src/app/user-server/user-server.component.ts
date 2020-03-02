import { Component, OnInit } from "@angular/core";
import { UserServerService } from "../user-server.service";

@Component({
  selector: "app-user-server",
  templateUrl: "./user-server.component.html",
  styleUrls: ["./user-server.component.css"]
})
export class UserServerComponent implements OnInit {
  isEdit: boolean = false;
  constructor(private userServer: UserServerService) {}
  users: any = [];
  user = {};
  ngOnInit() {
    this.getUsers();
  }
  addUser(myForm) {
    this.userServer.createUser(myForm.value).subscribe(res => {
      this.getUsers();
      myForm.reset();
    });
  }

  getUsers() {
    this.userServer.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  deleteUser(user) {
    this.userServer.deleteUser(user).subscribe(res => {
      this.getUsers();
    });
  }

  editUser(user) {
    this.isEdit = true;
    this.user = Object.assign({}, user);
  }

  updateUser(myForm) {
    this.userServer.updateUser(this.user).subscribe(res => {
      this.getUsers();
      myForm.reset();
      this.isEdit = false;
    });
  }
}
