import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livre } from './model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreServiceService {

  constructor(private http:HttpClient) {}

ListeLivre(){
  return this.http.get<Livre[]>("http://localhost:8080/LivreRestControl/getListeLivres")
}

AjouterLivre(livre:Livre){

    return this.http.post<Livre>("http://localhost:8080/LivreRestControl/ajout", livre)

}

DeleteLivre(id:number){

  return this.http.delete<boolean>("http://localhost:8080/LivreRestControl/supprimer/" + id)

}


ModifierLivre(livre:Livre){

  return this.http.put<boolean>("http://localhost:8080/LivreRestControl/modifierLivre", livre)

}


GetLivre(id:number){

  return this.http.get<Livre>("http://localhost:8080/LivreRestControl/getLivre/" + id)

}



}
