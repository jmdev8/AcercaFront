import Modal from 'react-modal';
import {useDispatch } from 'react-redux'
import { createVehicle, initVehicles, updateVehicle } from '../redux/reducers/vehicleReducer';
import React from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function VehicleModal ({vehicle, buttonName}) {

    const dispatch = useDispatch()

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
  
    function closeModal() {
      setIsOpen(false);
    }

    if (vehicle === null){
      vehicle = {
        orderNumber: '',
        frame: '',
        model: '',
        numberPlate: '',
        deliveryDate: ''
      }
    }

 

      const addEditVehicle = async (e) => {
          e.preventDefault()
          const {target} = e
          const _vehicle = {
            orderNumber: target.orderNumber.value,
            frame: target.frame.value,
            model: target.model.value,
            numberPlate: target.numberPlate.value,
            deliveryDate: target.deliveryDate.value
          }
          if (vehicle.id !==undefined){
            const modifiedVehicle = {
              id: vehicle.id,
              ..._vehicle
            }
            dispatch(updateVehicle(modifiedVehicle))
          } else {
            dispatch(createVehicle(_vehicle))
            dispatch(initVehicles())
          }
            
          closeModal()
        }


    return (
      <React.Fragment>
      <button className="btn btn-primary m-1" onClick={openModal}>{buttonName}</button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <form onSubmit={addEditVehicle}>
            <div className="modal-body">
            
            <div className="form-group">
              <label for="orderNumber">Order number</label>
              <input type="text" className="form-control" id="orderNumber" placeholder="Enter the order number" defaultValue={vehicle.orderNumber}></input>
            </div>

            <div className="form-group">
              <label for="frame">Frame</label>
              <input type="text" className="form-control" id="frame" placeholder="Enter the frame" defaultValue={vehicle.frame}></input>
            </div>

            <div className="form-group">
              <label for="model">Model</label>
              <input type="text" className="form-control" id="model" placeholder="Enter the model" defaultValue={vehicle.model}></input>
            </div>

            <div className="form-group">
              <label for="numberPlate">Number car plate</label>
              <input type="text" className="form-control" id="numberPlate" placeholder="Enter the number plate of the car" defaultValue={vehicle.numberPlate}></input>
            </div>

            <div className="form-group">
              <label for="deliveryDate">Delivery date</label>
              <input type="text" className="form-control" id="deliveryDate" placeholder="Enter the delivery date" defaultValue={vehicle.deliveryDate}></input>
            </div>

            
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
              <button type="submit" className="btn btn-primary">Save changes</button>
            </div>
          </form>
      </Modal>
      </React.Fragment>
    )
}

