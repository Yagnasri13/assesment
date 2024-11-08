import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
// import { RouterOutlet } from '@angular/router';
// import { ChartModule } from 'primeng/chart';
// import Chart, { registerables } from 'chart.js/auto';Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  // standalone: true,
  // imports: [RouterOutlet, ChartModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
  chart:any
  data = {
    // labels: ['A', 'B', 'C'],
    datasets: [
        {
            data: [11, 20, 33, 22,14],
            backgroundColor: [
              "rgb(90, 156, 214)",
              "rgb(237, 125, 50)",
              "rgb(166, 166, 166)",
              "rgb(255, 191, 0)",
              "rgb(69, 116, 196)",
            ],

        }
    ]
};

chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
    plugins: {
        legend: {
            labels: {
                color: '#495057',
                render: 'percentage',
                precision: 2,
            }
        }
    }
}
createChart(){
  this.chart = new Chart("MyChart", {
    type: 'bar', //this denotes tha type of chart

    data: {// values on X-Axis
      labels: ['Person1', 'Person2', 'Person3','Person4', 'Person5' ], 
         datasets: [
        {
          label: "persons",
          data: ['5','8', '12', '7', '4',],
          backgroundColor: 'rgb(47, 85, 150)'
        },
        
      ]
    },
    options: {
      // aspectRatio:2.5
    }

  });
}
ngOnInit(){
  this.createChart();
}



}
