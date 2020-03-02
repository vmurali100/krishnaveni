import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailsComponent } from "./user-details/user-details.component";

const krishnaRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(krishnaRoutes)],
  exports: [RouterModule]
})
export class KrishnaRoutingModule {}
