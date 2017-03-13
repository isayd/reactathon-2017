var React = require('react');


var Home = React.createClass ({
  render: function(){
    var style = {backgroundImage: 'url("https://media.giphy.com/media/wXhQKlsujXln2/giphy.gif")'};
    return (
        <div className= "home-back" style={style}>
          <h1 className = "home-text-pre">Find your Hacking Team</h1>
        </div>

        // <video src="https://www.youtube.com/watch?v=3KyYG31y-yI"/>
    );
  }
});

module.exports = Home;
