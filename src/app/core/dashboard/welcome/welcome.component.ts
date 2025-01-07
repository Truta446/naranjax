import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { CommonModule } from '@angular/common';
import { BarChart, LineChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { TranslateService } from '@ngx-translate/core';
import { ChartData } from '../../../shared/models/chart/chart.model';

echarts.use([BarChart, GridComponent, TooltipComponent, LegendComponent, CanvasRenderer, TitleComponent, LineChart]);

@Component({
  selector: 'app-welcome',
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  providers: [provideEchartsCore({ echarts })],
})
export class WelcomeComponent implements OnInit, OnDestroy {
  public options!: echarts.EChartsCoreOption;
  public updateOptions!: echarts.EChartsCoreOption;

  private oneDay: number = 24 * 3600 * 1000;
  private now?: Date;
  private value?: number;
  private data?: ChartData[];
  private timer: any;
  private translate: TranslateService = inject(TranslateService);

  public ngOnInit(): void {
    this.data = [];
    this.now = new Date(1997, 9, 3);
    this.value = Math.random() * 1000;

    for (let i = 0; i < 1000; i++) {
      this.data.push(this.randomData());
    }

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

    this.timer = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        this.data?.shift();
        this.data?.push(this.randomData());
      }

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

  public randomData(): ChartData {
    this.now = new Date(this.now!.getTime() + this.oneDay);
    this.value = this.value! + Math.random() * 21 - 10;

    return {
      name: this.now.toString(),
      value: [[this.now.getFullYear(), this.now.getMonth() + 1, this.now.getDate()].join('/'), Math.round(this.value)],
    };
  }
}
