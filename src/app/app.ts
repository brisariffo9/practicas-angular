import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Products } from './page/products/products';
import { Contact } from './page/contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,About,Home,Products,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nuevoproyecto');
}
