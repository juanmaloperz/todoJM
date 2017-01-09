import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Todoapp from 'Todoapp';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Todoapp/>,
  document.getElementById('app')
);
