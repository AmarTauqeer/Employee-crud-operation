import { Injectable } from '@angular/core';
import { EmployeeComponent } from '../pages/employee/employee.component';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: 'Amar',
      email: 'amar.tauqeer@hotmail.com',
      phone: 68864133065,
    },
    {
      id: 2,
      name: 'Awais',
      email: 'Awais@hotmail.com',
      phone: 68864133066,
    },
  ];
  constructor() {}
  onGet() {
    return this.employees;
  }
  onGetEmployee(id: Number) {
    return this.employees.find((x) => x.id === id);
  }
  onAdd(employee: Employee) {
    this.employees.push(employee);
  }
  onUpdate(employee: Employee) {
    let oldEmployee = this.employees.find((x) => x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.email = employee.email;
    oldEmployee.phone = employee.phone;
  }

  onDelete(id: Number) {
    let employee = this.employees.find((x) => x.id === id);
    let index = this.employees.indexOf(employee, 0);

    // delete using splice function
    this.employees.splice(index, 1);
  }
}
