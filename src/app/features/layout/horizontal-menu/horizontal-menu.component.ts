import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Labosi',
          items: [
            {
              label: 'Prvi labos', 
              icon: 'pi pi-fw pi-desktop',
              routerLink: ['prvi-labos']
            },
            {
              label: 'Drugi labos', 
              icon: 'pi pi-fw pi-desktop',
              routerLink: ['drugi-labos']
            },
          ]
      },
  ];
  }

}
