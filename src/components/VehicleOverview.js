import {useDispatch, useSelector } from 'react-redux'
import VehicleModal from "./VehicleModal"
import { deleteVehicle, initVehicles } from "../redux/reducers/vehicleReducer"


export const VehicleOverview: React.FC<IVehicleOverview> = ({Vehicles}: IVehicleOverview) => {
    const state = useSelector(state => state.vehicles)
    const dispatch = useDispatch()

    const delVehicle = async (vehicle) => {
      dispatch(deleteVehicle(vehicle))
      dispatch(initVehicles())
    }
    
return <ul className="list-group">
        {
          state.data.map((vehicle) => {
            return <li className="list-group-item" key= {vehicle.id}>
              <span>Order number: {vehicle.orderNumber}</span>
              <span>Frame: {vehicle.frame}</span>
              <span>Model: {vehicle.model}</span>
              <span>Number plate: {vehicle.numberPlate}</span>
              <span>Delivery date: {vehicle.deliveryDate}</span>
              <VehicleModal vehicle = {vehicle} buttonName = 'Update'/>
              <button className="btn btn-primary m-1" onClick={() => delVehicle(vehicle)}>Delete</button>
              </li>
          })
        }
      </ul>
  

}