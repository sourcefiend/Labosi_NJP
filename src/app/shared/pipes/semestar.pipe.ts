import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'semestar',
  pure: false
})
export class SemestarPipe implements PipeTransform {

  transform(students: any[], semestarFilterValue: any): any {
    let filteredStudents: any[] = [];

    if (students == undefined || !(Array.isArray(students))) return undefined;

    filteredStudents = students.map(student => {
      student.semestar = Math.ceil(student.ects / 30)
      return student;
    })

    if (semestarFilterValue) {
      return filteredStudents.filter(student => student.semestar == semestarFilterValue);
    } else {
      return filteredStudents;
    }
  }

}
