import React from 'react'
import {
  Card,
  CardHeader,
  Typography
} from '@mui/material'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      series: [2, 1, 1, 1, 1, 1],
      options: {
        chart: {width: 380},
        labels: ['Escoliose', 'Fraturas', 'Artrose', 'Luxações', 'Osteoporose', 'Dor ciática'],
      },
    };
  }

  render() {
    return (
      <Card id='chart'>
        <CardHeader title="Atendimento por patologia"/>

        <Typography variant='h5'></Typography>
        
        <ReactApexChart
          options = { this.state.options }
          series = { this.state.series }
          type = 'pie'
          width = { 420 }
          height = { 400 }/>
      </Card>
    )
  }
}

export default ApexChart