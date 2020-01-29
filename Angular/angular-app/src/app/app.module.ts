import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./ParentToChild/parent/parent.component";
import { ChildComponent } from "./ParentToChild/child/child.component";
import { Parent1Component } from "./ChildToParent/parent1/parent1.component";
import { Child1Component } from "./ChildToParent/child1/child1.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
