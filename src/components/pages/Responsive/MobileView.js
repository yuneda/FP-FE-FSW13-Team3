import React from 'react';
import MediaQuery from 'react-responsive';

function MobileView(props) {
  return <MediaQuery maxWidth={767}>{props.children}</MediaQuery>;
}

export default MobileView;
