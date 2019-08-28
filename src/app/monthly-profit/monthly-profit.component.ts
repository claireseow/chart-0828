import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../../multiYearLaptopSales'


@Component({
  selector: 'app-monthly-profit',
  templateUrl: './monthly-profit.component.html',
  styleUrls: ['./monthly-profit.component.css']
})

export class MonthlyProfitComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];
  
  constructor() { }

  ngOnInit() {
    let salesData = data
    let tempDataStore = {}

    for(let transaction of salesData){
      const model = transaction.model
      var date = new Date(transaction.transactionDate);
      var month = date.getMonth(); 
      const profit = (transaction.salesPrice - transaction.cost)*transaction.monthSold;
      
      if(tempDataStore[month]){
        if(tempDataStore[month][model]){
          // if model is found increase count by one
          tempDataStore[month][model] += profit           
        } else {
          // if model not found in year, set as 1
          tempDataStore[month][model] = profit
        }
      } else {
        // create an empty object for that year and set count for model as 1
        tempDataStore[month] = {}
        tempDataStore[month][model] = profit
      }
    }


    let modelSalesCount = {}
    for(const month in tempDataStore){
      this.barChartLabels.push(month)
       for(let model in tempDataStore[month]){
        if(modelSalesCount[model]){
          modelSalesCount[model].push(tempDataStore[month][model])
        } else {
          modelSalesCount[model]= [tempDataStore[month][model]]
        }
      }
    }
        

    for(let model in modelSalesCount){
      this.barChartData.push
      (
        {data: modelSalesCount[model], label: model}
      )
    }
   } 
      }

   
