import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, input, Output } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-navbar',
  imports: [FieldsetModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less'
})
export class NavbarComponent {
  @Input() isDesktop: boolean = true;
  @Input() openClose: boolean = false;
  @Output() closeNavbar = new EventEmitter<void>();

  close() {
    this.closeNavbar.emit(); 
  }
}
