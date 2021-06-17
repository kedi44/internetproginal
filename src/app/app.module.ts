import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { AnaComponent } from './ana/ana.component';
import { KategoriComponent } from './components/kategori/kategori.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    AnaComponent,
    KategoriComponent
    

    

    
    
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    
    
    
  ],
  providers: [
    
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
