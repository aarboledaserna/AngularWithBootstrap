import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit{  

  data: any[]=[];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.llenarData();
  }

llenarData(){
  this.apiService.getData().subscribe(data => {
    this.data = data;
    console.log(this.data);
  });
  }
}

