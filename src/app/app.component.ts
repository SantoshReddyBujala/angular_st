import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { MyNewModule } from "./modules/my-new/my-new.module";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, WelcomeComponent, MyNewModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "AngularSevenTeen";
  welcomeMsg = "Welcome Santosh!!!";
  receingMessage!: string;
  receiveMessage(message: any): void {
    console.log(message);
    this.receingMessage = message;
  }
}
