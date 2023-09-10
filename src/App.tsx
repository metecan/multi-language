import type { FC } from 'react';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div>
      <Navbar />
      <Pricing />
    </div>
  );
};
export default App;
