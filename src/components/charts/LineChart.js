import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveLine } from '@nivo/line';
const colors = require('./ChartColors.js');

const data = [
  {
    "id": "Category 1",
    "data": [
      {
        "x": "1",
        "y": 47
      },
      {
        "x": "2",
        "y": 276
      },
      {
        "x": "3",
        "y": 8
      },
      {
        "x": "4",
        "y": 156
      },
      {
        "x": "5",
        "y": 174
      },
      {
        "x": "6",
        "y": 284
      },
      {
        "x": "7",
        "y": 205
      },
    ]
  },
  {
    "id": "Category 2",
    "data": [
      {
        "x": "1",
        "y": 269
      },
      {
        "x": "2",
        "y": 109
      },
      {
        "x": "3",
        "y": 146
      },
      {
        "x": "4",
        "y": 157
      },
      {
        "x": "5",
        "y": 225
      },
      {
        "x": "6",
        "y": 248
      },
      {
        "x": "7",
        "y": 213
      },
    ]
  },
  {
    "id": "Category 3",
    "data": [
      {
        "x": "1",
        "y": 9
      },
      {
        "x": "2",
        "y": 185
      },
      {
        "x": "3",
        "y": 4
      },
      {
        "x": "4",
        "y": 236
      },
      {
        "x": "5",
        "y": 177
      },
      {
        "x": "6",
        "y": 73
      },
      {
        "x": "7",
        "y": 270
      },
    ]
  },
];

class LineChart extends Component {
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
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        colors={colors[this.state.colorScale]}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X-axis',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y-axis',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        pointSize={6}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
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

export default LineChart;
