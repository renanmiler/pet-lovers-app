import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apadrinhamento',
  templateUrl: './apadrinhamento.component.html',
  styleUrls: ['./apadrinhamento.component.scss']
})
export class ApadrinhamentoComponent implements OnInit {
  dogs: any = [];
  constructor() { }

  ngOnInit(): void {

    this.dogs = [
      {
        name: 'Thor',
        id: 1,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'https://i.ibb.co/1Tt4Gxp/116a304e-1a67-4d73-9734-f2fb04e644c0.jpg',
        visible: false
      },
      {
        name: 'Luna',
        id: 2,
        regiao: 'Rio de Janeiro, São Gonçalo',
        img:
          'https://i.ibb.co/h9Gyd6X/63b91991-4cf8-4946-a4d4-fdfa0c0d50fa.jpg',
        visible: false
      },
      {
        name: 'Chronos',
        id: 3,
        regiao: 'Rio de Janeiro, Itaborai',
        img:
          'https://www.hypeness.com.br/1/2020/07/Cachorros-podem-reconhecer-pessoas-n%C3%A3o-confi%C3%A1veis-foto-unsplash-3.jpg',
        visible: false
      },
      {
        name: 'Afrodite',
        id: 4,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2020/08/cachorro.jpg',
        visible: false
      },
      {
        name: 'Hercules',
        id: 5,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'https://www.petlove.com.br/dicas/wp-content/uploads/2018/05/maltes-lacinho.jpg',
        visible: false
        },
      {
        name: 'Hades',
        id: 6,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'http://www.olhoclinico.com.br/wp-content/uploads/2019/03/cegueira-em-caes.jpg',
        visible: false
        },
      {
        name: 'Ares',
        id: 7,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'https://catracalivre.com.br/wp-content/thumbnails/UpClSTyK1Ytj2hEejDy-ZXclLKI=/wp-content/uploads/2020/03/brown-and-white-dog-4633734-1920-910x607.jpg',
        visible: false
        },
      {
        name: 'Zeus',
        id: 8,
        regiao: 'Rio de Janeiro, São gonçalo',
        img:
          'https://conexaoplaneta.com.br/wp-content/uploads/2017/11/donos-cachorros-menos-chance-doencas-cardiovasculares-conexao-planeta.jpg',
           visible: false
        },
    ]
   
  };


}
