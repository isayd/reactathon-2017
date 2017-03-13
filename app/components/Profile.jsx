var React = require('react');


var Profile = React.createClass ({




  render: function(){
    var style = {backgroundImage: 'url("https://cdn.intra.42.fr/users/medium_igallego.jpg")'};
    return (
      <div className="row">
        <div className="column small-2 large-4 picture-pro"   style={style}>
        </div>
        <div className="column small-2 large-4">
            <p className="text-pro">
              <bold>Stack:</bold> JavaScript / React
            </p>
            <p className="text-pro">
              <bold>Level:</bold> Jr Jr Jr
            </p>
            <p className="text-pro">
              <bold>Objective:</bold> (Win/Fun/Learn/Mentor)
            </p>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
