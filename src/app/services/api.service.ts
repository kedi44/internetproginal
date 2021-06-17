

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Kategori } from '../models/Kategori';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  product() {
    throw new Error('Method not implemented.');
  }
  KategoriDuzenle(kayit: Kategori) {
    throw new Error('Method not implemented.');
  }
  apiUrl = "http://localhost:44367";

  constructor(
    public http: HttpClient
  ) { }
  tokenAl(customername: string, parola: string) {
    var data = "username=" + customername + "customerpassword" + parola + "&grant_type=password";
    var reqHeader = new HttpHeaders({ "Content-Type": "application/x-www-form-urlencoded" });
    return this.http.post(this.apiUrl + "/token", data, { headers: reqHeader });
  }
  oturumKontrol() {
    if (localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
  /* Oturum İşlemleri Bitiş */


  /*  API */


  gameid(AddProduct: number) {
    return this.http.get(this.apiUrl + "gameid/" + AddProduct);
  }
  LicenseNumber(lıcensenumber: number) {
    return this.http.get(this.apiUrl + "/lıcensenumber/" + lıcensenumber);
  }
  KategoriListe() {
    return this.http.get(this.apiUrl + "/getproduct")
  }
  KategoriEkle(kat: Kategori) {
    return this.http.post(this.apiUrl + "/addproduct", this.gameid);
  }
  KategoriSil(katId: number) {
    return this.http.delete(this.apiUrl + "/deleteproduct/" + this.gameid);
  }


  
}
