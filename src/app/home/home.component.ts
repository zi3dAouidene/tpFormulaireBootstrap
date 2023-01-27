import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  etudiant={}
  list=[]

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  save(etudiant){
    this.list.push(etudiant);
    this.dataService.etudiants.push(etudiant);
    this.etudiant={};
    this.router.navigate(['list']);
  }
}
