var React = require('react');

var Team = React.createClass ({

  render: function(){
    return (
      <div className="row" className="steps">

        <div className="column small-2 large-6">
          <p className = "title">Isayd Gallegos</p>
        </div>
        <div className="column small-2 large-6">
          <p className = "title">Abraham Nieto</p>
        </div>
      </div>
    );
  }
});

module.exports = Team;
