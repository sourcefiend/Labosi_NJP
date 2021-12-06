import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  jmbag!: string;
  public students: Student[];
  public filteredStudents!: Student[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
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
    this.jmbag = this.route.snapshot.params['jmbag'];
    this.filteredStudents = this.students.filter(student => student.jmbag == this.jmbag)
  }

  back() {
    this.router.navigate(['../cetvrti-labos/']);
  }

}
