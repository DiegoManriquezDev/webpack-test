import _ from 'lodash';
import myName from './myName';
import {functionOne,functionTwo} from './myModule'

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', 'Diego'], ' ');
    element.textContent = myName('Diego');
    return element;
  }
  
  document.body.appendChild(component());