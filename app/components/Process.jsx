var React = require('react');


var Process = React.createClass({

  render: function(){
    return (
      <div>
        <div className="row" className="steps">
          <div className="column small-2 large-4">
            <p className = "title">Search</p>
            <p className = "description">
              Select Objective
            </p>
          </div>
          <div className="column small-2 large-4">
            <p className = "title">Match</p>
              <p className = "description">
                Recieve Confirmation
              </p>
          </div>
          <div className="column small-2 large-4">
            <p className = "title">Team up</p>
              <p className = "description">
                Meet your partners on the event
              </p>
          </div>
        </div>

        <div className="row" className="steps">
          <div className="column small-2 large-4">
            <p className = "title">Search</p>
            <p className = "description">
              Select Objective
            </p>
          </div>
          <div className="column small-2 large-4">
            <p className = "title">Match</p>
              <p className = "description">
                Recieve Confirmation
              </p>
          </div>
          <div className="column small-2 large-4">
            <p className = "title">Team up</p>
              <p className = "description">
                Meet your partners on the event
              </p>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = Process;
