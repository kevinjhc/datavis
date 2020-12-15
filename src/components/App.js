import React, { Component } from 'react';
import './App.scss';
import Sidebar from './Sidebar';

import BarChart from './charts/BarChart';
import StackedBarChart from './charts/StackedBarChart';
import GroupedBarChart from './charts/GroupedBarChart';
import LineChart from './charts/LineChart';
import AreaChart from './charts/AreaChart';
import ScatterPlotChart from './charts/ScatterPlotChart';
import PieChart from './charts/PieChart';
import RadarChart from './charts/RadarChart';
import HeatmapChart from './charts/HeatmapChart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      colorScale: "qualitativeLight"
    };

    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleColorScaleChange = this.handleColorScaleChange.bind(this);
  }

  handleBackgroundColorChange(color) {
    this.setState({backgroundColor: color});
  }

  handleTextColorChange(color) {
    this.setState({textColor: color});
  }

  handleColorScaleChange(colorScale) {
    this.setState({colorScale: colorScale});
  }

  render() {

    return (
      <>
        <div className="page-wrapper with-sidebar" style={{backgroundColor: this.state.backgroundColor, color: this.state.textColor}}>

          <Sidebar
            backgroundColor={this.state.backgroundColor}
            onBackgroundColorChange={this.handleBackgroundColorChange}
            textColor={this.state.textColor}
            onTextColorChange={this.handleTextColorChange}
            colorScale={this.state.colorScale}
            onColorScaleChange={this.handleColorScaleChange} />

          <div className="content-wrapper">
            <div className="w-500 mx-auto">

              <div className="chart-container-sm">
                <h6>Bar Chart</h6>
                <BarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-sm">
                <h6>Stacked Bar Chart</h6>
                <StackedBarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-sm">
                <h6>Grouped Bar Chart</h6>
                <GroupedBarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-md">
                <h6>Line Chart</h6>
                <LineChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-md">
                <h6>Area Chart</h6>
                <AreaChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-md">
                <h6>Scatter Plot Chart</h6>
                <ScatterPlotChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-sm">
                <h6>Pie Chart</h6>
                <PieChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-lg">
                <h6>Radar Chart</h6>
                <RadarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

              <hr />

              <div className="chart-container-lg">
                <h6>Heatmap Chart</h6>
                <HeatmapChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale} />
              </div>

            </div>
          </div>

        </div>
      </>
    )
  }
}

export default App;
