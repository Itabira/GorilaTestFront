import { HttpService } from './../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrls: ['./new-investment.component.css']
})
export class NewInvestmentComponent implements OnInit {


  transaction_type: string;
  date: Date;
  value: number;
  checkButton: boolean = true;
  
  constructor(private http:HttpService,
    private dialogRef: MatDialogRef<NewInvestmentComponent>) { }

  ngOnInit(): void {
  }

  checkData(){
    if (this.transaction_type == undefined || this.transaction_type == null){
      this.checkButton = true;
      return;
    }
    else if (this.date == undefined || this.date == null){
      this.checkButton = true;
      return;
    }
    else if (this.value == undefined || this.value == null){
      this.checkButton = true;
      return;
    }
    else{
      this.checkButton = false;
      return;
    }
  }

  saveInvestment(){
    let data = {
      transaction_type: this.transaction_type,
      date: (new Date(this.date)).toISOString(),
      value: this.value
    }
    this.http.postInvestment(data).then(
      res => {
          this.dialogRef.close(true);
      }
    )
  }


}
