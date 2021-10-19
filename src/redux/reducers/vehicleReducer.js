import IVehicle from "../../interfaces/IVehicle"
import { createNewVehicle, modifyVehicle, deleteExistVehicle, getAll, getAllPaginated } from "../../services/VehicleService"

const VEHICLES_INIT = '@vehicles/init'
const VEHICLES_ALL = '@vehicles/all'
const VEHICLES_CREATED = '@vehicles/created'
const VEHICLES_MODIFY = '@vehicles/modify'
const VEHICLES_DELETE = '@vehicles/delete'

export const vehicleReducer = (state ={data:[]}, action) => {

  switch (action.type) {
    case VEHICLES_INIT:
      return  action.payload

    case VEHICLES_ALL:
      return  action.payload

    case VEHICLES_CREATED:
      const newStateCreated = {...state}
      newStateCreated.data = [...state.data, action.payload]
      return newStateCreated

    case VEHICLES_MODIFY:
      const newStateModify = {...state}
      newStateModify.data = state.data.map(item => item.id === action.payload.id ? action.payload : item)
      return newStateModify


    case VEHICLES_DELETE:
      const newStateDelete = {...state}
      newStateDelete.data = state.data.filter((vehicle) => vehicle.id !== action.payload)
      return newStateDelete
    

    default:
      return state
  }

  }

  export const createVehicle = (vehicle: IVehicle) => {
    return async (dispatch) => { 
      const newVehicle = await createNewVehicle(vehicle)
      dispatch({
        type: VEHICLES_CREATED,
        payload: { ...newVehicle
         }
      })
    }
    
  }

  export const initVehicles = (pageNumber, pageSize) => {
    return async (dispatch) => {
    
    const response = await getAllPaginated(pageNumber, pageSize)
 
    dispatch( {
      type: VEHICLES_INIT,
      payload: response
    })
    }
    
  }

  export const getAllVehicles = () => {
    return async (dispatch) => {
    
    const response = await getAll()
    dispatch( {
      type: VEHICLES_ALL,
      payload: response
    })
    }
    
  }
  
  export const deleteVehicle = (vehicle: IVehicle) => {
    return async (dispatch) => { 
      await deleteExistVehicle(vehicle)
      
      dispatch({
        type: VEHICLES_DELETE,
        payload: vehicle.id
     })
    }
    
 }

 export const updateVehicle = (vehicle: IVehicle) => {
  return async (dispatch) => { 
    await modifyVehicle(vehicle)

    dispatch({
      type: VEHICLES_MODIFY,
      payload:  vehicle
    })
  }
  
}
 