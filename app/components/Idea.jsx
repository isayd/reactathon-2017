var React = require('react');

var Idea = React.createClass({

  render: function(){
    return (
        <div className = "quote">
            <p>“If you give a good idea to a mediocre team, they will screw it up. If you give a mediocre idea to a brilliant team, they will either fix it or throw it away and come up with something better.” </p>
            <p><bold>-Ed Catmull-</bold></p>
        </div>
    );
  }
})

module.exports = Idea;
