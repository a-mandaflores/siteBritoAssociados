import { Component } from '@angular/core';

const dataHistory = [{
  img: 'assets/img/img-not.png',
  title: 'Quem somos',
  body: 'A Brito & Associados é uma empresa especializada em Consultoria, Auditoria e Desenvolvimento Profissional nas áreas de controladoria, contábil, tributária e fiscal, visando atender as necessidades dos seus clientes. <br/> Nosso trabalho consiste em diagnosticar, solucionar, planejar e acompanhar o desenvolvimento contábil da organização, obtendo o resultado esperado.'
},
{
  img: 'assets/img/history.jpg',
  title: 'Nossa história',
  body: 'Presente no mercado há 15 anos, ela é fruto de um grupo seleto de profissionais das mais diversas áreas que unem a larga experiência no mercado às modernas tecnologias, voltando às atenções à satisfação plena de seus clientes através da necessidade de inovar o mercado de prestação de serviços e o conceito de eficiência empresarial. <br/> Os resultados positivos obtidos com nosso trabalho consolidaram a BRITO & ASSOCIADOS numa posição de destaque nos segmentos que atua.'
}]


@Component({
  selector: 'app-how-we-are',
  standalone: true,
  imports: [],
  templateUrl: './how-we-are.component.html',
  styleUrl: './how-we-are.component.less'
})
export class HowWeAreComponent {
  data = dataHistory[0];
  index = 0;

  setInfo(idx: number) {
    this.index = idx;
    this.data = dataHistory[idx];
  }
}
