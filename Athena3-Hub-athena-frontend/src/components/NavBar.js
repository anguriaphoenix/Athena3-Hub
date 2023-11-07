import * as allList from "../list.js";
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
function NavBar (params) {
  const navList = allList.navList;
  return (
    <div className='navbar'>
      {/*<div className='navbar-logo'>logo</div>
      <div className='navbar-list' >{navList.map(item => <div key={item.id}>{item.name}</div>)}</div>
  <div className='navbar-wallet '>wallet</div>*/}
    <Menu mode="horizontal">
    {navList.map(item=> (<Menu.Item  key={item.id}><Link to={item.path}>{item.name}</Link></Menu.Item>))}
    </Menu>
    <div className='navbar-wallet '>wallet</div>
    </div >
  );
}
export default NavBar;
