
import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {
  constructor(
    public apiServis: ApiService,
  

    ) {

   }

  ngOnInit() {
  }
    OturumAc(customername: string, customerpassword: string) {
      this.apiServis.tokenAl(customername, customerpassword).subscribe((d: any) => {
        localStorage.setItem("token", d.access_token);
        localStorage.setItem("gameıd", d.gameıd);
        localStorage.setItem("gamename", d.gamename);
        location.href = "/";
      }, );
    }
}


