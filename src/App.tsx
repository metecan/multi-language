import type { FC } from 'react';
import React from 'react';

import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';

const App: FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Pricing />
    </React.Fragment>
  );
};
export default App;
