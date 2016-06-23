import React, { PropTypes } from 'react';
import { RenderIcon } from './render-rating/';
import './styles';

class Widget extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      selected: -1,
      highlight: -1,
    }
  }

  renderSteps = () => {
    const ratingSteps = [];
    const rating = this.props.score.earned || this.props.score;
    const roundRating = Math.round(rating);
    const ceilRating = Math.ceil(rating);
    const total = this.props.score.total || 5;

    for (let i = 1; i <= total; i++) {
      let type = 'empty';

      if (i <= rating) {
        type = 'whole';
      } else if (roundRating == i && roundRating == ceilRating) {
        type = 'half';
      }

      ratingSteps.push({
        step: i,
        fill: type,
        size: this.props.size,
        cursor: this.props.cursor
      });
    }
    return ratingSteps;
  };

  onMouseEnter = (e, index) => {
    e.preventDefault();
    this.setState({
      highlight: index,
    });
  };

  onMouseLeave = (e) => {
    e.preventDefault();
    this.setState({
      highlight: -1,
    });
  };

  onMouseClick = (e, index) => {
    e.preventDefault();
    if(index === this.state.selected) {
      this.setState({
        selected: -1
      }, this.props.callback(-1))
    } else {
      this.setState({
        selected: index
      }, this.props.callback(index + 1))
    }
  };

  render() {
    const ratingSteps = this.renderSteps();
    return (
      <div
        className="ui-rating-widget"
        style={{height: this.props.size}}
        onMouseLeave={ e => this.onMouseLeave(e) }
      >
        <svg
          version="1.1" id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px"
          style={{display: 'none'}}
          space="preserve"
        >
          <symbol id="star-empty" viewBox="25 26 23 22">
            <path className="empty-icon" d="M46,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7l-2.3-6.5c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5
              h-6.7c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7
              c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5l-2.3-6.7l5.2-4.2C46,34.5,46,34.3,46,34.1z"/>
          </symbol>

          <symbol id="star-whole" viewBox="25 26 23 22">
            <path className="full-icon" d="M46.5,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7L37,27.3c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5
              H27c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7
              c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5L41,38.8l5.2-4.2C46.5,34.5,46.5,34.3,46.5,34.1z"/>
          </symbol>

          <symbol id="star-whole-highlight" viewBox="25 26 23 22">
            <path className="full-icon highlight" d="M46.5,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7L37,27.3c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5
              H27c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7
              c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5L41,38.8l5.2-4.2C46.5,34.5,46.5,34.3,46.5,34.1z"/>
          </symbol>

          <symbol id="star-half" viewBox="25 26 23 22">
            <path className="empty-icon" d="M46,34.1c-0.1-0.2-0.3-0.3-0.5-0.3h-6.7l-2.3-6.5c-0.1-0.2-0.3-0.3-0.5-0.3c-0.2,0-0.4,0.1-0.5,0.3l-2.3,6.5
              h-6.7c-0.2,0-0.4,0.1-0.5,0.3c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.2-3.7l6.2,3.7
              c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.3,0.1-0.5l-2.3-6.7l5.2-4.2C46,34.5,46,34.3,46,34.1z"/>
            <path className="full-icon" d="M40.6,38.8"/>
            <path className="full-icon" d="M35.7,42.9L36,27.1c-0.1-0.2,0-0.1-0.2-0.1s-0.2,0.1-0.3,0.3l-2.3,6.5h-6.7c-0.2,0-0.4,0.1-0.5,0.3
              c0,0.2,0,0.4,0.2,0.5l5.2,4.2l-2.3,6.7c-0.1,0.2,0,0.4,0.1,0.5c0.1,0.1,0.4,0.2,0.6,0l6.1-3.6"/>
          </symbol>
        </svg>

        {
          ratingSteps.map(
            (item, index) => (
              <RenderIcon
                key={index}
                data={item}
                index={index}
                highlight={this.state.highlight}
                selected={this.state.selected}
                onMouseEnter={this.onMouseEnter}
                onMouseClick={this.onMouseClick}
                {...this.props}
              />
            )
          )
        }
      </div>
    );
  }
}

Widget.propTypes = {
  score: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.shape({
      earned: PropTypes.number,
      total: PropTypes.number
    })
  ]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
  cursor: PropTypes.string,
  callback: PropTypes.func,
};

Widget.defaultProps = {
  size: '12px',
  cursor: "auto",
  disabled: true,
  score: {
    earned: 0,
    total: 5
  },
  evalScripts: 'once',
  callback: () => {},
};

export default Widget;
