import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  edudiants=[];
  constructor(private dataService:DataService) { 
      this.edudiants = this.dataService.etudiants;

  }

  ngOnInit(): void {
  }
  delete(e){
    this.dataService.etudiants.splice(e);
    this.edudiants.splice(e);
  }
}
