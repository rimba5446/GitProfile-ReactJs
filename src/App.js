import React, { Fragment } from 'react';

import Profile from './Components/Profile';
import Header from './Components/Header';

function App() {
  return (
    <Fragment>
      <Header caption={'Github Profile'} />
      <Profile />
    </Fragment>
  );
}

export default App;