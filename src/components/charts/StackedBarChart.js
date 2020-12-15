import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveBar } from '@nivo/bar';
const colors = require('./ChartColors.js');

const data = [
  {
    id: "1",
    "Category": 83,
    "Category 2": 129,
    "Category 3": 74,
  },
  {
    id: "2",
    "Category": 83,
    "Category 2": 113,
    "Category 3": 131,
  },
  {
    id: "3",
    "Category": 36,
    "Category 2": 53,
    "Category 3": 191,
  },
  {
    id: "4",
    "Category": 54,
    "Category 2": 52,
    "Category 3": 177,
  },
  {
    id: "5",
    "Category": 13,
    "Category 2": 160,
    "Category 3": 188,
  },
  {
    id: "6",
    "Category": 128,
    "Category 2": 34,
    "Category 3": 6,
  },
];

class StackedBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: this.props.textColor,
      colorScale: this.props.colorScale,
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
      <ResponsiveBar
        data={data}
        keys={[ "Category", "Category 2", "Category 3" ]}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
          legendOffset: -40
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
          }
        ]}
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

export default StackedBarChart;
