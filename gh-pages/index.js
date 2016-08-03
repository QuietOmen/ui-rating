import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import {StarRating} from 'ui-rating';
import {StarRating} from '../../dist/ui.rating.js';

class Root extends React.Component {

  constructor (props){
    super(props);
  }

  render() {
    return (
      <div>
        Disabled Rating:
        <div><StarRating score={'2.6'} size="50px"/></div>
        <div><StarRating score={{earned: 3.6, total: 10}} size="50px" cursor="pointer"/></div>
        <br/>
        Clicking on the same star twice clears selected value and returns to
        original score:
        <br/>
        <br/>
        Selectable Rating:
        <div><StarRating disabled={false} size="50px"/></div>
        <br/>
        Selectable With Previous Rating:
        <div><StarRating disabled={false} score={1.5} size="50px"/></div>
        <br/>
        Selectable Rating & Using Callback:
        <div>
          <StarRating
            disabled={false}
            callback={(index)=>{console.log('User selected', index);}}
            score={1.5} size="50px"/>
        </div>

      </div>
    );
  }
}


ReactDOM.render(<Root />, document.getElementById('root'));
