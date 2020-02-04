import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./ParentToChild/parent/parent.component";
import { ChildComponent } from "./ParentToChild/child/child.component";
import { Parent1Component } from "./ChildToParent/parent1/parent1.component";
import { Child1Component } from "./ChildToParent/child1/child1.component";
import { Comp1Component } from "./SiblingComponents/comp1/comp1.component";
import { Comp2Component } from "./SiblingComponents/comp2/comp2.component";
import { UserComponent } from "./user/user.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Comp1Component,
    Comp2Component,
    UserComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
