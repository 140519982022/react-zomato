import './assets/css/home.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomeHeader from './assets/components/HomeHeader';
import PopularLocation from './assets/components/PopularLocation';
import LocationCard from './assets/components/common/LocationCard';
import Footer from './assets/components/common/Footer';


function App() {
  return (
    <>
      <div className='container-fluid header-img'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-12 '>
              <HomeHeader></HomeHeader>
            </div>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='container'>
          <div className='row '>
            <div className='col-md-10 m-auto'>
              <PopularLocation></PopularLocation>
            </div>
          </div>
        </div>
      </div>
      <LocationCard></LocationCard>
      <Footer></Footer>
    </>
  );
}

export default App;
