import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';
import { ExpressService } from './../../service/express.service';


@Component({
  selector: 'app-express',
  templateUrl: './express.component.html',
  styleUrl: './express.component.css'
})
export class ExpressComponent implements OnInit{

  
    datoApiCol: any[]=[];
    datoApiRow: string[] = ['ID', 'Nombre', 'Apellido', 'Username'];
    data:any[]=[];
    ids: number[] = [];
    names: string[] = [];
    apellidos: string[] = [];
    usernames: string[] = [];

    //para get obkjeto2

    datoApiCol2: any[]=[];
    ids2: number[] = [];
    names2: string[] = [];
    apellidos2: string[] = [];
    usernames2: string[] = [];
    
    constructor(private expressservice: ExpressService, private apiservice:ApiService) {}
    ngOnInit(): void {
      this.llenarInfo();
      this.llenarInfo2()
    }
  
    llenarInfo(){
      this.expressservice.getObjeto().subscribe(info => {
        this.datoApiCol = info;
        this.ids = this.datoApiCol.map(item => item.id);
        this.names = this.datoApiCol.map(item => item.name);
        this.apellidos = this.datoApiCol.map(item => item.apellido || '');
        this.usernames = this.datoApiCol.map(item => item.username || '');
        console.log(this.datoApiCol);
        
      });
      }

    llenarInfo2(){
      this.expressservice.getObjeto2().subscribe(info2 => {
        this.datoApiCol2 = info2;
        this.ids2 = this.datoApiCol2.map(item => item.id);
        this.names2 = this.datoApiCol2.map(item => item.name);
        this.apellidos2 = this.datoApiCol2.map(item => item.apellido || '');
        this.usernames2 = this.datoApiCol2.map(item => item.username || '');
        console.log(this.datoApiCol2);
        });
        }
  

}
