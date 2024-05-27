import { Component, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexStroke,
  ApexGrid,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexDataLabels,
  ApexLegend,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ChartComponent,
  ApexFill,
  ApexYAxis
} from "ng-apexcharts";


export type schedulesOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  colors: string[];
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
};
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
export type DonaOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
export type AgesOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type patientsOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  @ViewChild("star") star!: ChartComponent;
  public starOptions: DonaOptions;
  @ViewChild("ocupation") ocupation!: ChartComponent;
  public ocupationOptions: DonaOptions;
  @ViewChild("tartment") tratment!: ChartComponent;
  public TratmentsOptions: DonaOptions;
  @ViewChild("ages") ages!: ChartComponent;
  public agesOptions: AgesOptions;
  @ViewChild("patients") patients!: ChartComponent;
  public patientsOptions: patientsOptions;
  @ViewChild("cancel") cancel!: ChartComponent;
  public cancelOptions: ChartOptions;
  @ViewChild("schedules") schedules!: ChartComponent;
  public schedulesOptions: schedulesOptions;
  
  constructor() {
    this.starOptions = {
      series: [44, 55, 13, 43, 22],//---aqui asignas las estrellas en orden--------------------------------------------------------
      chart: {
        type: "donut"
      },
      labels: ["5 Estrellas", "4 Estrellas", "3 Estrellas", "2 Estrellas", "1 Estrellas"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.TratmentsOptions = {
      series: [50, 30, 15, 25, 35],//---aqui vas a recorrer las values----------------------------------------------------------------
      chart: {
        type: "donut"
      },
      labels: ["lavado", "puntos", "cocas", "tes", "maria "],//aqui vas a recorrer las keys----------------------------------------------------------------
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.ocupationOptions = {
      series: [44, 55, 13, 43, 22],//---aqui asignas las estrellas en orden--------------------------------------------------------
      chart: {
        type: "donut"
      },
      labels: ["5 Estrellas", "4 Estrellas", "3 Estrellas", "2 Estrellas", "1 Estrellas"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.agesOptions = {
      series: [
        {
          name: "",
          data: [200, 330, 548, 740, 880, 990, 1100, 1380]//aqui van los datos acomodados por rangos de mayor a menor---------------------------
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: "80%",
          isFunnel: true
        }
      },
      colors: [
        "#F44F5E",
        "#E55A89",
        "#D863B1",
        "#CA6CD8",
        "#B57BED",
        "#8D95EB",
        "#62ACEA",
        "#4BC3E6"
      ],
      dataLabels: {
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex];
        },
        dropShadow: {
          enabled: true
        }
      },
      title: {
        text: "Pyramid Chart",
        align: "center"
      },
      xaxis: {
        categories: [
          "mas de 70 años", "60 - 70 años", "50 - 60 años", "40 - 50 años", "30 - 40 años", "20 - 30 años", "10 - 20 años", "0 - 10 años"
        ]
      },
      legend: {
        show: false
      }
    };
    this.patientsOptions = {
      series: [
        {
          name: "Atendidos",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]// pacientes atendidos en ese dia--------------------------------------------------------
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Product Trends by Month",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [//dias--------------------------------------------------------
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };
    this.cancelOptions = {
      series: [
        {
          name: "PRODUCT A",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "PRODUCT B",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "PRODUCT C",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "PRODUCT D",
          data: [21, 7, 25, 13, 22, 8]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "01/2011",
          "02/2011",
          "03/2011",
          "04/2011",
          "05/2011",
          "06/2011"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      },
      dataLabels: {
        enabled: true
      }
    };
    this.schedulesOptions = {
      series: [
        {
          data: [
            {
              x: "2008",
              y: [2800, 4500]
            },
            {
              x: "2009",
              y: [3200, 4100]
            },
            {
              x: "2010",
              y: [2950, 7800]
            },
            {
              x: "2011",
              y: [3000, 4600]
            },
            {
              x: "2012",
              y: [3500, 4100]
            },
            {
              x: "2013",
              y: [4500, 6500]
            },
            {
              x: "2014",
              y: [4100, 5600]
            }
          ]
        }
      ],
      chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [["#008FFB", "#00E396"]]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: ["Product A", "Product B"]
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#00E396"],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: "on"
      },
      dataLabels: {
        enabled: true,
        formatter: function(val: number[], opts: any) {
          return `${val[0]} - ${val[1]}`;
        },
        style: {
          colors: ['#F3F4F5', '#fff']
        }
      },
      yaxis: {
        title: {
          text: "Value Range"
        }
      },
      colors: ["#008FFB", "#00E396"],
      title: {
        text: "Yearly Product Ranges",
        align: "center"
      }
    };
    
  }
}
