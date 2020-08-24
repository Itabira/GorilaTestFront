import { HttpLoginService } from './../../services/http-login.service';
import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  constructor(public httpService: HttpLoginService, public router: Router ) { }

  ngOnInit(): void {
  }

  login(){
    email : this.email;
    password : this.password;
    console.log(this.email);
    this.httpService.signIn(this.email,this.password)
    .then((result:any) => {
      localStorage.setItem('user',JSON.stringify(result.user));
      console.log(result);
      this.router.navigate(['/dashboard']);
    }).catch((error) => {
      window.alert(error.message)
    })
    
  }

}
