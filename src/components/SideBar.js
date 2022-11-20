import { NavLink } from 'react-router-dom';
const SideBar = () => {
    return ( 
        <aside>
<ul className='aside'>
    <li>
    <NavLink to="/profile/dashboard" activeClassName='activeTab'> dashboard </NavLink>
    </li>
    <li>
    <NavLink to="/profile/downloads" activeClassName='activeTab'> downloads </NavLink>
    </li>
 </ul>
</aside>
     );
}
 
export default SideBar;