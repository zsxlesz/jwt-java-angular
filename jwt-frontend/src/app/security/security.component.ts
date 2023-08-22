import {Component, OnInit} from '@angular/core';
import {JwtClientService} from "../jwt-client.service";

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  authRequest:any={
    "userName":"javatechie",
    "password":"password"
  };

  response:any;

  constructor(private service:JwtClientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest: any){
    let resp=this.service.generateToken(authRequest);
    //resp.subscribe((data: any)=>this.accessApi(data));
    resp.subscribe((data: any)=>console.log('Token: ' + data));
  }


  public accessApi(token: string){
    let resp=this.service.welcome(token);
    resp.subscribe((data: any)=>this.response=data);
  }
}
