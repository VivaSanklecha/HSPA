import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{ LoginComponent } from './login/login.component';
import{PropertyListComponent} from './property-list/property-list.component';
import{NavBarComponent} from './nav-bar/nav-bar.component';
import{PropertyCardComponent} from './property/property-card/property-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,LoginComponent,PropertyListComponent,NavBarComponent,PropertyCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
}
