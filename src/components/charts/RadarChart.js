import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveRadar } from '@nivo/radar';
const colors = require('./ChartColors.js');

let data = [
  {
    "attribute": "Attribute 1",
    "Category": 64,
    "Category 2": 73,
    "Category 3": 57,
    "Category 4": 57,
    "Category 5": 57,
    "Category 6": 57,
  },
  {
    "attribute": "Attribute 2",
    "Category": 20,
    "Category 2": 94,
    "Category 3": 102,
    "Category 4": 57,
    "Category 5": 57,
    "Category 6": 57,
  },
  {
    "attribute": "Attribute 3",
    "Category": 41,
    "Category 2": 21,
    "Category 3": 106,
    "Category 4": 57,
    "Category 5": 57,
    "Category 6": 57,
  },
  {
    "attribute": "Attribute 4",
    "Category": 53,
    "Category 2": 78,
    "Category 3": 105,
    "Category 4": 57,
    "Category 5": 57,
    "Category 6": 57,
  },
  {
    "attribute": "Attribute 5",
    "Category": 86,
    "Category 2": 39,
    "Category 3": 48,
    "Category 4": 57,
    "Category 5": 57,
    "Category 6": 57,
  },
]

class RadarChart extends Component {
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
    let truncatedData = [];
    let keys;

    if (this.state.seriesScale === 1) {
      displayData = data;

      for (var i = 0; i < displayData.length; i++){
        var obj = {}
        obj["attribute"] = "Attribute " + i;
        obj["Category"] = displayData[i]["Category"];
        truncatedData.push(obj);
      }
      keys = [ "Category" ];

    } else if (this.state.seriesScale === 3) {
      displayData = data;

      for (var i = 0; i < displayData.length; i++){
        var obj = {}
        obj["attribute"] = "Attribute " + i;
        obj["Category"] = displayData[i]["Category"];
        obj["Category 2"] = displayData[i]["Category 2"];
        obj["Category 3"] = displayData[i]["Category 3"];
        truncatedData.push(obj);
      }
      keys = [ "Category", "Category 2", "Category 3" ];

    } else if (this.state.seriesScale === 5) {
      truncatedData = data;
      keys = [ "Category", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6" ];
    }

    return (
    <>
    <ResponsiveRadar
        data={truncatedData}
        keys={keys}
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
