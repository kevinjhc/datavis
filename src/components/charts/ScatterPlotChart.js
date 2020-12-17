import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
const colors = require('./ChartColors.js');

let data = [
  {
    "id": "Category 1",
    "data": [
      {
        "x": 31,
        "y": 26
      },
      {
        "x": 66,
        "y": 1
      },
      {
        "x": 76,
        "y": 11
      },
      {
        "x": 4,
        "y": 110
      },
      {
        "x": 5,
        "y": 68
      },
      {
        "x": 27,
        "y": 62
      },
      {
        "x": 8,
        "y": 86
      },
      {
        "x": 85,
        "y": 92
      },
      {
        "x": 95,
        "y": 113
      },
      {
        "x": 45,
        "y": 106
      },
      {
        "x": 60,
        "y": 50
      },
      {
        "x": 17,
        "y": 106
      },
      {
        "x": 82,
        "y": 97
      },
      {
        "x": 26,
        "y": 108
      },
      {
        "x": 50,
        "y": 81
      },
      {
        "x": 13,
        "y": 110
      },
      {
        "x": 100,
        "y": 12
      },
      {
        "x": 69,
        "y": 51
      },
      {
        "x": 25,
        "y": 55
      },
      {
        "x": 91,
        "y": 11
      },
      {
        "x": 47,
        "y": 17
      },
      {
        "x": 21,
        "y": 18
      },
      {
        "x": 58,
        "y": 103
      },
      {
        "x": 100,
        "y": 59
      },
    ]
  },
  {
    "id": "Category 2",
    "data": [
      {
        "x": 1,
        "y": 52
      },
      {
        "x": 44,
        "y": 100
      },
      {
        "x": 63,
        "y": 6
      },
      {
        "x": 81,
        "y": 71
      },
      {
        "x": 77,
        "y": 8
      },
      {
        "x": 44,
        "y": 76
      },
      {
        "x": 89,
        "y": 37
      },
      {
        "x": 55,
        "y": 89
      },
      {
        "x": 21,
        "y": 92
      },
      {
        "x": 39,
        "y": 88
      },
      {
        "x": 70,
        "y": 20
      },
      {
        "x": 82,
        "y": 22
      },
      {
        "x": 11,
        "y": 78
      },
      {
        "x": 19,
        "y": 69
      },
      {
        "x": 70,
        "y": 7
      },
      {
        "x": 97,
        "y": 17
      },
      {
        "x": 19,
        "y": 42
      },
      {
        "x": 7,
        "y": 65
      },
      {
        "x": 49,
        "y": 101
      },
      {
        "x": 65,
        "y": 8
      },
      {
        "x": 62,
        "y": 115
      },
      {
        "x": 45,
        "y": 69
      },
      {
        "x": 42,
        "y": 31
      },
      {
        "x": 91,
        "y": 49
      },
      {
        "x": 4,
        "y": 113
      },
      {
        "x": 41,
        "y": 11
      },
      {
        "x": 11,
        "y": 83
      },
      {
        "x": 59,
        "y": 112
      },
      {
        "x": 72,
        "y": 61
      },
      {
        "x": 24,
        "y": 118
      },
      {
        "x": 32,
        "y": 65
      }
    ]
  },
  {
    "id": "Category 3",
    "data": [
      {
        "x": 6,
        "y": 68
      },
      {
        "x": 86,
        "y": 35
      },
      {
        "x": 61,
        "y": 44
      },
      {
        "x": 95,
        "y": 82
      },
      {
        "x": 27,
        "y": 48
      },
      {
        "x": 31,
        "y": 8
      },
      {
        "x": 66,
        "y": 36
      },
      {
        "x": 4,
        "y": 90
      },
      {
        "x": 93,
        "y": 43
      },
      {
        "x": 60,
        "y": 109
      },
      {
        "x": 0,
        "y": 26
      },
      {
        "x": 53,
        "y": 57
      },
      {
        "x": 67,
        "y": 47
      },
      {
        "x": 30,
        "y": 33
      },
      {
        "x": 14,
        "y": 10
      },
      {
        "x": 51,
        "y": 23
      },
      {
        "x": 49,
        "y": 43
      },
      {
        "x": 7,
        "y": 29
      },
      {
        "x": 9,
        "y": 67
      },
      {
        "x": 10,
        "y": 82
      },
      {
        "x": 81,
        "y": 28
      },
      {
        "x": 3,
        "y": 9
      }
    ]
  },
  {
    "id": "Category 4",
    "data": [
      {
        "x": 21,
        "y": 25
      },
      {
        "x": 46,
        "y": 13
      },
      {
        "x": 36,
        "y": 11
      },
      {
        "x": 45,
        "y": 10
      },
      {
        "x": 50,
        "y": 6
      },
      {
        "x": 37,
        "y": 52
      },
      {
        "x": 18,
        "y": 66
      },
      {
        "x": 25,
        "y": 42
      },
      {
        "x": 45,
        "y": 13
      },
      {
        "x": 35,
        "y": 16
      },
      {
        "x": 80,
        "y": 50
      },
      {
        "x": 37,
        "y": 146
      },
      {
        "x": 22,
        "y": 97
      },
      {
        "x": 25,
        "y": 88
      },
      {
        "x": 40,
        "y": 51
      },
    ]
  },
  {
    "id": "Category 5",
    "data": [
      {
        "x": 11,
        "y": 55
      },
      {
        "x": 40,
        "y": 10
      },
      {
        "x": 68,
        "y": 46
      },
      {
        "x": 52,
        "y": 28
      },
      {
        "x": 21,
        "y": 78
      },
      {
        "x": 79,
        "y": 49
      },
      {
        "x": 40,
        "y": 17
      },
      {
        "x": 87,
        "y": 14
      },
      {
        "x": 29,
        "y": 44
      },
      {
        "x": 14,
        "y": 123
      },
      {
        "x": 61,
        "y": 31
      },
      {
        "x": 111,
        "y": 83
      },
      {
        "x": 39,
        "y": 102
      },
      {
        "x": 32,
        "y": 81
      },
      {
        "x": 14,
        "y": 89
      },
      {
        "x": 22,
        "y": 45
      }
    ]
  },
  {
    "id": "Category 6",
    "data": [
      {
        "x": 11,
        "y": 26
      },
      {
        "x": 63,
        "y": 1
      },
      {
        "x": 46,
        "y": 11
      },
      {
        "x": 42,
        "y": 110
      },
      {
        "x": 55,
        "y": 68
      },
      {
        "x": 47,
        "y": 62
      },
      {
        "x": 18,
        "y": 86
      },
      {
        "x": 45,
        "y": 92
      },
      {
        "x": 45,
        "y": 113
      },
      {
        "x": 55,
        "y": 106
      },
      {
        "x": 70,
        "y": 50
      },
      {
        "x": 27,
        "y": 106
      },
      {
        "x": 52,
        "y": 97
      },
      {
        "x": 76,
        "y": 108
      },
      {
        "x": 60,
        "y": 81
      },
      {
        "x": 113,
        "y": 110
      },
      {
        "x": 50,
        "y": 12
      },
      {
        "x": 99,
        "y": 51
      },
      {
        "x": 35,
        "y": 55
      },
      {
        "x": 21,
        "y": 11
      },
      {
        "x": 57,
        "y": 17
      },
      {
        "x": 121,
        "y": 18
      },
      {
        "x": 48,
        "y": 103
      },
      {
        "x": 20,
        "y": 59
      },
    ]
  },
]

class ScatterplotChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textColor: this.props.textColor,
      colorScale: this.props.colorScale,
      seriesScale: this.props.seriesScale,
      customColors: this.props.customColors
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      textColor: nextProps.textColor,
      colorScale: nextProps.colorScale,
      seriesScale: nextProps.seriesScale,
      customColors: nextProps.customColors
    });
  }

  render() {
    let updatedColors;
    if (this.state.colorScale === "custom") {
      updatedColors = this.state.customColors;
    } else {
      updatedColors = colors[this.state.colorScale];
    }

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
      <ResponsiveScatterPlot
        data={displayData}
        margin={{ top: 20, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        xFormat={function(e){return e+" kg"}}
        yScale={{ type: 'linear', min: 0, max: 'auto' }}
        yFormat={function(e){return e+" cm"}}
        // colors={colors[this.state.colorScale]}
        colors={updatedColors}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X-axis',
          legendPosition: 'middle',
          legendOffset: 46
        }}
        axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y-axis',
          legendPosition: 'middle',
          legendOffset: -60
        }}
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

export default ScatterplotChart;
