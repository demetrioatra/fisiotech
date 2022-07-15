import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './index.css'
import { Grid } from '@mui/material';

const data_pat = [
  { patologia: '', area: 12 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 6 },
  { patologia: '', area: 5 },
];
const data_org = [
  {origem: "instagram", area: 5},
  {origem: "facebook", area: 5},
  {origem: "email", area: 5},
  {origem: "recomendação", area: 5},
];


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data_pat,
      data_org
    };
  }

  render() {
    const { data_pat: chartData } = this.state;
    const { data_org: chartData1 } = this.state;

    return (
      <Grid>
      <Paper className='chartContainer'>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="patologia"
            text='text'
          />
          <Title
            text="Patologias atendidas"
          />
          <Animation />
        </Chart>
      </Paper>
      <Paper className='chartContainer'>
        <Chart
          data={chartData1}
        >
          <PieSeries
            valueField="area"
            argumentField="origem"
            text='text'
          />
          <Title
            text="Origem dos pacientes"
          />
          <Animation />
        </Chart>
      </Paper>
      </Grid>
    );
  }
}
