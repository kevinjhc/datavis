import { React, Component } from 'react';
import SketchPicker from "react-color";
import Select from 'react-select';
import Slider from 'rc-slider';

import './Sidebar.scss';
import 'rc-slider/assets/index.css';

const colors = require('./charts/ChartColors.js');

const presetBackgroundColors = [
  "rgb(255,255,255)",
  "#efefef",
  "#181818",
  "rgb(0,0,0)",
];

const presetTextColors = [
  "rgb(255,255,255)",
  "#efefef",
  "#181818",
  "rgb(0,0,0)",
];

const colourOptions = [
  { value: 'qualitativeLight', label: 'Qualitative Light', colors: colors.qualitativeLight },
  { value: 'qualitativeDark', label: 'Qualitative Dark', colors: colors.qualitativeDark },
  { value: 'sequentialPurple', label: 'Sequential Purple', colors: colors.sequentialPurple },
  { value: 'sequentialBlue', label: 'Sequential Blue', colors: colors.sequentialBlue },
  { value: 'diverging', label: 'Diverging', colors: colors.diverging },
];

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: this.props.backgroundColor,
      textColor: this.props.textColor,
      displayBackgroundColorPicker: false,
      displayTextColorPicker: false,
      colorScale: "qualitativeLight"
    };
  }

  handleClick = () => {
    this.setState({ displayBackgroundColorPicker: !this.state.displayBackgroundColorPicker });
  };

  handleBackgroundColorChange = color => {
    this.setState({
      backgroundColor: color.hex,
    });
    this.props.onBackgroundColorChange(color.hex);
  };

  handleTextClick = () => {
    this.setState({ displayTextColorPicker: !this.state.displayTextColorPicker });
  };

  handleTextColorChange = color => {
    this.setState({
      textColor: color.hex,
    });
    this.props.onTextColorChange(color.hex);
  };

  handleColorScaleChange = e => {
    this.setState({
      colorScale: e.value,
    });
    this.props.onColorScaleChange(e.value);
  };

  handleClose = () => {
    this.setState({ displayBackgroundColorPicker: false, displayTextColorPicker: false });
  };

  render() {

    return (
      <div className="sidebar shadow-lg">
        <div className="sidebar-menu">

          <div className="sidebar-brand">
            <div>
              Data Vis Palette Tool
              <p class="font-size-12 mt-0 text-muted">By: Kevin Chang</p>
            </div>
          </div>

          <div className="sidebar-divider mb-10"></div>

          <h5 className="sidebar-title">Theme</h5>

          <div onClick={this.handleClick} className="sidebar-link d-flex align-items-center justify-content-between">
            <span className="circle" style={{background: this.state.backgroundColor}}></span>
            {this.state.displayBackgroundColorPicker ? (
              <div className="popover">
                <div className="cover" onClick={this.handleClose} />
                <SketchPicker
                  color={this.state.backgroundColor}
                  onChange={this.handleBackgroundColorChange}
                  presetColors={presetBackgroundColors}
                />
              </div>
            ) : null}

            <div className="d-flex flex-grow-1">
              <div>
                <p className="color-title">Background Color</p>
                <span className="color-value">{this.state.backgroundColor}</span>
              </div>
            </div>
            <div className="edit flex-end">Edit</div>
          </div>

          <div onClick={this.handleTextClick} className="sidebar-link d-flex align-items-center  justify-content-between">
            <span className="circle" style={{background: this.state.textColor}}></span>
            {this.state.displayTextColorPicker ? (
              <div className="popover">
                <div className="cover" onClick={this.handleClose} />
                <SketchPicker
                  color={this.state.textColor}
                  onChange={this.handleTextColorChange}
                  presetColors={presetTextColors}
                />
              </div>
            ) : null}

            <div className="d-flex flex-grow-1">
              <div>
                <p className="color-title">Text Color</p>
                <span className="color-value">{this.state.textColor}</span>
              </div>
            </div>
            <div className="edit flex-end">Edit</div>
          </div>

          <div className="sidebar-divider my-10"></div>

          <h5 className="sidebar-title">Number of Series</h5>

          <div className="sidebar-link select" style={{padding: "6px 20px 0"}}>
            <Slider
              min={1}
              max={5}
              defaultValue={3}
              marks={{ 1: "Few", 2: "", 3: "Some", 4: "", 5: "Many" }}
              step={null} />
          </div>

          <div className="sidebar-divider my-10"></div>

          <h5 className="sidebar-title">Colors</h5>

          <div className="sidebar-link select">
            <Select
              defaultValue={colourOptions[0]}
              options={colourOptions}
              onChange={this.handleColorScaleChange}
            />
          </div>


          {colors[this.state.colorScale].map((value, index) => {
            return (
              <div className="sidebar-link d-flex align-items-center justify-content-between">
                <div className="drag"></div>
                <span className="circle" style={{background: value}}></span>
                <span className="color-value">{value}</span>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default Sidebar;
