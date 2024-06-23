
import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent implements OnInit{

  data:any[]=[];
  datoApiRow: string[] = ['Nombre episodio1','nombre episodio 2' ];
  
  constructor(private apiservice: ApiService) {}
  ngOnInit(): void {
    this.llenarData ();
  }

  llenarData(){ 
    this.apiservice.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
    }
  
}
