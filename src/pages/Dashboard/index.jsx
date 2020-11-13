import React from 'react';
import MediaQuery from 'react-responsive';
import { screenMedia } from '../../helpers/screen.helper';

import res_imgone from '../../assets/images/res_img1.png';
import res_imgtwo from '../../assets/images/res_img2.jpg';

function Dashboard() {
  const isDesktopOrLaptop = screenMedia.desktopOrLaptop;
  const isMobileOrTablet = screenMedia.tabletOrMobile;

  return (
    <div className="dashboard pt-3">
      <h1>Dashboard!!!</h1>
      <div>
        <MediaQuery {...isDesktopOrLaptop}>
          <img style={{ width: '50%', height: 'auto' }} src={res_imgone} alt="" />
        </MediaQuery>
        <MediaQuery {...isMobileOrTablet}>
          <img style={{ width: '80%', height: 'auto' }} src={res_imgtwo} alt="" />
        </MediaQuery>
      </div>
    </div>
  )
}

export default Dashboard;