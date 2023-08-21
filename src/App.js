import './App.css';
import Home from './components/Home'
import RestaurantDetail from './components/RestaurantDetail';
import Filter from './components/Filter';


import {
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:rName' element={<RestaurantDetail/>}/>
        <Route path='/filter' element={<Filter/>}/>
      </Routes>
    </div>
  );
}

export default App;
