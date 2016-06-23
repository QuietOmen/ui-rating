import React, { PropTypes, Component } from 'react'
const empty_png = require('assests/images/star-empty.png');
const whole_png = require('assests/images/star-whole.png');
const half_png = require('assests/images/star-half.png');

export class PNGIcon extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseClick: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    highlight: PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { size, cursor } = this.props;
    const SIZE = size ? size : '16px';
    const CURSOR = cursor ? cursor : 'auto';

    this.state = {
      pngStyle: {
        cursor: CURSOR,
        fontSize: SIZE,
        width: SIZE,
        height: SIZE,
        lineHeight: SIZE,
        overflow: 'hidden'
      }
    }
  }

  render() {
    const { index, onMouseEnter, onMouseClick } = this.props;
    let srcFile = empty_png;
    switch (this.props.data.fill) {
      case "whole":
        srcFile = whole_png;
        break;
      case "half":
        srcFile = half_png;
        break;
      default:
        srcFile = empty_png;
    }

    return (
      <img
        src={srcFile}
        style={this.state.pngStyle}
        onMouseEnter={ e => onMouseEnter(e, index) }
        onClick={ e => onMouseClick(e, index) }
      />
    );
  }
}
