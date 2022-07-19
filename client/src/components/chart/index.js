import React, { useEffect } from 'react'
import {
  CardHeader,
  Paper
} from '@mui/material'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [2, 1, 1, 1, 1, 1],
      options: {
        chart: {
          width: 380
        },
        labels: ['Escoliose', 'Fraturas', 'Artrose', 'Luxações', 'Osteoporose', 'Dor ciática'],
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