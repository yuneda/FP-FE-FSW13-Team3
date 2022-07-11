import React from 'react';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useBreakpoints } from '../../../utils/breakpoints/index';
import MobileView from './MobileView';
import TabletView from './TabletView';
import DesktopView from './DesktopView';

const MyResponsive = () => {
  return (
    <div>
      <MobileView>
        <p>Mobile 1</p>
      </MobileView>
      <TabletView>
        <p>Tablet 1</p>
      </TabletView>
      <DesktopView>
        <p>Desktop 1</p>
      </DesktopView>
      <p className="text-secondary-lg text-success-md text-black-sm">
        yaayayya
      </p>
      <button style={{ display: 'inline-block' }}>Go</button>
      <button style={{ display: 'inline-block' }}>Delete</button>
      <button style={{ display: 'inline-block' }}>Add</button>
      <button style={{ display: 'inline-block' }}>Go</button>
      <button style={{ display: 'inline-block' }}>Delete</button>
      <button style={{ display: 'inline-block' }}>Add</button>
      <button style={{ display: 'inline-block' }}>Go</button>
      <button style={{ display: 'inline-block' }}>Delete</button>
      <button style={{ display: 'inline-block' }}>Add</button>
    </div>
  );
};

export default MyResponsive;
