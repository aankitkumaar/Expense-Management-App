import React from 'react'
import { SidebarMenu } from '../Data/data'
import '../styles/LayoutStyle.css'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Layout = ({children}) => {
    const location= useLocation();
    const {user}= useSelector(state=>state.user)
  return (
    <>
        <div className='main'>
            <div className='layout'>
                <div className='sidebar'>
                    <div className='logo'>
                        <h6>DOC APP</h6>
                        <hr/>
                    </div>
                    <div className='menu'>
                        {
                            SidebarMenu.map(menu=>{
                                const isActive= location.pathname===menu.path;
                                return(
                                    <>
                                        <div className={`menu-item ${isActive && "active"}`}>
                                            <i className={menu.icon}></i>
                                            <Link to={menu.path}>{menu.name}</Link>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='content'>
                    <div className='header'>
                        <div className='header-content'>
                            <i className='fa-solid fa bell'></i>
                            <Link to='/profile'>{user?.name}</Link>
                        </div>


                    </div>
                    <div className='body'>{children}</div>

                </div>

            </div>
            

        </div>
    </>
  )
}

export default Layout