import React, { Component } from 'react';
import './Sidebar.scss';
import { SketchPicker } from "react-color";
import Select from 'react-select';

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
  { value: 'qualitativeLight', label: 'Qualitative Light', colors: ["#1D6AF0", "#6200C2", "#1E008F", "#00A1C2", "#DA3395", "#914CD4", "#A70062", "#00404E", "#600558", "#997809", "#18703C", "#FF463C"] },
  { value: 'qualitativeDark', label: 'Qualitative Dark', colors: ["#1D6AF0", "#AD2CA2", "#B5B2FF", "#00A1C2", "#DF4CA2", "#FFE99F", "#99D9E7", "#CF83C8", "#FFC80F", "#24A85A", "#FFB5B1", "#F63261"] },
  { value: 'sequentialPurple', label: 'Sequential Purple', colors: ["#580450", "#700666", "#88077C", "#A00892", "#AE2DA2", "#BC52B3", "#CB77C3", "#D99CD3", "#E7C1E4", "#F5E6F4"] },
  { value: 'sequentialBlue', label: 'Sequential Blue', colors: ["#103A84", "#144AA8", "#195ACC", "#1D7AF0", "#3F80F2", "#6197F2", "#83ADF7", "#A5C3F9", "#C6DAFB", "#E8F0FD"] },
  { value: 'diverging', label: 'Diverging', colors: ["#00A1C2", "#26AFCB", "#4CBDD4", "#73CBDD", "#99D9E7", "#BFE8F0", "#E4F6F9", "#FAE5F2", "#F4BFD3", "#ED99CA", "#E673B6", "#DF4CA2", "#D8268E", "#D1007A"] },
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

          <div className="sidebar-brand mb-20">
            <div>
              Data Vis Palette Tool
              <p class="font-size-12 mt-0 text-muted">By: Kevin Chang</p>
            </div>
          </div>

          <h5 className="sidebar-title">Theme</h5>
          <div className="sidebar-divider"></div>

          <div onClick={this.handleClick} className="sidebar-link d-flex align-items-center">
            <span className="circle" style={{background: this.state.backgroundColor}}></span>
            <div>
              <p className="color-title">Background Color</p>
              <span className="color-value">{this.state.backgroundColor}</span>

              <div>
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
              </div>

            </div>
          </div>

          <div onClick={this.handleTextClick} className="sidebar-link d-flex align-items-center">
            <span className="circle" style={{background: this.state.textColor}}></span>
            <div>
              <p className="color-title">Text Color</p>
              <span className="color-value">{this.state.textColor}</span>

              <div>
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
              </div>
            </div>
          </div>

          <br />

          <h5 className="sidebar-title">Colors</h5>
          <div className="sidebar-divider"></div>

          <div className="sidebar-link">
            <Select
              defaultValue={colourOptions[0]}
              options={colourOptions}
              onChange={this.handleColorScaleChange}
            />
          </div>

          {/*}
          <div className="sidebar-link d-flex align-items-center justify-content-between">
            <div className="drag"></div>
            <span className="circle" style={{background: "red"}}></span>
            <span className="color-value">#FFFFFF</span>
            <span className="close"></span>
          </div>

          <div className="sidebar-link d-flex align-items-center justify-content-between">
            <div className="drag"></div>
            <span className="circle" style={{background: "red"}}></span>
            <span className="color-value">#FFFFFF</span>
            <span className="close"></span>
          </div>
          {*/}

        </div>
      </div>
    );
  }
}

export default Sidebar;
