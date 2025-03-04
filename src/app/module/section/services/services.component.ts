import { Component, HostListener } from '@angular/core';

const dataServices = [
  {
    title: 'CONTABILIDADE AUDITORIA',
    text: 'Tratada como ferramenta indispensável no gerenciamento e tomadas de decisões. Proporcionar maior credibilidade às demonstrações financeiras para os usuários em geral.',
    img: 'assets/img/contabilidade.jpg'
  },
  {
    title: 'GESTÃO DE PESSOAL',
    text: 'O capital intelectual é o grande patrimônio que as empresas possuem.',
    img: 'assets/img/gestaoDePessoa.jpg'
  },
  {
    title: 'GESTÃO FISCAL E PLANEJAMENTO TRIBUTÁRIO',
    text: 'A opção pelo melhor sistema de tributação é fundamental em um mercado competitivo.',
    img: 'assets/img/consultoria.jpg'
  },
  {
    title: 'CONSULTORIA E ASSESSORIA EMPRESARIAL',
    text: 'Focar o futuro planejando cenários para sua empresa permite criar um ambiente de crescimento ordenado e seguro.',
    img: 'assets/img/consultoriaEGestao.jpg'
  },
  {
    title: 'OBRIGAÇÕES TRIBUTÁRIAS',
    text: 'Tratadas com toda a Importância que merece o tema, realizamos essas atividades com expertise e tecnologia, de forma subsidiária a Gestão Fiscal.',
    img: 'assets/img/services-img2.png'
  },
  {
    title: 'TREINAMENTOS EMPRESARIAIS',
    text: 'É competitiva a empresa que está atenta ao conhecimento, as novidades que interessam a seus parceiros internos e externos e as mudanças da legislação e do mercado em geral.',
    img: 'assets/img/services-img1.png'
  },
];

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.less'
})
export class ServicesComponent {
  readonly data = dataServices;
  startIndex = 0;
  itemsPerPage = 3;

  get visibleServices() {
    const totalItems = this.data.length;
    return Array.from({ length: this.itemsPerPage }, (_, i) => 
      this.data[(this.startIndex + i) % totalItems] 
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.itemsPerPage = 3;

    if(window.innerWidth < 500){
      this.itemsPerPage = 1;
      return
    }
  }

  next() {
    this.startIndex = (this.startIndex + 1) % this.data.length;
  }

  prev() {
    this.startIndex = (this.startIndex - 1 + this.data.length) % this.data.length;
  }
}
