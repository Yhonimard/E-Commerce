import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainNav from './MainNav';
import SideBar from './SideBar';

const RootLayout: FC = () => {
  return (
    <>
      <MainNav />
      <div className="flex flex-start">
        <SideBar />
        <div className="grow static">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayout;
