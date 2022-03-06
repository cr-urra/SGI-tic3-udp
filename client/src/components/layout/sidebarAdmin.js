import React, { Component } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu , SidebarHeader } from 'react-pro-sidebar';
import {Link} from 'react-router-dom';
import {SidebarData} from './sidebarData';

export default class Sidebar extends Component {

    state = {
        collapsed:  true
    }

    onChange_collapsed = (e) => {
      this.setState(prevState => ({
          collapsed: !prevState.collapsed
      }))
    }

    buildMenu = () => {
      return SidebarData.map((item, index) => {
        const { title, path, icon, subNav = null } = item;
        if (subNav) {
          return (
              <SubMenu key={`sub${index}`} icon={icon} title={title} disabled>
              {
                subNav.map((subNavItem, subNavIndex) => {
                  const {title:title2,path:path2,icon:icon2,subsubNav=null} = subNavItem;

                  if (subsubNav){
                    return (
                      <SubMenu key= {`subsub${subNavIndex}`} title= {title2}>
                      {
                        subsubNav.map((subsubNavItem,subsubNavIndex) => 
                          <MenuItem key={`subsub${subNavIndex}-${subsubNavIndex}`}>
                            <Link to={subsubNavItem.path}>{subsubNavItem.title}</Link>
                          </MenuItem>
                        )
                      }
                      </SubMenu>
                    )
                  }
                  return(
                    <MenuItem item={item} key={`sub${index}-${subNavIndex}`} >
                      <Link to ={path2}>{subNavItem.title}</Link>
                    </MenuItem>
                  )
                         
                })
              }
              </SubMenu>
          )
        }
        
        return (
          <MenuItem key ={index} icon = {icon}>
            <Link to={path}>{title}</Link>
          </MenuItem>
        )
      })
    }

    render() {
        return (
          <ProSidebar 
            collapsed = {this.state.collapsed}
            breakPoint="md"
          >
            <SidebarHeader  className="boton_sidebar" >
                <button onClick= {this.onChange_collapsed} className= "btn btn-sm color_sitio2"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-border-width" viewBox="0 0 16 16">
                    <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </button>
            </SidebarHeader >
            <Menu iconShape="circle">
              {this.buildMenu()}
            </Menu>
          </ProSidebar>
      
        )
    
    }
}


