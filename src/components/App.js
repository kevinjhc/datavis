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
      colorScale: "qualitativeLight",
      seriesScale: 3,
      customColors: []
    };

    this.handleBackgroundColorChange = this.handleBackgroundColorChange.bind(this);
    this.handleTextColorChange = this.handleTextColorChange.bind(this);
    this.handleColorScaleChange = this.handleColorScaleChange.bind(this);
    this.handleSeriesScaleChange = this.handleSeriesScaleChange.bind(this);
    this.handleCustomColorScaleChange = this.handleCustomColorScaleChange.bind(this);
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

  handleSeriesScaleChange(colorScale) {
    this.setState({seriesScale: colorScale});
  }

  handleCustomColorScaleChange(colorScale) {
    this.setState({
      colorScale: "custom",
      customColors: colorScale
    });
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
            onColorScaleChange={this.handleColorScaleChange}
            seriesScale={this.state.seriesScale}
            onSeriesScaleChange={this.handleSeriesScaleChange}
            customColors={this.state.customColors}
            onCustomColorScaleChange={this.handleCustomColorScaleChange} />

          <div className="content-wrapper">
            <div className="mx-auto" style={{width: "80%", maxWidth: "700px"}}>

              <h6 className="flex-grow-1">Bar Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative</p>
              <div className="chart-container-sm">
                <BarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Stacked Bar Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative or Sequential</p>
              <div className="chart-container-sm">
                <StackedBarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Grouped Bar Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative</p>
              <div className="chart-container-sm">
                <GroupedBarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Line Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative</p>
              <div className="chart-container-md">
                <LineChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Area Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative</p>
              <div className="chart-container-md">
                <AreaChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Scatter Plot Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative Sequential, or Diverging</p>
              <div className="chart-container-md">
                <ScatterPlotChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Pie Chart</h6>
              <p className="mt-0 text-muted">Recommended: Qualitative or Sequential</p>
              <div className="chart-container-sm">

                <PieChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Radar Chart</h6>
              <div className="chart-container-lg">
                <RadarChart
                  key={this.state.textColor}
                  textColor={this.state.textColor}
                  colorScale={this.state.colorScale}
                  seriesScale={this.state.seriesScale}
                  customColors={this.state.customColors} />
              </div>

              <hr />

              <h6>Heatmap Chart</h6>
              <p className="mt-0 text-muted">Recommended: Sequential or Diverging</p>
              <div className="chart-container-lg">
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
