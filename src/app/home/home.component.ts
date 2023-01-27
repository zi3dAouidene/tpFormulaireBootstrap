import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  etudiant:IEtudiant={
    nom:"",
    prenom:"",
    email:"",
    dateNaissance:"",
  }
  list:IEtudiant[]=[]

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  save(etudiant:IEtudiant){
    this.list.push(etudiant);
    this.dataService.etudiants.push(etudiant);
    this.etudiant={
      nom:"",
      prenom:"",
      email:"",
      dateNaissance:"",
    };
    this.router.navigate(['list']);
  }
}


export interface IEtudiant {
  nom:string;
  prenom:string;
  email:string;
  dateNaissance:string;
}