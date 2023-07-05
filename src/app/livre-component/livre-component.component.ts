import { Component, OnInit } from '@angular/core';
import { LivreServiceService } from '../livre-service.service';
import { Observable } from 'rxjs';
import { Livre } from '../model/livre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livre-component',
  templateUrl: './livre-component.component.html',
  styleUrls: ['./livre-component.component.css']
})
export class LivreComponentComponent implements OnInit{

  listeL!:Observable<Livre[]>;


  constructor(private ls:LivreServiceService, private route:Router){

  }


  ngOnInit(): void {
    this.listeL=this.ls.ListeLivre();

    this.ls.ListeLivre().subscribe(data => {console.log(data)});
  }



  
  deleteLivre(id:number)
  {

    this.ls.DeleteLivre(id).subscribe();
  }

  
  updateLivre(id:number)
  {

    this.route.navigateByUrl("LivreRestControl/updateLivre/" + id);
  }


}
