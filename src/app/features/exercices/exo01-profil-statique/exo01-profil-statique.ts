import { Component } from '@angular/core';

@Component({
  selector: 'app-exo01-profil-statique',
  imports: [],
  templateUrl: './exo01-profil-statique.html',
  styleUrls: ['./exo01-profil-statique.css'],
})
export class Exo01ProfilStatique {
  email:string="lucas@email.com";
  lastname:string ="dqz";
  firstname: string= "lucas";
  birthdate: Date = new Date("2001-01-01");
  imageUrl: string ="https://tse3.mm.bing.net/th?id=OIP.J0si-UnVP8qHnDFXBr1HkwHaE8";
  gender: "M" | "F" = "M";
  languages: string[]=["français", "anglais","chinois","japonais"]
}
