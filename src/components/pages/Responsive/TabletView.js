import React from 'react';
import MediaQuery from 'react-responsive';

function TabletView(props) {
  return (
    <MediaQuery minWidth={768} maxWidth={991}>
      {props.children}
    </MediaQuery>
  );
}

export default TabletView;
