import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import data from '../../gists'

interface UserComplicatedData {
  id: string
  tags: [];
}

@Component({
  selector: 'app-pie-tag',
  templateUrl: './pie-tag.component.html',
  styleUrls: ['./pie-tag.component.css']
})

export class PieTagComponent implements OnInit {
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
 
  constructor() { }

  ngOnInit() {
    const tagData = data
    let likes = {}
    for(const x of tagData){
      
      for( const tag of x.tags){
        if (likes[tag]) {
          // if movie already checked, increment by 1
          likes[tag] += 1
        } else {
          // if movie not yet checked, set to 1
          likes[tag] = 1
        }
      }
    }

    for (const key in likes) {
      this.pieChartLabels.push(key)
      const numLikes = likes[key]
      this.pieChartData.push(numLikes)
    }
    
  }
  }
