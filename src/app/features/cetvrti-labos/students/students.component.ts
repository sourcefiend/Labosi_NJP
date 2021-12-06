import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  public students: Student[];

  public semestarFilter!: number;
  
  constructor() { 
    this.students = [
      {
        ime: 'Marko',
        jmbag: '012345678',
        ects: 28,
        prosjek: 4.56
      },
      {
        ime: 'Pero',
        jmbag: '002244556',
        ects: 23,
        prosjek: 2.53
      },
      {
        ime: 'Darko',
        jmbag: '123456789',
        ects: 31,
        prosjek: 3.31
      },
      {
        ime: 'Tomo',
        jmbag: '900300600',
        ects: 150,
        prosjek: 1.5
      },
      {
        ime: 'Jakša',
        jmbag: '0345187892',
        ects: 29,
        prosjek: 4.75
      },
    ]
  }

  ngOnInit(): void {
    console.log(this.students);
  }

}
