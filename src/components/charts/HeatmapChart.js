import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveHeatMap } from '@nivo/heatmap';
const colors = require('./ChartColors.js');

const data = [
  {
    "country": "1",
    "Key 1": 78,
    "Key 2": 18,
    "Key 3": 26,
    "Key 4": 64,
    "Key 5": 71,
    "Key 6": 43,
    "Key 7": 85,
    "Key 8": 43,
    "Key 9": 32,
    "Key 10": 38,
  },
  {
    "country": "2",
    "Key 1": 49,
    "Key 2": 59,
    "Key 3": 61,
    "Key 4": 64,
    "Key 5": 90,
    "Key 6": 64,
    "Key 7": 50,
    "Key 8": 94,
    "Key 9": 30,
    "Key 10": 20,
  },
  {
    "country": "3",
    "Key 1": 66,
    "Key 2": 5,
    "Key 3": 18,
    "Key 4": 10,
    "Key 5": 44,
    "Key 6": 57,
    "Key 7": 95,
    "Key 8": 79,
    "Key 9": 70,
    "Key 10": 9,
  },
  {
    "country": "4",
    "Key 1": 70,
    "Key 2": 61,
    "Key 3": 17,
    "Key 4": 56,
    "Key 5": 53,
    "Key 6": 10,
    "Key 7": 71,
    "Key 8": 2,
    "Key 9": 89,
    "Key 10": 26,
  },
  {
    "country": "5",
    "Key 1": 16,
    "Key 2": 34,
    "Key 3": 89,
    "Key 4": 75,
    "Key 5": 98,
    "Key 6": 1,
    "Key 7": 84,
    "Key 8": 26,
    "Key 9": 38,
    "Key 10": 81,
  },
  {
    "country": "6",
    "Key 1": 46,
    "Key 2": 48,
    "Key 3": 57,
    "Key 4": 33,
    "Key 5": 93,
    "Key 6": 89,
    "Key 7": 1,
    "Key 8": 13,
    "Key 9": 32,
    "Key 10": 21,
  },
  {
    "country": "7",
    "Key 1": 9,
    "Key 2": 27,
    "Key 3": 30,
    "Key 4": 47,
    "Key 5": 19,
    "Key 6": 49,
    "Key 7": 86,
    "Key 8": 58,
    "Key 9": 76,
    "Key 10": 21,
  },
  {
    "country": "8",
    "Key 1": 40,
    "Key 2": 81,
    "Key 3": 52,
    "Key 4": 92,
    "Key 5": 99,
    "Key 6": 40,
    "Key 7": 81,
    "Key 8": 17,
    "Key 9": 76,
    "Key 10": 94,
  },
]

class HeatmapChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: this.props.textColor,
      colorScale: "sequentialBlue",
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      textColor: nextProps.textColor,
      colorScale: nextProps.colorScale,
    });
  }

  render() {
    return (
    <>
      <ResponsiveHeatMap
        data={data}
        keys={[
            'Key 1',
            'Key 2',
            'Key 3',
            'Key 4',
            'Key 5',
            'Key 6',
            'Key 7',
            'Key 8',
            'Key 9',
            'Key 10',
        ]}
        indexBy="country"
        colors={colors[this.state.colorScale]}
        margin={{ top: 50, right: 60, bottom: 60, left: 60 }}
        padding={2}
        axisTop={{ orient: 'top', tickSize: 5, tickPadding: 5, tickRotation: -90, legend: '', legendOffset: 36 }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y-axis',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        cellOpacity={1}
        cellBorderColor={{ from: 'color', modifiers: [ [ 'darker', 0.4 ] ] }}
        enableLabels={false}
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

export default HeatmapChart;
