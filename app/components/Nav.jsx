var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = () => {
    return (
      <div className = "top-bar">
        <div className = "top-bar-left">
          <ul className = "menu">
            <li className="menu-text" id="companyName">
              Anamik
            </li>
            <li>
              <IndexLink className="black-text" to ="/" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Home</IndexLink>
            </li>
            <li>
              <Link className="black-text" to ="/process" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Process</Link>
            </li>
            <li>
              <Link className="black-text" to ="/profile" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Profile</Link>
            </li>
            <li>
              <Link className="black-text" to ="/idea" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Idea</Link>
            </li>
            <li>
              <Link className="black-text" to ="/team" activeClassName="active-link" activeStyle = {{fontWeight: 'bold'}}>Team</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

module.exports = Nav;

// <div className = "top-bar-right">
//   <ul className="menu">
//     <li className="menu-text">
//       Created by <span id="black-text">Binary</span>
//     </li>
//   </ul>
// </div>
