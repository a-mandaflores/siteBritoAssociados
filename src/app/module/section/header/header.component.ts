import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less'
})
export class HeaderComponent {
  isDesktop: boolean = true;
  openNavBar: boolean = false

  @HostListener('window:resize', ['$event'])
      onResize() {
        this.isDesktop = window.innerWidth < 750 ? false: true;
        if (window.innerWidth > 750) {
          this.openNavBar = false;
        }
  }

  scrollToContact() {
    const section = document.getElementById('contato');
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  }
  
}
