import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { Sidebar } from "./layout/sidebar/sidebar";
import { Exo01ProfilStatique } from "./features/exercices/exo01-profil-statique/exo01-profil-statique";
import { demo01Interpolation } from "./features/demonstration/demo01-interpolation/demo01-interpolation";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Sidebar, Exo01ProfilStatique, demo01Interpolation],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('demo_angular');
}
