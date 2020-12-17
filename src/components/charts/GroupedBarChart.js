import React, { Component } from 'react';
import chroma from 'chroma-js';
import { ResponsiveBar } from '@nivo/bar';
const colors = require('./ChartColors.js');

let data = [
  {
    id: "1",
    "Category": 83,
    "Category 2": 129,
    "Category 3": 74,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 114,
  },
  {
    id: "2",
    "Category": 83,
    "Category 2": 113,
    "Category 3": 131,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 68,
  },
  {
    id: "3",
    "Category": 36,
    "Category 2": 53,
    "Category 3": 191,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 134,
  },
  {
    id: "4",
    "Category": 54,
    "Category 2": 52,
    "Category 3": 177,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 124,
  },
  {
    id: "5",
    "Category": 13,
    "Category 2": 160,
    "Category 3": 188,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 144,
  },
  {
    id: "6",
    "Category": 128,
    "Category 2": 34,
    "Category 3": 6,
    "Category 4": 74,
    "Category 5": 74,
    "Category 6": 154,
  },
];

class GroupedBarChart extends Component {
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
    let truncatedData = [];
    let keys;

    if (this.state.seriesScale === 1) {
      displayData = data;

      for (var i = 0; i < displayData.length; i++){
        var obj = {}
        obj["id"] = i;
        obj["Category"] = displayData[i]["Category"];
        obj["Category 2"] = displayData[i]["Category 2"];
        truncatedData.push(obj);
      }
      keys = [ "Category", "Category 2" ];

    } else if (this.state.seriesScale === 3) {
      displayData = data;

      for (var i = 0; i < displayData.length; i++){
        var obj = {}
        obj["id"] = i;
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
      <ResponsiveBar
        data={truncatedData}
        keys={keys}
        margin={{ top: 20, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        innerPadding={2}
        groupMode="grouped"
        // colors={colors[this.state.colorScale]}
        colors={updatedColors}
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

export default GroupedBarChart;
