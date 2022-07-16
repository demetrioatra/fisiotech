import * as React from 'react';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Paper from '@mui/material/Paper';
import './index.css'

const data_pat = [
  { patologia: '', area: 12 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 7 },
  { patologia: '', area: 6 },
  { patologia: '', area: 5 },
];
const data_org = [
  { origem: "instagram", area: 5 },
  { origem: "facebook", area: 5 },
  { origem: "email", area: 5 },
  { origem: "recomendação", area: 5 },
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
      <>
        <Paper
        className = 'chartContainer'>
          <Chart
            data = { chartData }
          >
            <Title
              text = "Patologias atendidas"
            />
            <PieSeries
              valueField = "area"
              argumentField = "patologia"
            />
            <Animation />
          </Chart>
        </Paper>
        <Paper
        className = 'chartContainer'>
          <Chart
            data = { chartData1 }
          >
            <Title
              text = "Origem dos pacientes"
            />
            <PieSeries
              valueField = "area"
              argumentField = "origem"
              text = 'text'
            />
            <Animation />
          </Chart>
        </Paper>
      </>
    );
  }
}
