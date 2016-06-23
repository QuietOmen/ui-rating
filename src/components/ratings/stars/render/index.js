import React, { PropTypes } from 'react';
import { doesBrowserSupportSVG } from 'utils/doesBrowserSupportSvg';
import { SVGIcon } from './svg-widget/';
import { PNGIcon } from './png-widget/';

export const RenderIcon = (props) => {
  const { disabled, highlight, index, selected } = props;
  let iconType = '#star-empty';

  if (!disabled) {
    if (highlight >= index) {
      iconType = '#star-whole-highlight';
    } else if (selected >= index && highlight === -1) {
      iconType = '#star-whole';
    } else if (selected === -1 && highlight === -1){
      iconType = `#star-${props.data.fill}`
    }
  } else {
    iconType = `#star-${props.data.fill}`
  }

  if (doesBrowserSupportSVG()) {
    return <SVGIcon iconType={iconType} {...props}/>;
  }
  return <PNGIcon iconType={iconType} {...props}/>;
};

RenderIcon.propTypes = {
  index: PropTypes.number.isRequired,
  highlight: PropTypes.number,
  selected: PropTypes.number,
};
