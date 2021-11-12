import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prvi-labos-table-toolbar',
  templateUrl: './prvi-labos-table-toolbar.component.html',
  styleUrls: ['./prvi-labos-table-toolbar.component.scss']
})
export class PrviLabosTableToolbarComponent implements OnInit {

  value: boolean = false;
  years: Number[] = [];

  constructor() {
    for (let i = 0; i <= (new Date().getFullYear()) - 1888; i++) {
      this.years.push(i + 1888);
    }


  }

  ngOnInit(): void {
    console.log(this.years);
  }

}
