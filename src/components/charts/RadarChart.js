import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveRadar } from '@nivo/radar';
const colors = require('./ChartColors.js');

const data = [
  {
    "attribute": "Attribute 1",
    "Category 1": 64,
    "Category 2": 73,
    "Category 3": 57
  },
  {
    "attribute": "Attribute 2",
    "Category 1": 20,
    "Category 2": 94,
    "Category 3": 102
  },
  {
    "attribute": "Attribute 3",
    "Category 1": 41,
    "Category 2": 21,
    "Category 3": 106
  },
  {
    "attribute": "Attribute 4",
    "Category 1": 53,
    "Category 2": 78,
    "Category 3": 105
  },
  {
    "attribute": "Attribute 5",
    "Category 1": 86,
    "Category 2": 39,
    "Category 3": 48
  }
]

class RadarChart extends Component {
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
    <ResponsiveRadar
        data={data}
        keys={[ 'Category 1', 'Category 2', 'Category 3' ]}
        indexBy="attribute"
        maxValue="auto"
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderWidth={2}
        borderColor={{ from: 'color' }}
        gridLevels={5}
        gridShape="circular"
        gridLabelOffset={36}
        enableDots={true}
        dotSize={10}
        dotBorderWidth={2}
        dotBorderColor={{ from: 'color' }}
        enableDotLabel={false}
        colors={colors[this.state.colorScale]}
        blendMode="multiply"
        enableLabel={false}
        isInteractive={false}
        legends={[
          {
            anchor: 'top-left',
            direction: 'column',
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: '#999',
            symbolSize: 12,
            symbolShape: 'circle',
          }
        ]}
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

export default RadarChart;
