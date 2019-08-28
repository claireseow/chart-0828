import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../../gists'


@Component({
  selector: 'app-bar-tags',
  templateUrl: './bar-tags.component.html',
  styleUrls: ['./bar-tags.component.css']
})

export class BarTagsComponent implements OnInit {
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    let tagsData = data
    let tempDataStore = {}

    for(let transaction of tagsData){
      const t = transaction.tags
      const L = transaction.likes

      var date = new Date(transaction.dateAdded);
      var month = date.getMonth(); 
      
      if(tempDataStore[month]){
        if(tempDataStore[month][t]){
          // if model is found increase count by one
          tempDataStore[month][t] += L           
        } else {
          // if model not found in year, set as 1
          tempDataStore[month][t] = L
        }
      } else {
        // create an empty object for that year and set count for model as 1
        tempDataStore[month] = {}
        tempDataStore[month][t] = L
      }
    }

    let tagsCount = {}
    for(const month in tempDataStore){
      this.barChartLabels.push(month)
       for(let t in tempDataStore[month]){
        if(tagsCount[t]){
          tagsCount[t].push(tempDataStore[month][t])
        } else {
          tagsCount[t]= [tempDataStore[month][t]]
        }
      }
    }
        

    for(let t in tagsCount){
      this.barChartData.push
      ( {data: tagsCount[t], label: t}
      )
    }
   } 
      }

   
