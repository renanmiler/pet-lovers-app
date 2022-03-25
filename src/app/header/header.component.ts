import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  item: MenuItem[]

  constructor() {
    this.item =[{label : 'Home', icon : PrimeIcons.HOME },
                {label : 'Apadrinhamento', routerLink: '/Apadrinhamento'},
                {label : 'Doação'},
                {label : 'Perdidos'},
                {label : 'Serviços'}];
      }

  ngOnInit(): void {
  }

}
