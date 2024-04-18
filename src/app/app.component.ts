import { Component } from '@angular/core';
import { FooterComponent }  from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterOutlet

  ]
})
export class AppComponent {
}
