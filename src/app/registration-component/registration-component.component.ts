import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {

  constructor(
    public apiServis: ApiService

  ) { }


  ngOnInit() {
  }
  OturumAc(customername: string, customerpassword: string) {
    this.apiServis.tokenAl(customername, customerpassword).subscribe((d: any) => {
      localStorage.setItem("token", d.access_token);
      localStorage.setItem("customerphonenumber", d.customerphonenumber);
      localStorage.setItem("customername", d.customername);
      localStorage.setItem("customerpassword", d.customerpassword);
      localStorage.setItem("customeradress", d.customeradress);

      location.href = "/";
    }, );
  }

}
