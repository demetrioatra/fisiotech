import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import './index.css'

const data = [
  { patologia: '', area: 12 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 6 },
  { patologia: '', area: 5 },
];
export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper className='chartContainer'>
        <Chart
          data={chartData}
        >
          <Title
            text="Patologias atendidas"
          />
          <PieSeries
            valueField="area"
            argumentField="patologia"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
