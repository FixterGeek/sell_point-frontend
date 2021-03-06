import React from 'react';
import {Icon, Menu} from 'antd';

const SubMenu = Menu.SubMenu;

const Navbar = ({toggle, collapsed, logOut, username})=>{
    return(
        <div className={"navbarStyle"}>
            <span>
                <Icon
                    className={"trigger"}
                    type={collapsed?'menu-unfold':'menu-fold'}
                    onClick={toggle}
                    style={{color:'white', fontWeight:'bold'}}
                />
            </span>

            <span>
                <Menu mode={"horizontal"} style={{borderRadius: '10px'}}>
                    <SubMenu key={'sub1'} title={<span>{username}</span>}>
                        <Menu.Item>
                            <span onClick={logOut} >
                                <Icon type={'logout'}/>
                                <span>Cerrar Sesion</span>
                            </span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </span>
        </div>
    )

};
export default Navbar;