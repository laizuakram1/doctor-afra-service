
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Sevices/Services';
import Slider from './Pages/Home/Slider/Slider';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/slider" element={<Slider></Slider>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>

      </Routes>
    </div>
  );
}

export default App;
