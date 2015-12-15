import 'babel-core/polyfill';
import React from 'react';
// import {StarRating} from 'ui-elements'
import {StarRating} from '../../dist/uiRating.js'

class Root extends React.Component {

  constructor (props){
    super(props);
  }

  render() {
    return (
      <div>
        Rating:
        <div><StarRating score={2.6} size="50px"/></div>
        <StarRating score={{earned: 3.6, total: 10}} size="50px" cursor="pointer"/>
      </div>
    );
  }
}


React.render(<Root />, document.getElementById('root'));
