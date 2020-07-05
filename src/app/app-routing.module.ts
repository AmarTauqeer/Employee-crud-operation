import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';

import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './pages/employee/employee.component';

import { EditComponent } from './pages/employee/edit/edit.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'employee/add/:id', component: EditComponent },
  { path: 'employee/edit/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
