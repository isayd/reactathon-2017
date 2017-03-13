
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Nav = require('Nav');
var Main = require('Main');
var Home = require('Home');
var Team = require('Team');
var Process = require('Process');
var Idea = require('Idea');
var Profile = require('Profile');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//load app.scss with an alias
require ('style!css!sass!applicationStyles')


ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = "/" component = {Main}>
      <Route path = "/team" component = {Team}/>
      <Route path = "/idea" component = {Idea}/>
      <Route path = "/process" component = {Process}/>
      <Route path = "/profile" component = {Profile}/>
      <IndexRoute component = {Home}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
