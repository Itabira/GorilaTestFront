import { HttpLoginService } from './../../services/http-login.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-main_bar',
  templateUrl: './main_bar.component.html',
  styleUrls: ['./main_bar.component.css']
})
export class Main_barComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter();
  constructor( private httpLogin:HttpLoginService) { }

  ngOnInit() {
  }

  newInvestment(){
    this.newItemEvent.emit();
  }

  logout(){
    this.httpLogin.signOut()
  }

}
