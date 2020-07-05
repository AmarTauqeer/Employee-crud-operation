import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <!---------header---------->
    <app-header></app-header>
    <!---------main---------->
    <router-outlet></router-outlet>
    <!---------footer---------->`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-app';
}
