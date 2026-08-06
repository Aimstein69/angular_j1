import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';

@Component({
  selector: 'app-demo01-interpolation',
  imports: [],
  templateUrl: './demo01-interpolation.html',
  styleUrls: ['./demo01-interpolation.css'],
})
export class demo01Interpolation implements OnInit {
maVariable1: string = "lucas";
mavairable2:number = 15;
maVariable3: number = 1.5;
maVariable4: boolean = true;
maVariable5: Date = new Date();

maVariable6!:{name:string, price:number};

maVariableUser: User = {
email: "lucas@yooo.com",
lastname:"mabiche",
firstname:"bambi",
birthdate: new Date("2001-01-01")
};
constructor(){}
  ngOnInit(): void {
    this.maVariable6 = {name : "souris gaming", price:59.99};
  }
}
