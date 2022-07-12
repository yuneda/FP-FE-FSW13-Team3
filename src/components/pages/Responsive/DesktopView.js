import React from 'react';
import MediaQuery from 'react-responsive';

function DesktopView(props) {
  return <MediaQuery minWidth={992}>{props.children}</MediaQuery>;
}

export default DesktopView;
