import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Livre } from '../model/livre.model';
import { LivreServiceService } from '../livre-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {




  livreForm?:FormGroup;
  livreObs$!:Observable<Livre>;
  livre!:Livre;
  id!:number

  constructor(private formBuilder:FormBuilder, private ls:LivreServiceService, private ar:ActivatedRoute, private route:Router){
    this.id =  ar.snapshot.params["id"];
   }


  ngOnInit(): void {
    

this.ls.GetLivre(this.id).subscribe(livre => {
console.log(livre)
  this.livreForm = this.formBuilder.group({

isbnlivre:[livre.isbnlivre, [Validators.required]],
titre:[livre.titre],
auteur:[livre.auteur],
datePublication:[livre.datePublication]

  })

}

)
  }


  updateLivre()
  {

  
    this.ls.ModifierLivre(this.livreForm?.value).subscribe();

    this.route.navigateByUrl("LivreRestControl/getListeLivres")
  }






}
