import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsivePie } from '@nivo/pie';
const colors = require('./ChartColors.js');

const data = [
  {
    "id": "Category 1",
    "label": "Category 1",
    "value": 422,
  },
  {
    "id": "Category 2",
    "label": "Category 2",
    "value": 120,
  },
  {
    "id": "Category 3",
    "label": "Category 3",
    "value": 506,
  },
  {
    "id": "Category 4",
    "label": "Category 4",
    "value": 295,
  },
  {
    "id": "Category 5",
    "label": "Category 5",
    "value": 439,
  }
]

class PieChart extends Component {
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
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        colors={colors[this.state.colorScale]}
        radialLabelsSkipAngle={10}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 80,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 12,
            symbolShape: 'circle',
          }
        ]}
        enableSliceLabels={false}
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

export default PieChart;
