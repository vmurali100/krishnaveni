import { Component, OnInit } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  allUsers: any;
  constructor(private userService: UsersService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe(res => {
      this.allUsers = res;
    });
  }
}
