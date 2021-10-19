import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import VehicleModal from './components/VehicleModal';
import { VehicleOverview } from './components/VehicleOverview';
import { initVehicles } from './redux/reducers/vehicleReducer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; 
import { Pagination } from './components/Pagination';

function App() {

  const dispatch = useDispatch()

  useEffect(() => { 
          dispatch(initVehicles())
}, [dispatch])

  return (
    <div className="App">
      <VehicleModal vehicle={null} buttonName = 'New vehicle'/>
      <VehicleOverview/>
      <Pagination/>
    </div>
  );
}

export default App;
