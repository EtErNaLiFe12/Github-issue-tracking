import './App.css';
import Router from './routes';
import SwiperCore, { Autoplay, Pagination, Navigation, Virtual } from 'swiper';
import ThemeConfig from 'theme';
import 'swiper/swiper-bundle.css';

function App() {
  SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}

export default App;
