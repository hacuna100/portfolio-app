import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    NgbModule, 
    NavbarComponent, 
    HomeComponent,
    AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
