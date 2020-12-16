import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveBar } from '@nivo/bar';
const colors = require('./ChartColors.js');

let data = [
  {
    id: "1",
    value: 83,
  },
  {
    id: "2",
    value: 83,
  },
  {
    id: "3",
    value: 36,
  },
  {
    id: "4",
    value: 54,
  },
  {
    id: "5",
    value: 13,
  },
  {
    id: "6",
    value: 128,
  },
];

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: this.props.textColor,
      colorScale: this.props.colorScale,
      seriesScale: this.props.seriesScale,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      textColor: nextProps.textColor,
      colorScale: nextProps.colorScale,
      seriesScale: nextProps.seriesScale,
    });
  }

  render() {

    let displayData;
    if (this.state.seriesScale === 1) {
      displayData = data.slice(0, 1);
    } else if (this.state.seriesScale === 3) {
      displayData = data.slice(0, 3);
    } else if (this.state.seriesScale === 5) {
      displayData = data;
    }

    return (
    <>
      <ResponsiveBar
        data={displayData}
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        colors={colors[this.state.colorScale]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X-axis',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y-axis',
          legendPosition: 'middle',
          legendOffset: -40,
          symbolShape: 'circle',
        }}
        enableLabel={false}
        isInteractive={false}
        theme={{
          textColor: this.state.textColor,
          axis: {
            ticks: {
              line: {
                stroke: chroma(this.state.textColor).alpha(.2).hex()
              },
            },
          },
          grid: {
            line: {
              stroke: chroma(this.state.textColor).alpha(.2).hex()
            }
          }
        }}
      />
    </>
  );
  }
}

export default BarChart;
