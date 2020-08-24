import { DialogConfirmComponent } from './../dialog-confirm/dialog-confirm.component';
import { NewInvestmentComponent } from './../new-investment/new-investment.component';
import { HttpService } from './../../services/http.service';
import { Component, OnInit, NgZone, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { width } from '@amcharts/amcharts4/.internal/core/utils/Utils';
import theme from '@amcharts/amcharts4/themes/animated';
import { has } from '@amcharts/amcharts4/.internal/core/utils/Array';



am4core.useTheme(am4themes_animated);

export interface Investments{
  id : number;
  transaction_type : string;
  date : Date;
  value : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: am4charts.PieChart;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'date', 'transaction_type', 'value', 'button'];
  dataSource : MatTableDataSource<Investments>;


  constructor(
    private zone: NgZone, 
    private http: HttpService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getInvestments()
  }

  ngAfterViewInit() {
    this.chartGenerate(0,0);
  }

  ngOnDestroy() {
    this.destroyChart();
  }


  getInvestments(){
    this.http.getInvestments().then(
      (res:any) => {
        let varIncome = 0;
        let fixIncome = 0;
        res.investments.forEach(element => {
          if(element.transaction_type == 'Fixed Income'){
            fixIncome += element.value;
          }
          else{
            varIncome += element.value;
          }
        });
        this.destroyChart();
        this.chartGenerate(varIncome,fixIncome);
        console.log(this.chart)
        this.dataSource = new MatTableDataSource(res.investments);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  newInvestment(){
      const dialogRef = this.dialog.open(NewInvestmentComponent,{
        width:"350px", 
        disableClose: false
      });
      dialogRef.afterClosed().subscribe(
        result => {
            if(result){
              this.getInvestments()
            };
      });
  }

  deleteInvestment(data){
    const dialogRef = this.dialog.open(DialogConfirmComponent,{
      width:"350px", 
      disableClose: false,
      data: data
    });
    dialogRef.afterClosed().subscribe(
      result => {
          if(result){
            this.http.deleteInvestiment(data.id).then(
              res =>{
                this.getInvestments()
              }
            )
          };
    });
  }

  chartGenerate(varIncome, fixIncome){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart);

      chart.paddingRight = 20;
      chart.data = [{
        "transaction_type": "Variable Income",
        "value": varIncome
      }, {
        "transaction_type": "Fixed Income",
        "value": fixIncome
      }];

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "transaction_type";

      // Let's cut a hole in our Pie chart the size of 40% the radius
      chart.innerRadius = am4core.percent(40);

      // Disable ticks and labels
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;

      // Disable tooltips
      pieSeries.slices.template.tooltipText = "";

      // Add a legend
      chart.legend = new am4charts.Legend();
      

      this.chart = chart;
    });
  }

  destroyChart(){
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
