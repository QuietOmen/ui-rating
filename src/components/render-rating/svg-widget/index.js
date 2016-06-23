import React, { PropTypes, Component } from 'react';

export class SVGIcon extends Component {
  static propTypes = {
    onMouseEnter: PropTypes.func.isRequired,
    onMouseClick: PropTypes.func.isRequired,
    iconType: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    const { size, cursor } = this.props;
    const SIZE = size || '16px';
    const CURSOR = cursor || 'auto';

    this.state = {
      svgStyle: {
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
    const {
      iconType,
      index,
      onMouseEnter,
      onMouseClick,
    } = this.props;
    
    return (
      <svg
        style={this.state.svgStyle}
        onMouseOver={ e => onMouseEnter(e, index) }
        onTouchEnd={ e => onMouseClick(e, index) }
        onClick={ e => onMouseClick(e, index) }
      >
        <use xlinkHref={iconType} />
      </svg>
    );
  }
}
