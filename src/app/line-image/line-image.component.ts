import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';
import data from '../../gists'

@Component({
  selector: 'app-line-image',
  templateUrl: './line-image.component.html',
  styleUrls: ['./line-image.component.css']
})
export class LineImageComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';
  
  constructor() { }

  ngOnInit() {
    let salesData = data
    let likes = {}

    for(let transaction of salesData){
      const image = transaction.url
      var date = new Date(transaction.addedDate);
      var month = date.getMonth();    
     
      if (likes[image]) {
        // if movie already checked, increment by 1
        likes[image] += 1
      } else {
        // if movie not yet checked, set to 1
        likes[image] = 1
      }
    }
      
    let modelSalesCount = {}
    for(const month in likes){
      this.lineChartLabels.push(month)
       for(let image in likes[month]){
        if(modelSalesCount[image]){
          modelSalesCount[image].push(likes[month][Image])
        } else {
          modelSalesCount[image]= [likes[month][image]]
        }
      }
    }
     
      
    for(let image in modelSalesCount){
      this.lineChartData.push
      (
        {data: modelSalesCount[image]}
      )
    }
   } 

   } 
