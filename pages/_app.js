

import '../styles/globals.css';
import { CarProvider } from './Home/Occasion/CarContext';
import { HorairesProvider } from './api/Admin/SpaceAdmin/HorairesContext';

function MyApp({ Component, pageProps }) {
  return (
    <CarProvider>
      <HorairesProvider>
        <Component {...pageProps} />
      </HorairesProvider>
    </CarProvider>
  );
}

export default MyApp;


















