import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  loggedIn = true;
  title = "remvoice";
  login = { email: "", password: "" };
  constructor(public auth: AuthService) {}
  doLogin() {
    console.log(this.login);
  }
}
