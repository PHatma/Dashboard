import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './top-three-products.component.html',
  styleUrl: './top-three-products.component.scss'
})
export class TopThreeProductsComponent {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  chart!:any

  ngOnInit(): void {
    if(isPlatformBrowser(this._PLATFORM_ID)){
      this.chart = new Chart({
        chart: {
          type: 'pie'
        },
        title: {
          text: 'Top Three Products'
        },
        xAxis:{
          categories:[
            'Lenova Thinkpad E15','Nectar Orange Juice','Axe Deodarant'
          ]
        },
        yAxis:{
          title:{
            text: ''
          }
        },
        series:[
          {
            type:'bar',
            showInLegend: false,
            data:[
              {
                name:'Lenova Thinkpad E15',
                y: 395,
                color:'#044342',
              },
              {
                name:'Nectar Orange Juice',
                y: 385,
                color:'#6920fb',
              },
              {
                name:'Axe Deodarant',
                y: 275,
                color:'#121212',
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
