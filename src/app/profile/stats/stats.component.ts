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
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { storageService } from 'src/app/storage.service';

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
  public starOptions!: DonaOptions;

  @ViewChild("ocupation") ocupation!: ChartComponent;
  public ocupationOptions!: DonaOptions;

  @ViewChild("tartment") tratment!: ChartComponent;
  public TratmentsOptions!: DonaOptions;

  @ViewChild("ages") ages!: ChartComponent;
  public agesOptions!: AgesOptions;

  @ViewChild("patients") patients!: ChartComponent;
  public patientsOptions!: patientsOptions;

  @ViewChild("cancel") cancel!: ChartComponent;
  public cancelOptions!: ChartOptions;

  @ViewChild("schedules") schedules!: ChartComponent;
  public schedulesOptions!: patientsOptions;

  doctor: number;
  year: number;
  month: string;

  constructor(private http: HttpClient, private storage: storageService) {
    this.doctor = this.storage.getDataItem('user');
    const fecha = new Date();
    this.year = fecha.getFullYear();
    this.month = (fecha.getMonth() + 1).toString().padStart(2, '0');
    this.initializeChartsWithDelay();
  }

  async initializeChartsWithDelay() {
    await this.initStarOptions();
    await this.delay(1000);
    await this.initTratmentsOptions();
    await this.delay(1000);
    await this.initOcupationOptions();
    await this.delay(1000);
    await this.initAgesOptions();
    await this.delay(1000);
    await this.initPatientsOptions();
    await this.delay(1000);
    await this.initSchedulesOptions();
    await this.delay(1000);
    await this.initCancelOptions();
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private initStarOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/calificacion?idDoctor=${this.doctor}`;

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            this.starOptions = {
              series: [response.comments[4][5], response.comments[3][4], response.comments[2][3], response.comments[1][2], response.comments[0][1]], 
              chart: { type: "donut" },
              labels: ["5 Estrellas", "4 Estrellas", "3 Estrellas", "2 Estrellas", "1 Estrellas"],
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: { width: 200 },
                    legend: { position: "bottom" }
                  }
                }
              ]
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initTratmentsOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/treatments?idDoctor=${this.doctor}&year=${this.year}&month=${this.month}`;
      let tratamientos: string[] = [];
      let cantidades: number[] = [];

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            for (const treatment of response.treatments) {
              tratamientos.push(treatment.tratamiento);
              cantidades.push(treatment.cantidad);
            }
            this.TratmentsOptions = {
              series: cantidades,
              chart: { type: "donut" },
              labels: tratamientos,
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: { width: 200 },
                    legend: { position: "bottom" }
                  }
                }
              ]
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initOcupationOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/used_dates?idDoctor=${this.doctor}`;

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            this.ocupationOptions = {
              series: [response.used_dates.ocupadas, response.used_dates.no_ocupadas],
              chart: { type: "donut" },
              labels: ["horarios ocupados", "horarios no ocupados"],
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    chart: { width: 200 },
                    legend: { position: "bottom" }
                  }
                }
              ]
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initAgesOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/ages?idDoctor=${this.doctor}&year=${this.year}&month=${this.month}`;

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            this.agesOptions = {
              series: [{ name: "", data: [
                response.age_ranges["100+"],
                response.age_ranges["90-99"],
                response.age_ranges["80-89"],
                response.age_ranges["70-79"],
                response.age_ranges["60-69"],
                response.age_ranges["50-59"],
                response.age_ranges["40-49"],
                response.age_ranges["30-39"],
                response.age_ranges["20-29"],
                response.age_ranges["10-19"],
                response.age_ranges["0-9"]
              ] }],
              chart: { type: "bar", height: 350 },
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
                "#F44F5E", "#E55A89", "#D863B1", "#CA6CD8",
                "#B57BED", "#8D95EB", "#62ACEA", "#4BC3E6"
              ],
              dataLabels: {
                enabled: true,
                formatter: (val, opt) => opt.w.globals.labels[opt.dataPointIndex],
                dropShadow: { enabled: true }
              },
              title: { text: "rangos de edades", align: "center" },
              xaxis: {
                categories: [
                  "100+", "90 - 100", "80 - 90 años", "70 - 80 años",
                  "60 - 70 años", "50 - 60 años", "40 - 50 años",
                  "30 - 40 años", "20 - 30 años", "10 - 20 años", "0 - 10 años"
                ]
              },
              legend: { show: false }
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initPatientsOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/attendance?idDoctor=${this.doctor}&year=${this.year}&month=${this.month}`;
      let fecha: string[] = [];
      let cantidades: number[] = [];

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            for (const treatment of response.dates) {
              fecha.push(treatment.fecha);
              cantidades.push(treatment.cantidad);
            }

            this.patientsOptions = {
              series: [{ name: "Atendidos", data: cantidades }],
              chart: { height: 350, type: "line", zoom: { enabled: false } },
              dataLabels: { enabled: false },
              stroke: { curve: "straight" },
              title: { text: "pacientes del mes", align: "left" },
              grid: {
                row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
              },
              xaxis: {
                categories: fecha
              }
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initCancelOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/canceladas-atendidas?idDoctor=${this.doctor}&year=${this.year}&month=${this.month}`;
      let fecha: string[] = [];
      let confirmadas: number[] = [];
      let canceladas: number[] = [];

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            console.log(response,"canceladas");
            for (const treatment of response.dates) {
              fecha.push(treatment.fecha);
              confirmadas.push(treatment.confirmadas);
              canceladas.push(treatment.canceladas);
            }

            this.cancelOptions = {
              series: [
                { name: "confirmadas", data: confirmadas },
                { name: "canceladas", data: canceladas },
              ],
              chart: { type: "bar", height: 350, stacked: true, toolbar: { show: true }, zoom: { enabled: true } },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    legend: { position: "bottom", offsetX: -10, offsetY: 0 }
                  }
                }
              ],
              plotOptions: { bar: { horizontal: false } },
              xaxis: { type: "category", categories: fecha },
              legend: { position: "right", offsetY: 40 },
              fill: { opacity: 1 },
              dataLabels: { enabled: true }
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }

  private initSchedulesOptions(): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = `${environment.apiUrl}/stats/used_hours?idDoctor=${this.doctor}`;
      let fecha: string[] = [];
      let cantidades: any[] = [];

      this.http.get(url).subscribe(
        (response: any) => {
          if (response) {
            console.log(response,"used hours");
            for (const [hour, count] of Object.entries(response.used_hours)) {
              fecha.push(hour);
              cantidades.push(count);
            }

            this.schedulesOptions = {
              series: [{ name: "Atendidos", data: cantidades }],
              chart: { height: 350, type: "line", zoom: { enabled: false } },
              dataLabels: { enabled: false },
              stroke: { curve: "straight" },
              title: { text: "pacientes del mes", align: "left" },
              grid: {
                row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 }
              },
              xaxis: {
                categories: fecha
              }
            };
            resolve();
          } else {
            console.error('Error:', response);
            reject(response);
          }
        },
        (error) => {
          console.error('Error:', error);
          reject(error);
        }
      );
    });
  }
}
