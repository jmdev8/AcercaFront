import axios from 'axios'
import IVehicle from '../interfaces/IVehicle'

const baseUrl = 'https://localhost:5001/api/vehicles'

export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const getAllPaginated = async (_pageNumber=1, _pageSize=10) => {
    const res = await axios.get(baseUrl, { params: { pageNumber: _pageNumber, pageSize: _pageSize } })
    return res.data
}

export const getById = async (id) => {
    const res = await axios.get(baseUrl + '/' + id)
    return res.data
}

export const createNewVehicle = async (_vehicle: IVehicle) => {

    const response = await axios.post(baseUrl, _vehicle)
    return response.data

}

export const modifyVehicle = async (_vehicle: IVehicle) => {
    const response = await axios.put(baseUrl + '/' + _vehicle.id, _vehicle)
    return response.data

}

export const deleteExistVehicle = async (_vehicle: IVehicle) => {

    const response = await axios.delete(baseUrl + '/' + _vehicle.id)
    return response.data

}