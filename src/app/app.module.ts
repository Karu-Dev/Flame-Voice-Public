import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { CoreModule } from "./core/core.module";
import { SessionComponent } from "./session/session.component";
import { MyInfoComponent } from "./my-info/my-info.component";

@NgModule({
  declarations: [AppComponent, SessionComponent, MyInfoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //AngularFireModule.initializeApp(), API KEY GOES HERE
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
