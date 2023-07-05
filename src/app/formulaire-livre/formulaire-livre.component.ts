import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Livre } from '../model/livre.model';
import { Observable } from 'rxjs';
import { LivreServiceService } from '../livre-service.service';

@Component({
  selector: 'app-formulaire-livre',
  templateUrl: './formulaire-livre.component.html',
  styleUrls: ['./formulaire-livre.component.css']
})
export class FormulaireLivreComponent implements OnInit{
  
  
  livreForm!:FormGroup;
  livreObs$!:Observable<Livre>;
  livre!:Livre;

  constructor(private formBuilder:FormBuilder, private ls:LivreServiceService){}


  ngOnInit(): void {
    
this.livreForm = this.formBuilder.group(
{
// isbnlivre:[null],
titre:[null],
auteur:[null],
datePublication:[null]

});



  }



  saveLivre()
  {

    this.livre = this.livreForm.value;
    console.log(this.livre)
  
    this.ls.AjouterLivre(this.livre).subscribe();
  }
  



}
