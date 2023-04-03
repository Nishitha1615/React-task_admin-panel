import React from 'react'
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

import "./App.css";
const Topbarr = () => {
  const [show, setShow] = useState(true);
  const dropdown= {
    display: show ? "none" : "block",
  };
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control top-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"></input>
                <div class="input-group-append">
                  <button class="btn btn-primary btn-top" style={{"height":"2.92rem","width":"2.9rem"}} type="button">
                    <i class="fas fa-search fa-sm"></i>
                  </button>
                </div>
            </div>
          </form>
        </div>
        <div className='topright'>
        <div className="notification-but">
        <IconButton  aria-label="mailbut">
      <Badge badgeContent={3} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton>

    <IconButton aria-label="mailbut">
      <Badge badgeContent={7} color="error">
        <MailIcon />
      </Badge>
    </IconButton>
        </div>


        {/* <IconButton className="notification-but" aria-label="mailbut">
      <Badge badgeContent={3} color="error">
        <NotificationsIcon />
      </Badge>
    </IconButton> */}

    {/* <IconButton aria-label="mailbut">  margin-left: -14px;
      <Badge badgeContent={7} color="error">
        <MailIcon />
      </Badge>
    </IconButton> */}

    <div class="topbar-divider d-none d-sm-block"></div>

    <li class="nav-item dropdown no-arrow show" style={{"marginleft":"40rem","margintop":"-6rem"}}>
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                <div className="profile-icon-but " style={{"marginleft":"-7rem"}}>
                                <IconButton onClick={() => setShow(!show)}>
                                <img class="img-profile rounded-circle" src="img/undraw_profile.svg"></img>
                                </IconButton>
                                </div>
                                {/* <img class="img-profile rounded-circle" src="img/undraw_profile.svg"></img> */}
                            </a>
                          
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in show" aria-labelledby="userDropdown"  style={dropdown}>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>
        </div>
      </div>

    </div>
  )
}

export default Topbarr
