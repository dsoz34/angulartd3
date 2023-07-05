import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponentComponent } from './livre-component/livre-component.component';
import {HttpClientModule} from '@angular/common/http';
import { FormulaireLivreComponent } from './formulaire-livre/formulaire-livre.component'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateLivreComponent } from './update-livre/update-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponentComponent,
    FormulaireLivreComponent,
    UpdateLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
