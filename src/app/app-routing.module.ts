import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivreComponentComponent } from './livre-component/livre-component.component';
import { FormulaireLivreComponent } from './formulaire-livre/formulaire-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

const routes: Routes = [
  {path:"LivreRestControl/getListeLivres", component:LivreComponentComponent},

  {path: "LivreRestControl/ajoutLivre", component: FormulaireLivreComponent},


  {path: "LivreRestControl/updateLivre/:id", component: UpdateLivreComponent},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
