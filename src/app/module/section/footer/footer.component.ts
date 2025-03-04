import { Component, HostListener } from '@angular/core';

const dataIcon = [
  {
    img: 'assets/Icone/face.png',
    a: 'https://www.facebook.com/britoeassociados.brito'
  },
  {
    img: 'assets/Icone/insta.png',
    a: 'https://www.instagram.com/britoeassociados/'
  },
  {
    img: 'assets/Icone/linkedin.png',
    a: 'https://www.linkedin.com/company/brito-associados/'
  }
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent {
  readonly data = dataIcon;
  isDesktop: boolean = true

  trackByIndex(index: number): number {
    return index;
  }

  @HostListener('window:resize', ['$event'])
    onResize() {
      this.isDesktop = window.innerWidth < 1000 ? false: true;
    }
  
}
