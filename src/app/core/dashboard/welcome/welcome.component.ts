import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CommonModule } from '@angular/common';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { TranslateService } from '@ngx-translate/core';

echarts.use([BarChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer, TitleComponent, LineChart]);

type DataT = {
  name: string;
  value: [string, number];
};

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  options!: echarts.EChartsCoreOption;
  updateOptions!: echarts.EChartsCoreOption;

  private oneDay = 24 * 3600 * 1000;
  private now?: Date;
  private value?: number;
  private data?: DataT[];
  private timer: any;
  private translate: TranslateService = inject(TranslateService);

  public ngOnInit(): void {
    // generate some random testing data:
    this.data = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

    // initialize chart options:
    this.options = {
      title: {
        text: this.translate.instant('welcome.title'),
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params: any) => {
          params = params[0];
          const date = new Date(params.name);
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Mocking Data',
          type: 'line',
          showSymbol: false,
          data: this.data,
        },
      ],
    };

    // Mock dynamic data:
    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data?.shift();
        this.data?.push(this.randomData());
      }

      // update series data:
      this.updateOptions = {
        series: [
          {
            data: this.data,
          },
        ],
      };
    }, 1000);
  }

  public ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  public randomData(): DataT {
    this.now = new Date(this.now!.getTime() + this.oneDay);
    this.value = this.value! + Math.random() * 21 - 10;
    return {
      name: this.now.toString(),
      value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)],
    };
  }
}
