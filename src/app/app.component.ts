import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./module/section/header/header.component";
import { ButtonModule } from 'primeng/button';
import { VisionComponent } from "./module/section/vision/vision.component";
import { HowWeAreComponent } from "./module/section/how-we-are/how-we-are.component";
import { ServicesComponent } from "./module/section/services/services.component";
import { ContactUsComponent } from "./module/section/contact-us/contact-us.component";
import { FooterComponent } from "./module/section/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ButtonModule, VisionComponent, HowWeAreComponent, ServicesComponent, ContactUsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
}
