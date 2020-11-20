import React, { useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { screenMedia } from '../../helpers/screen.helper';
import { Bar } from 'react-chartjs-2';

import 'chartjs-plugin-datalabels';

import res_imgone from '../../assets/images/res_img1.png';
import res_imgtwo from '../../assets/images/res_img2.jpg';
import { getAllUsersApi } from '../../api/user.api';

function Dashboard() {
  const isDesktopOrLaptop = screenMedia.desktopOrLaptop;
  const isMobileOrTablet = screenMedia.tabletOrMobile;

  const getAllsUsersFun = async () => {
    const user = await getAllUsersApi();
    return user;
  }

  useEffect(async () => {
    const test = await getAllsUsersFun();
    console.log(test);
  }, []);

  return (
    <div className="dashboard pt-3">
      <h1>Dashboard!!!</h1>
      <div>
        <Bar
          width={30}
          height={20}
          options={{ maintainAspectRatio: false }}
          data={{
            labels: [
              "Africa",
              "Asia",
              "Europe",
              "Latin America",
              "North America",
            ],
            datasets: [
              {
                label: "Population (millions)",
                backgroundColor: [
                  "#3e95cd",
                  "#8e5ea2",
                  "#3cba9f",
                  "#e8c3b9",
                  "#c45850"
                ],
                data: [2478, 5267, 734, 784, 433],
              }
            ]
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: "Predicted world population (millions) in 2050"
            },
            plugins: {
              datalabels: {
                color: 'white',
                align: "center",
              }
            }
          }}
          plugins={{

          }}
        />
      </div>
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