import React from 'react'
import {
  Paper
} from '@mui/material'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 13, 43, 10, 12],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Hérnia de disco', 'Escoliose', 'Fraturas', 'Artrose', 'Luxações', 'Osteoporose'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
  }

  render() {
    return (
      <Paper id = 'chart'>
        <ReactApexChart
        options = { this.state.options }
        series = { this.state.series }
        type = 'pie'
        width = { 420 }
        height = { 400 }/>
      </Paper>
    )
  }
}

export default ApexChart