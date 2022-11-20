import React from "react";
import ReactDOM from "react-dom";
import { NavLink, withRouter} from "react-router-dom"


const items = [
    {name: "Home", to: "/", exact: true },
    {name: "About-Us", to: "/about-us"},
    {name: "Profile", to: "/profile"},
    {name: "blogs", to: "/blogs"},
    {name: "posts", to: "/post"},
];
const Navigation = ({ location }) => {
    return ( 
        <nav>
          <ul >
            {items.map((item) => {
                return (
                    <li key={item.to} >
                        <NavLink to={item.to} activeClassName="activeLink"  exact={item.exact || false} >
                             {item.name}
                        </NavLink>
                    </li>
                );
            })}

          </ul>
        </nav>
   
     );
}
 
export default withRouter(Navigation);