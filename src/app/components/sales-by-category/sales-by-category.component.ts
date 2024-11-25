import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrl: './sales-by-category.component.scss'
})
export class SalesByCategoryComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  chart!:any

  ngOnInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.chart = new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Category Wise Sales'
        },
        xAxis:{
          categories:[
            'Electronics','Geoceries','Cosmetics','Clothes','Applications'
          ]
        },
        yAxis:{
          title:{
            text: 'Revenue in %'
          }
        },
        series:[
          {
            name:'Ohio',
            type:'pie',
            color:'#044342',
            data:[
              {
                name:'Electronics',
                y: 41.0,
                color:'#044342',
              },
              {
                name:'Clothes',
                y: 15.5,
                color:'#6920fb',
              },
              {
                name:'Applications',
                y: 3.5,
                color:'#121212',
              },
              {
                name:'Cosmetics',
                y: 6.5,
                color:'#ed9e20',
              },
              {
                name:'Geoceries',
                y: 22,
                color:'#09c',
              }
            ]
          }
        ],
        credits:{
          enabled: false
        }
      });
    }
  }
}
