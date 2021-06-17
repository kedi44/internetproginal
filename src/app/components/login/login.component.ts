import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public apiServis: ApiService

  ) { }


  ngOnInit() {
  }
  OturumAc(customername: string, customerpassword: string) {
    this.apiServis.tokenAl(customername, customerpassword).subscribe((d: any) => {
      localStorage.setItem("token", d.access_token);
      localStorage.setItem("customerıd", d.customerıd);
      localStorage.setItem("customername", d.customername);
      location.href = "/";
    }, );
  }
  }
