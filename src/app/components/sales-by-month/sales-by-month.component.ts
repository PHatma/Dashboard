import { isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-month.component.html',
  styleUrl: './sales-by-month.component.scss'
})
export class SalesByMonthComponent implements OnInit {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  chart!:any

  ngOnInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Month Wise Sales'
        },
        xAxis:{
          categories:[
            'Jun','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
          ]
        },
        yAxis:{
          title:{
            text: 'Revenue in $'
          }
        },
        series:[
          {
            name:'Ohio',
            type:'line',
            color:'#044342',
            data:[120,130,150,150,145,182,215,252,265,233,183,103]
          },
          {
            name:'Connecticut',
            type:'line',
            color:'#7e0505',
            data:[42,30,180,50,163,163,136,155,203,100,75,53]
          },
          {
            name:'Arizona',
            type:'line',
            color:'#ed9e20',
            data:[60,70,86,130,130,140,200,175,143,124,97,83]
          }
        ],
        credits:{
          enabled: false
        }
      });
    }
  }
}
