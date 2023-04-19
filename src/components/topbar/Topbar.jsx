import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons'
import img from '../topbar/image/user.png';

export default function Topbar(){
    return(
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <span className='logo'>admin dashboard</span>
                    </div>
                <div className='topRight'>
                    <div className= 'topbarIconContainer'>
                        <NotificationsNone/>
                        <span className ='topIconBadge'>2</span>
                    </div>
                    <div className= 'topbarIconContainer'>
                        <Language/>
                        <span className ='topIconBadge'>2</span>
                    </div>
                    <div className= 'topbarIconContainer'>
                        <Settings/>
                       
                    </div>
                    <img src={img} alt='' className='topAvatar'/>
                </div>

            </div>
        </div>
    )
}