import Dashboard from '../components/Dashboard';
import Downloads from '../components/Downloads';
import SideBar from '../components/SideBar';
import { Route } from 'react-router-dom';

const Profile = () => {
    return ( 
<>
<h2 style={{margin: "20px"}}>wellcome back ! dear kimia</h2>
<div className='sideBar'>
<SideBar/>
<Route path="/profile/dashboard" component={Dashboard}/>
<Route path="/profile/downloads" component={Downloads}/>
</div>

</>


     );
}
 
export default Profile;